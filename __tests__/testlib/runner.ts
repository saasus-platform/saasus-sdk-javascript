import { Config } from './config';
import { CoverageTracker } from './coverage';
import { TestLogger } from './logger';
import { MethodExecutor } from './method-executor';
import { Step, StepResult, StepResult, Story, StoryResult } from './models';

export class StoryRunner {
  private client: any;
  private config: Config;
  private logger: TestLogger;
  private executor: MethodExecutor;
  private coverage: CoverageTracker;

  constructor(client: any, config: Config, logger: TestLogger, coverage?: CoverageTracker) {
    this.client = client;
    this.config = config;
    this.logger = logger;
    this.executor = new MethodExecutor(client, config, logger);
    this.coverage = coverage || new CoverageTracker();
  }

  getCoverage(): CoverageTracker {
    return this.coverage;
  }

  async runStory(story: Story): Promise<StoryResult> {
    const startTime = Date.now();
    this.logger.storyStart(story);
    this.executor.clearVariables();
    
    // Initialize variables from story if provided
    if (story.variables) {
      this.executor.setVariables(story.variables);
    }

    // Timeout logic
    const timeoutMs = (story.timeout || this.config.timeout) * 1000;
    const { promise: timeoutPromise, cancel: cancelTimeout } = this.createTimeoutPromise(timeoutMs);

    try {
      const result = await Promise.race([
        this.runStoryInternal(story, startTime),
        timeoutPromise
      ]);
      this.logger.storyEnd(result);
      return result;
    } catch (e: any) {
      this.logger.error(e.message);
      const result = this.createStoryResult(story, false, [], [], [], startTime);
      this.logger.storyEnd(result);
      return result;
    } finally {
      cancelTimeout();
    }
  }

  private createTimeoutPromise(timeoutMs: number): {
    promise: Promise<never>;
    cancel: () => void;
  } {
    let timeoutHandle: NodeJS.Timeout | undefined;
    const promise = new Promise<never>((_, reject) => {
      timeoutHandle = setTimeout(() => {
        reject(new Error(`Story execution timed out after ${timeoutMs / 1000}s`));
      }, timeoutMs);
    });

    return {
      promise,
      cancel: () => {
        if (timeoutHandle) {
          clearTimeout(timeoutHandle);
          timeoutHandle = undefined;
        }
      }
    };
  }

  private async runStoryInternal(story: Story, startTime: number): Promise<StoryResult> {
    let setupResults: StepResult[] = [];
    let stepResults: StepResult[] = [];
    let cleanupResults: StepResult[] = [];
    let storySuccess = true;

    try {
      // Setup
      if (story.setup) {
        this.logger.info('Executing setup steps');
        setupResults = await this.executeSteps(story, story.setup, 'setup');
        if (setupResults.some(r => !r.success)) {
          storySuccess = false;
          this.logger.error('Setup failed. Skipping main steps.');
          return this.createStoryResult(story, false, setupResults, [], [], startTime);
        }
      }

      // Main Steps
      this.logger.info('Executing main steps');
      stepResults = await this.executeSteps(story, story.steps, 'steps');
      if (stepResults.some(r => !r.success)) {
        storySuccess = false;
      }

    } finally {
      // Cleanup
      if (story.cleanup) {
        this.logger.info('Executing cleanup steps');
        cleanupResults = await this.executeSteps(story, story.cleanup, 'cleanup', true);
        if (cleanupResults.some(r => !r.success)) {
          storySuccess = false;
        }
      }
    }

    return this.createStoryResult(story, storySuccess, setupResults, stepResults, cleanupResults, startTime);
  }

  private async executeSteps(
    story: Story,
    steps: Step[],
    phase: string,
    skipFailFast = false
  ): Promise<StepResult[]> {
    const results: StepResult[] = [];
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      this.logger.debug(`[${phase}] Executing step ${i + 1}/${steps.length}: ${step.method_name}`);
      
      let result: StepResult;
      let retries = 0;
      const maxRetries = this.config.maxRetries;

      while (true) {
        // APIリクエストタイムアウト（30秒）を適用
        const stepTimeout = 30000; // 30秒
        const timeoutPromise = new Promise<StepResult>((_, reject) => {
          setTimeout(() => {
            reject(new Error(`Step execution timed out after ${stepTimeout / 1000}s: ${step.method_name}`));
          }, stepTimeout);
        });

        try {
          result = await Promise.race([
            this.executor.execute(step),
            timeoutPromise
          ]);
        } catch (timeoutError: any) {
          if (timeoutError.message.includes('timed out')) {
            this.logger.error(`Step timed out: ${step.method_name}`);
            result = {
              step,
              success: false,
              error: timeoutError,
              execution_time: stepTimeout / 1000,
              timestamp: new Date()
            };
          } else {
            throw timeoutError;
          }
        }
        
        if (result.success || retries >= maxRetries) {
          break;
        }

        // 一時的なエラーかチェック
        const isTransient = this.isTransientError(result.error);
        if (!isTransient) {
          this.logger.warning(`Non-transient error detected. Stopping retries for ${step.method_name}`);
          break;
        }

        retries++;
        // 指数バックオフでリトライ間隔を計算
        const baseDelay = 1000; // 1秒
        const maxDelay = 10000; // 10秒
        const delay = Math.min(baseDelay * Math.pow(2, retries - 1), maxDelay);
        
        this.logger.warning(`Step failed. Retrying (${retries}/${maxRetries}) in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      // Record coverage
      this.coverage.recordExecution(
        step.method_name,
        `${story.module}:${story.name}`,
        step.description || `${phase}:${step.method_name}`,
        result.status_code || 0,
        result.execution_time,
        result.success,
        result.error?.message
      );

      results.push(result);
      this.logger.stepResult(result);

      if (!result.success && !skipFailFast && this.config.failFast) {
        this.logger.warning(`Fail fast enabled. Stopping ${phase} execution.`);
        break;
      }
    }
    return results;
  }

  private isTransientError(error: any): boolean {
    if (!error) return false;

    // HTTPステータスコードベースの判定
    const statusCode = error.response?.status || error.status;
    if (statusCode) {
      // 429 (Too Many Requests), 500-599 (Server Errors) は一時的なエラー
      return statusCode === 429 || (statusCode >= 500 && statusCode < 600);
    }

    // エラーメッセージベースの判定
    const message = error.message?.toLowerCase() || '';
    const transientKeywords = [
      'timeout',
      'econnreset',
      'econnrefused',
      'etimedout',
      'network',
      'socket hang up',
      'temporary'
    ];

    return transientKeywords.some(keyword => message.includes(keyword));
  }

  private createStoryResult(
    story: Story,
    success: boolean,
    setupResults: StepResult[],
    stepResults: StepResult[],
    cleanupResults: StepResult[],
    startTime: number
  ): StoryResult {
    const executionTime = (Date.now() - startTime) / 1000;
    return {
      story,
      success,
      setup_results: setupResults,
      step_results: stepResults,
      cleanup_results: cleanupResults,
      execution_time: executionTime,
      timestamp: new Date()
    };
  }
}
