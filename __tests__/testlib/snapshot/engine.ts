import fs from 'fs';
import path from 'path';
import { STATUS_CODES } from 'http';
import { Config } from '../config';
import { TestLogger } from '../logger';
import { StoryResult } from '../models';
import { Comparator, DiffResult } from './comparator';
import { Masker } from './masker';
import { SchemaBuilder } from './schema';

export class SnapshotEngine {
  private config: Config;
  private logger: TestLogger;
  private masker: Masker;
  private comparator: Comparator;
  private schemaBuilder: SchemaBuilder;

  constructor(config: Config, logger: TestLogger) {
    this.config = config;
    this.logger = logger;
    this.masker = new Masker();
    this.comparator = new Comparator();
    this.schemaBuilder = new SchemaBuilder();
  }

  process(storyResult: StoryResult): void {
    const shouldCapture = this.config.shouldCaptureSnapshots();
    const shouldCompare = this.config.shouldCompareSnapshots();
    const shouldReport = this.config.shouldReportSnapshots();

    if (!shouldCapture && !shouldCompare && !shouldReport) {
      return;
    }

    const module = storyResult.story.module;
    const storyName = storyResult.story.name;
    const snapshotPath = this.config.getCanonicalSnapshotPath(module, storyName);
    const snapshotTagPath = this.config.getTaggedSnapshotPath(module, storyName);
    const comparisonPath = this.config.getComparisonPath(module, storyName);
    const reportPath = this.config.getReportPath(module, storyName);
    const validationPath = this.config.getValidationPath(module, storyName);

    // Format output to match reference
    const steps = storyResult.step_results.map(r => {
      const raw = r.raw_response || {};
      const headers = raw.headers || {};
      const statusCode = typeof r.status_code === 'number' ? r.status_code : undefined;
      const statusText = statusCode === undefined
        ? (r.skipped ? 'SKIPPED' : 'UNKNOWN')
        : `${statusCode} ${STATUS_CODES[statusCode] || (statusCode >= 200 && statusCode < 300 ? 'OK' : 'Error')}`;

      // Mask headers
      const maskedHeaders = { ...headers };
      if (maskedHeaders['Date']) maskedHeaders['Date'] = 'Wed, 08 Oct 2025 04:47:47 GMT';

      const jsonSample = this.masker.mask(r.response);
      const jsonSchema = this.schemaBuilder.build(r.response);

      return {
        step_name: r.step.description || r.step.method_name,
        method: r.step.method_name,
        parameters: this.masker.mask(
          r.request_params || (typeof r.step.params === 'function' ? {} : r.step.params)
        ),
        return_value: {
          type: "*http.Response",
          status_code: statusCode,
          status: statusText,
          http_response: {
            status_code: statusCode,
            status: statusText,
            headers: this.masker.mask(headers),
            content_length: parseInt(headers['content-length'] || '0'),
            trace_id: headers['x-saasus-trace-id'] || ''
          },
          json_data: jsonSample,
          json_schema: jsonSchema,
          body: "",
          headers: this.masker.mask(headers)
        },
        duration: Math.floor(r.execution_time * 1000000000),
        status_code: r.status_code,
        success: r.success,
        timestamp: r.timestamp.toISOString()
      };
    });

    const currentData = {
      story_name: storyName,
      description: storyResult.story.description,
      timestamp: storyResult.timestamp.toISOString(),
      duration: Math.floor(storyResult.execution_time * 1000000000),
      status: storyResult.success ? "passed" : "failed",
      variables: {
        story_name: storyName
      },
      steps: steps,
      summary: {
        total_steps: steps.length,
        successful_steps: steps.filter(s => s.success).length,
        failed_steps: steps.filter(s => !s.success).length,
        total_duration: Math.floor(storyResult.execution_time * 1000000000),
        average_step_duration: steps.length > 0
          ? Math.floor((storyResult.execution_time * 1000000000) / steps.length)
          : 0
      },
      metadata: {
        sdk_version: "unknown",
        test_environment: "dev",
        capture_level: "FULL",
        git_tag: "unknown"
      }
    };

    // Calculate errors/warnings similar to Go SDK
    const stateTransitionErrors = steps
      .filter(s => {
        const statusCode = s.status_code || 0;
        const isSuccessStatusCode = statusCode >= 200 && statusCode < 300;
        return s.success !== isSuccessStatusCode;
      })
      .map(s => {
        const statusCode = s.status_code || 0;
        return {
          type: "state_transition",
          step_name: s.step_name,
          message: "Step success flag doesn't match return value status code",
          severity: "warning",
          expected_value: statusCode >= 200 && statusCode < 300,
          actual_value: s.success
        };
      });

    let comparisonResult: DiffResult | null = null;

    if (shouldCapture && !shouldCompare) {
      this.saveSnapshot(snapshotPath, currentData);
      this.saveSnapshot(snapshotTagPath, currentData);
    } else if (shouldCompare) {
      comparisonResult = this.compareSnapshot(
        snapshotPath,
        currentData,
        shouldCapture,
        snapshotTagPath,
        comparisonPath,
        storyResult
      );
    }

    if (shouldReport) {
      this.generateReportArtifact(
        reportPath,
        storyResult,
        snapshotPath,
        shouldCompare ? comparisonPath : undefined,
        currentData.summary
      );
    }

    const validationData = this.buildValidationData(
      storyName,
      storyResult,
      stateTransitionErrors,
      comparisonResult
    );
    this.saveSnapshot(validationPath, validationData);
  }

  private saveSnapshot(filepath: string, data: any): void {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    this.logger.info(`Snapshot saved: ${filepath}`);
  }

  private compareSnapshot(
    filepath: string,
    currentData: any,
    allowCaptureFallback: boolean,
    tagPath: string,
    comparisonPath: string,
    storyResult: StoryResult
  ): DiffResult | null {
    if (!fs.existsSync(filepath)) {
      this.logger.warning(`Snapshot not found: ${filepath}.`);
      if (allowCaptureFallback) {
        this.logger.info(`Capturing snapshot because comparison fallback is enabled.`);
        this.saveSnapshot(filepath, currentData);
        this.saveSnapshot(tagPath, currentData);
      }
      return null;
    }

    const expectedData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
    const sanitizedExpected = this.prepareForComparison(expectedData);
    const sanitizedActual = this.prepareForComparison(currentData);
    const result = this.comparator.compare(sanitizedExpected, sanitizedActual);

    this.saveSnapshot(comparisonPath, {
      match: !result.hasDiff,
      message: result.message,
      timestamp: new Date().toISOString()
    });

    if (result.hasDiff) {
      this.logger.error(`Snapshot mismatch for ${path.basename(filepath)}`);
      this.logger.error(result.message);
      storyResult.success = false;
      storyResult.error = result.message || 'Snapshot mismatch detected';
    } else {
      this.logger.info(`Snapshot matched: ${path.basename(filepath)}`);
    }

    if (allowCaptureFallback) {
      this.saveSnapshot(filepath, currentData);
      this.saveSnapshot(tagPath, currentData);
    }

    return result;
  }

  private prepareForComparison(snapshot: any): any {
    const clone = JSON.parse(JSON.stringify(snapshot));

    if (clone.timestamp) {
      delete clone.timestamp;
    }
    if (clone.duration) {
      delete clone.duration;
    }

    if (clone.metadata) {
      delete clone.metadata.git_tag;
      delete clone.metadata.sdk_version;
      delete clone.metadata.test_environment;
    }

    if (clone.summary) {
      delete clone.summary;
    }

    if (Array.isArray(clone.steps)) {
      clone.steps.forEach((step: any) => {
        delete step.duration;
        delete step.timestamp;
        if (step.return_value) {
          delete step.return_value.body;
          delete step.return_value.headers;
          if (step.return_value.http_response) {
            delete step.return_value.http_response.headers;
            delete step.return_value.http_response.trace_id;
          }
        }
      });
    }

    return clone;
  }

  private buildValidationData(
    storyName: string,
    storyResult: StoryResult,
    stateTransitionErrors: any[],
    comparisonResult: DiffResult | null
  ): any {
    const comparisonDifferences = comparisonResult?.hasDiff
      ? [
          {
            type: 'snapshot_diff',
            step_name: 'story',
            message: 'Snapshot differences detected',
            severity: 'warning',
            diff_summary: comparisonResult.message
          }
        ]
      : null;

    const totalWarnings =
      (stateTransitionErrors?.length ?? 0) + (comparisonDifferences ? comparisonDifferences.length : 0);

    return {
      story_name: storyName,
      validation_time: new Date().toISOString(),
      is_valid: storyResult.success && !(comparisonResult?.hasDiff ?? false),
      completion_status: 'complete',
      sequence_errors: null,
      state_transition_errors: stateTransitionErrors.length > 0 ? stateTransitionErrors : null,
      comparison_differences: comparisonDifferences,
      timing_errors: null,
      summary: {
        total_errors: 0,
        total_warnings: totalWarnings,
        total_info: 0,
        is_valid: storyResult.success && !(comparisonResult?.hasDiff ?? false)
      }
    };
  }

  private generateReportArtifact(
    filepath: string,
    storyResult: StoryResult,
    snapshotPath: string,
    comparisonPath: string | undefined,
    summary: any
  ): void {
    const reportData = {
      story_name: storyResult.story.name,
      status: storyResult.success ? 'passed' : 'failed',
      timestamp: new Date().toISOString(),
      snapshot_path: snapshotPath,
      comparison_path: comparisonPath,
      summary
    };

    this.saveSnapshot(filepath, reportData);
  }
}
