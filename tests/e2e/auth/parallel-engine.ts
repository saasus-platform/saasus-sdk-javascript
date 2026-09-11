/**
 * 並列実行対応E2Eエンジン
 * 独立したストーリーの並列実行、リソース競合回避、パフォーマンス最適化を提供
 */

import {
    DEFAULT_PARALLEL_CONFIG,
    DEFAULT_TIMEOUT_CONFIG,
    executeInParallel,
    ParallelConfig,
    PerformanceCollector,
    PerformanceTimer,
    TimeoutConfig
} from './performance';
import { StoryDefinition, StoryResult } from './types';

/**
 * 並列実行エンジンの設定
 */
export interface ParallelEngineConfig {
  parallel: ParallelConfig;
  timeout: TimeoutConfig;
  enablePerformanceTracking: boolean;
  logLevel: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
}

/**
 * デフォルトの並列実行エンジン設定
 */
export const DEFAULT_PARALLEL_ENGINE_CONFIG: ParallelEngineConfig = {
  parallel: DEFAULT_PARALLEL_CONFIG,
  timeout: DEFAULT_TIMEOUT_CONFIG,
  enablePerformanceTracking: true,
  logLevel: 'INFO'
};

/**
 * 並列実行対応E2Eエンジン
 */
export class ParallelE2EEngine {
  private client: any;
  private config: ParallelEngineConfig;
  private performanceCollector: PerformanceCollector;

  constructor(client: any, config: ParallelEngineConfig = DEFAULT_PARALLEL_ENGINE_CONFIG) {
    this.client = client;
    this.config = { ...DEFAULT_PARALLEL_ENGINE_CONFIG, ...config };
    this.performanceCollector = new PerformanceCollector();
  }

  /**
   * ストーリーを並列実行
   */
  async executeStoriesInParallel(stories: StoryDefinition[]): Promise<StoryResult[]> {
    const timer = new PerformanceTimer();
    this.log('INFO', `並列実行エンジンを開始: ${stories.length} ストーリー`);

    try {
      // 依存関係を分析してグループ化
      const storyGroups = this.analyzeAndGroupStories(stories);
      this.log('INFO', `ストーリーを ${storyGroups.length} グループに分割`);

      const allResults: StoryResult[] = [];

      // グループごとに並列実行
      for (let i = 0; i < storyGroups.length; i++) {
        const group = storyGroups[i];
        this.log('INFO', `グループ ${i + 1}/${storyGroups.length} を実行中 (${group.length} ストーリー)`);

        const groupResults = await this.executeStoryGroup(group);
        allResults.push(...groupResults);

        // 失敗したストーリーがある場合の処理
        const failedStories = groupResults.filter(result => !result.success);
        if (failedStories.length > 0) {
          this.log('WARN', `グループ ${i + 1} で ${failedStories.length} ストーリーが失敗`);
          
          // fail-fast が有効な場合は停止
          if (this.shouldFailFast()) {
            this.log('INFO', 'fail-fast が有効なため、実行を停止します');
            break;
          }
        }
      }

      const totalTime = timer.stop();
      this.log('INFO', `並列実行完了: ${totalTime.toFixed(2)}秒`);

      // パフォーマンス統計を出力
      if (this.config.enablePerformanceTracking) {
        this.logPerformanceStats();
      }

      return allResults;

    } catch (error: any) {
      const totalTime = timer.stop();
      this.log('ERROR', `並列実行中にエラーが発生: ${error.message} (${totalTime.toFixed(2)}秒)`);
      throw error;
    }
  }

  /**
   * ストーリーグループを並列実行
   */
  private async executeStoryGroup(stories: StoryDefinition[]): Promise<StoryResult[]> {
    if (!this.config.parallel.enableParallel || stories.length === 1) {
      // 並列実行が無効または単一ストーリーの場合は順次実行
      return this.executeStoriesSequentially(stories);
    }

    // 並列実行
    return executeInParallel(
      stories,
      (story) => this.executeStory(story),
      this.config.parallel.maxConcurrency
    );
  }

  /**
   * ストーリーを順次実行
   */
  private async executeStoriesSequentially(stories: StoryDefinition[]): Promise<StoryResult[]> {
    const results: StoryResult[] = [];

    for (const story of stories) {
      const result = await this.executeStory(story);
      results.push(result);

      if (!result.success && this.shouldFailFast()) {
        this.log('INFO', `fail-fast が有効なため、ストーリー '${story.name}' の失敗で停止`);
        break;
      }
    }

    return results;
  }

  /**
   * 単一ストーリーを実行
   */
  private async executeStory(story: StoryDefinition): Promise<StoryResult> {
    const timer = new PerformanceTimer();
    this.log('INFO', `ストーリー実行開始: ${story.name}`);

    try {
      // 実際のストーリー実行ロジックはここに実装
      // 現在は簡易実装として成功を返す
      const result: StoryResult = {
        story: story as any, // StoryDefinitionとStoryの型の違いを回避
        success: true,
        setup_results: [],
        step_results: [],
        cleanup_results: [],
        execution_time: timer.stop(),
        timestamp: new Date()
      };

      this.log('INFO', `ストーリー実行完了: ${story.name} (${result.execution_time.toFixed(2)}秒)`);

      // パフォーマンス統計を記録
      if (this.config.enablePerformanceTracking) {
        this.performanceCollector.recordStepTime(story.name, result.execution_time);
      }

      return result;

    } catch (error: any) {
      const executionTime = timer.stop();
      this.log('ERROR', `ストーリー実行失敗: ${story.name} - ${error.message} (${executionTime.toFixed(2)}秒)`);

      const result: StoryResult = {
        story: story as any, // StoryDefinitionとStoryの型の違いを回避
        success: false,
        setup_results: [],
        step_results: [],
        cleanup_results: [],
        execution_time: executionTime,
        timestamp: new Date(),
        error: error.message
      };

      return result;
    }
  }

  /**
   * ストーリーの依存関係を分析してグループ化
   */
  private analyzeAndGroupStories(stories: StoryDefinition[]): StoryDefinition[][] {
    // リソース競合を検出してグループ化
    const groups = this.detectResourceConflicts(stories);
    
    this.log('DEBUG', `依存関係分析結果:`);
    groups.forEach((group, index) => {
      this.log('DEBUG', `  グループ ${index + 1}: ${group.map(s => s.name).join(', ')}`);
    });

    return groups;
  }

  /**
   * リソース競合を検出
   */
  private detectResourceConflicts(stories: StoryDefinition[]): StoryDefinition[][] {
    // 簡易実装: ストーリー名やタグに基づいて競合を検出
    const conflictGroups: Map<string, StoryDefinition[]> = new Map();
    const independentStories: StoryDefinition[] = [];

    for (const story of stories) {
      const conflictKey = this.getConflictKey(story);
      
      if (conflictKey) {
        if (!conflictGroups.has(conflictKey)) {
          conflictGroups.set(conflictKey, []);
        }
        conflictGroups.get(conflictKey)!.push(story);
      } else {
        independentStories.push(story);
      }
    }

    // 結果をグループ配列に変換
    const groups: StoryDefinition[][] = [];
    
    // 競合するストーリーは順次実行グループとして追加
    for (const group of conflictGroups.values()) {
      if (group.length === 1) {
        // 単一ストーリーは独立として扱う
        independentStories.push(group[0]);
      } else {
        // 複数ストーリーは順次実行グループ
        groups.push(group);
      }
    }

    // 独立したストーリーは個別グループとして追加（並列実行可能）
    for (const story of independentStories) {
      groups.push([story]);
    }

    return groups;
  }

  /**
   * ストーリーの競合キーを取得
   */
  private getConflictKey(story: StoryDefinition): string | null {
    // ストーリー名に基づく競合検出
    const name = story.name.toLowerCase();
    
    // 同じリソースを使用するストーリーを検出
    if (name.includes('tenant') && name.includes('management')) {
      return 'tenant-management';
    }
    if (name.includes('user') && name.includes('management')) {
      return 'user-management';
    }
    if (name.includes('stripe') || name.includes('billing')) {
      return 'billing';
    }
    if (name.includes('aws') && name.includes('marketplace')) {
      return 'aws-marketplace';
    }

    // タグに基づく競合検出
    if (story.tags) {
      for (const tag of story.tags) {
        if (['billing', 'stripe', 'aws-marketplace'].includes(tag.toLowerCase())) {
          return tag.toLowerCase();
        }
      }
    }

    // 競合なし（独立実行可能）
    return null;
  }

  /**
   * fail-fast が有効かチェック
   */
  private shouldFailFast(): boolean {
    // 環境変数またはコンフィグから取得
    return process.env.FAIL_FAST === 'true' || false;
  }

  /**
   * パフォーマンス統計をログ出力
   */
  private logPerformanceStats(): void {
    const stats = this.performanceCollector.getStats();
    
    this.log('INFO', '=== パフォーマンス統計 ===');
    this.log('INFO', `総実行時間: ${stats.totalExecutionTime.toFixed(2)}秒`);
    this.log('INFO', `平均ステップ時間: ${stats.averageStepTime.toFixed(2)}秒`);
    this.log('INFO', `リトライ回数: ${stats.retryCount}`);
    this.log('INFO', `タイムアウト回数: ${stats.timeoutCount}`);

    if (stats.slowestSteps.length > 0) {
      this.log('INFO', '最も遅いステップ (上位5個):');
      stats.slowestSteps.slice(0, 5).forEach((step, index) => {
        this.log('INFO', `  ${index + 1}. ${step.name}: ${step.time.toFixed(2)}秒`);
      });
    }

    if (stats.fastestSteps.length > 0) {
      this.log('INFO', '最も速いステップ (上位5個):');
      stats.fastestSteps.slice(0, 5).forEach((step, index) => {
        this.log('INFO', `  ${index + 1}. ${step.name}: ${step.time.toFixed(2)}秒`);
      });
    }
  }

  /**
   * ログ出力
   */
  private log(level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', message: string): void {
    const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
    const currentLevelIndex = levels.indexOf(this.config.logLevel);
    const messageLevelIndex = levels.indexOf(level);

    if (messageLevelIndex >= currentLevelIndex) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level}] [ParallelEngine] ${message}`);
    }
  }

  /**
   * パフォーマンス統計を取得
   */
  getPerformanceStats() {
    return this.performanceCollector.getStats();
  }

  /**
   * パフォーマンス統計をリセット
   */
  resetPerformanceStats(): void {
    this.performanceCollector.reset();
  }
}