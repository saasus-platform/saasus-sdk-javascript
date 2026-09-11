import { Config } from './config';
import { CoverageTracker } from './coverage';
import { TestLogger } from './logger';
import { Story, StoryResult } from './models';
import { Reporter } from './reporter';
import { StoryRunner } from './runner';
import { SnapshotEngine } from './snapshot/engine';
import { SnapshotStatusFilter } from './snapshot-filter';

export class E2EEngine {
  private client: any;
  private config: Config;
  private logger: TestLogger;
  private coverage: CoverageTracker;
  private reporter: Reporter;
  private runner: StoryRunner;
  private snapshotEngine: SnapshotEngine;
  private enableParallel: boolean;
  private filterSuccessOnly: boolean;

  constructor(client: any, methods: string[] = [], config?: Config) {
    this.client = client;
    this.config = config ?? Config.fromEnv();
    this.logger = new TestLogger(this.config);
    this.coverage = new CoverageTracker(methods);
    this.reporter = new Reporter(this.config);
    this.runner = new StoryRunner(this.client, this.config, this.logger, this.coverage);
    this.snapshotEngine = new SnapshotEngine(this.config, this.logger);
    this.enableParallel = process.env.E2E_ENABLE_PARALLEL === 'true' || false;
    this.filterSuccessOnly = process.env.SNAPSHOT_SUCCESS_ONLY === 'true' || false;
  }

  async executeStories(stories: Story[]): Promise<StoryResult[]> {
    this.logger.info(`Starting E2E execution for ${stories.length} stories (parallel: ${this.enableParallel})`);

    if (this.enableParallel && stories.length > 1) {
      return this.executeStoriesInParallel(stories);
    } else {
      return this.executeStoriesSequentially(stories);
    }
  }

  private async executeStoriesSequentially(stories: Story[]): Promise<StoryResult[]> {
    const results: StoryResult[] = [];

    for (const story of stories) {
      if (this.config.dryRun) {
        this.logger.info(`DRY RUN: Would execute story '${story.name}'`);
        this.recordDryRun(story);
        continue;
      }

      const result = await this.runner.runStory(story);
      
      // フィルタリングが有効な場合、成功ケースのみを記録
      if (this.filterSuccessOnly) {
        const filteredResult = this.filterResultForSuccessOnly(result);
        results.push(filteredResult);
        this.snapshotEngine.process(filteredResult);
      } else {
        results.push(result);
        this.snapshotEngine.process(result);
      }

      if (!result.success && this.config.failFast) {
        this.logger.warning(
          `Fail fast enabled. Stopping after story '${story.name}'.`
        );
        break;
      }
    }

    return results;
  }

  private async executeStoriesInParallel(stories: Story[]): Promise<StoryResult[]> {
    this.logger.info(`Executing ${stories.length} stories in parallel`);
    
    // 独立したストーリーを並列実行
    const maxConcurrency = parseInt(process.env.E2E_MAX_CONCURRENCY || '4');
    const results: StoryResult[] = [];
    const executing: Promise<StoryResult>[] = [];

    for (const story of stories) {
      if (this.config.dryRun) {
        this.logger.info(`DRY RUN: Would execute story '${story.name}'`);
        this.recordDryRun(story);
        continue;
      }

      const storyPromise = this.runner.runStory(story).then(result => {
        this.snapshotEngine.process(result);
        return result;
      });

      executing.push(storyPromise);

      // 同時実行数制限
      if (executing.length >= maxConcurrency) {
        const completedResult = await Promise.race(executing);
        results.push(completedResult);
        
        // 完了したPromiseを削除
        const completedIndex = executing.findIndex(p => 
          Promise.race([p, Promise.resolve(completedResult)]).then(r => r === completedResult)
        );
        if (completedIndex >= 0) {
          executing.splice(completedIndex, 1);
        }

        // fail-fastチェック
        if (!completedResult.success && this.config.failFast) {
          this.logger.warning(`Fail fast enabled. Stopping after story '${completedResult.story.name}'.`);
          
          // 残りの実行中ストーリーを待機
          const remainingResults = await Promise.all(executing);
          results.push(...remainingResults);
          break;
        }
      }
    }

    // 残りのストーリーを完了まで待機
    if (executing.length > 0) {
      const remainingResults = await Promise.all(executing);
      results.push(...remainingResults);
    }

    return results;
  }

  generateReport(results: StoryResult[]): Record<string, string> {
    const reportPaths = this.reporter.generate(
      results,
      this.coverage.getCoverageReport()
    );
    this.logger.info(`Report generated at ${reportPaths.json}`);
    return reportPaths;
  }

  getCoverageReport(): any {
    return this.coverage.getCoverageReport();
  }

  private filterResultForSuccessOnly(result: StoryResult): StoryResult {
    if (!result.steps) {
      return result;
    }

    // 200系のステータスコードを持つステップのみを保持
    const filteredSteps = result.steps.filter(step => {
      const statusCode = step.status_code;
      return SnapshotStatusFilter.filterSuccessOnly(statusCode);
    });

    return {
      ...result,
      steps: filteredSteps,
      success: filteredSteps.length > 0 && filteredSteps.every(step => step.success),
      filtered_error_count: result.steps.length - filteredSteps.length
    };
  }

  private recordDryRun(story: Story): void {
    story.steps.forEach(step => {
      this.coverage.recordExecution(
        step.method_name,
        `${story.module}:${story.name}`,
        step.description || step.method_name,
        200,
        0,
        true
      );
    });
  }
}
