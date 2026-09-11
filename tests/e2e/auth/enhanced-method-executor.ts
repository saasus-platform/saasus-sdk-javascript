/**
 * 強化されたMethodExecutor
 * タイムアウト、リトライ、ストリーミング処理、パフォーマンス測定機能付き
 */

import {
    DEFAULT_RETRY_CONFIG,
    DEFAULT_TIMEOUT_CONFIG,
    isTransientError,
    PerformanceTimer,
    ResponseStreamProcessor,
    RetryConfig,
    retryWithBackoff,
    TimeoutConfig,
    withTimeout
} from './performance';
import { Step, StepResult } from './types';

/**
 * 強化されたMethodExecutorの設定
 */
export interface EnhancedMethodExecutorConfig {
  retry: RetryConfig;
  timeout: TimeoutConfig;
  enableStreaming: boolean;
  enablePerformanceTracking: boolean;
  dryRun: boolean;
  logLevel: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
}

/**
 * デフォルトの設定
 */
export const DEFAULT_ENHANCED_EXECUTOR_CONFIG: EnhancedMethodExecutorConfig = {
  retry: DEFAULT_RETRY_CONFIG,
  timeout: DEFAULT_TIMEOUT_CONFIG,
  enableStreaming: true,
  enablePerformanceTracking: true,
  dryRun: false,
  logLevel: 'INFO'
};

/**
 * 強化されたMethodExecutor
 */
export class EnhancedMethodExecutor {
  private client: any;
  private config: EnhancedMethodExecutorConfig;
  private variables: Record<string, any>;
  private streamProcessor: ResponseStreamProcessor;

  constructor(client: any, config: EnhancedMethodExecutorConfig = DEFAULT_ENHANCED_EXECUTOR_CONFIG) {
    this.client = client;
    this.config = { ...DEFAULT_ENHANCED_EXECUTOR_CONFIG, ...config };
    this.variables = {};
    this.streamProcessor = new ResponseStreamProcessor();
  }

  /**
   * ステップを実行（強化版）
   */
  async execute(step: Step): Promise<StepResult> {
    const timer = new PerformanceTimer();
    this.log('DEBUG', `ステップ実行開始: ${step.method_name}`);

    let success = true;
    let response: any = undefined;
    let error: Error | undefined = undefined;
    let statusCode: number | undefined = undefined;
    let retryCount = 0;

    try {
      // パラメータを解決
      const params = this.resolveParameters(step);
      this.log('DEBUG', `リクエストパラメータ: ${JSON.stringify(params)}`);

      // メソッドを取得
      const method = this.getMethod(step.method_name);

      // ドライランチェック
      if (this.config.dryRun && step.skip_on_dry_run) {
        this.log('INFO', `ドライラン: ${step.method_name} をスキップ`);
        return this.createSuccessResult(step, {}, 200, timer.stop());
      }

      // リトライ付きでメソッドを実行
      const result = await retryWithBackoff(
        async () => {
          this.log('DEBUG', `API呼び出し実行: ${step.method_name} (試行 ${retryCount + 1})`);
          
          // タイムアウト付きでメソッドを実行
          return withTimeout(
            method.call(this.getMethodContext(step.method_name), ...Object.values(params)),
            this.config.timeout.requestTimeoutMs,
            `API呼び出しがタイムアウトしました: ${step.method_name}`
          );
        },
        this.config.retry,
        (error) => {
          retryCount++;
          const shouldRetry = isTransientError(error);
          this.log('WARN', `ステップ失敗 (試行 ${retryCount}): ${error.message}, リトライ: ${shouldRetry}`);
          return shouldRetry;
        }
      );

      // レスポンスを処理
      const processedResult = await this.processResponse(result, step);
      response = processedResult.response;
      statusCode = processedResult.statusCode;

      this.log('DEBUG', `レスポンス受信: ステータス ${statusCode}`);

      // ステータスコードを検証
      if (!this.isStatusCodeValid(statusCode!, step)) {
        throw new Error(`予期しないステータスコード: ${statusCode} (期待値: ${step.expected_status})`);
      }

      // バリデーション関数を実行
      if (step.validation_func && !step.validation_func(response)) {
        throw new Error('バリデーション関数が失敗しました');
      }

      // 変数を保存
      if (step.store_as) {
        this.variables[step.store_as] = response;
        this.log('DEBUG', `変数に保存: ${step.store_as}`);
      }

      // 状態を更新
      if (step.state_update) {
        step.state_update(response, this.variables);
        this.log('DEBUG', '状態更新を実行');
      }

    } catch (e: any) {
      success = false;
      error = e;
      
      // エラーレスポンスからステータスコードを抽出
      if (e.response?.status) {
        statusCode = e.response.status;
        
        // 期待されたステータスコードかチェック
        if (this.isStatusCodeValid(statusCode, step)) {
          success = true;
          error = undefined;
          response = e.response.data;
          this.log('DEBUG', `期待されたエラーステータス: ${statusCode}`);
        }
      }

      if (!success) {
        this.log('ERROR', `ステップ実行エラー: ${step.method_name} - ${e.message}`);
        if (e.response?.data) {
          this.log('ERROR', `エラーレスポンス: ${JSON.stringify(e.response.data)}`);
        }
      }
    }

    const executionTime = timer.stop();
    this.log('INFO', `ステップ完了: ${step.method_name} (${executionTime.toFixed(2)}秒, リトライ: ${retryCount}回)`);

    return this.createStepResult(step, success, response, statusCode, error, executionTime, retryCount);
  }

  /**
   * パラメータを解決
   */
  private resolveParameters(step: Step): Record<string, any> {
    if (typeof step.params === 'function') {
      return step.params(this.variables);
    }
    return step.params || {};
  }

  /**
   * メソッドを取得
   */
  private getMethod(methodName: string): Function {
    const methodParts = methodName.split('.');
    let context = this.client;
    let method: Function | undefined;

    if (methodParts.length === 1) {
      method = this.client[methodParts[0]];
    } else {
      for (let i = 0; i < methodParts.length - 1; i++) {
        context = context[methodParts[i]];
        if (!context) break;
      }
      if (context) {
        method = context[methodParts[methodParts.length - 1]];
      }
    }

    if (typeof method !== 'function') {
      throw new Error(`メソッドが見つかりません: ${methodName}`);
    }

    return method;
  }

  /**
   * メソッドのコンテキストを取得
   */
  private getMethodContext(methodName: string): any {
    const methodParts = methodName.split('.');
    if (methodParts.length === 1) {
      return this.client;
    }

    let context = this.client;
    for (let i = 0; i < methodParts.length - 1; i++) {
      context = context[methodParts[i]];
      if (!context) break;
    }

    return context || this.client;
  }

  /**
   * レスポンスを処理
   */
  private async processResponse(result: any, step: Step): Promise<{ response: any; statusCode: number }> {
    let response: any;
    let statusCode: number;

    // Axiosライクなレスポンス構造を処理
    if (result && typeof result === 'object' && 'status' in result) {
      statusCode = result.status;
      response = result.data;

      // 大きなレスポンスの場合はストリーミング処理
      if (this.config.enableStreaming && this.streamProcessor.isLargeResponse(result)) {
        response = await this.streamProcessor.processLargeResponse(result);
        this.log('INFO', `大きなレスポンスをストリーミング処理: ${step.method_name}`);
      }
    } else {
      response = result;
      statusCode = 200; // デフォルト
    }

    return { response, statusCode };
  }

  /**
   * ステータスコードが有効かチェック
   */
  private isStatusCodeValid(statusCode: number, step: Step): boolean {
    if (statusCode === step.expected_status) {
      return true;
    }

    if (step.allowed_statuses && step.allowed_statuses.includes(statusCode)) {
      return true;
    }

    return false;
  }

  /**
   * 成功結果を作成
   */
  private createSuccessResult(step: Step, response: any, statusCode: number, executionTime: number): StepResult {
    return {
      step,
      success: true,
      response,
      raw_response: { data: response, status: statusCode, headers: {} },
      status_code: statusCode,
      execution_time: executionTime,
      timestamp: new Date()
    };
  }

  /**
   * ステップ結果を作成
   */
  private createStepResult(
    step: Step,
    success: boolean,
    response: any,
    statusCode: number | undefined,
    error: Error | undefined,
    executionTime: number,
    retryCount: number
  ): StepResult {
    const result: StepResult = {
      step,
      success,
      response,
      status_code: statusCode,
      error,
      execution_time: executionTime,
      timestamp: new Date()
    };

    // raw_responseを設定
    if (success && response) {
      result.raw_response = {
        data: response,
        status: statusCode || 200,
        headers: {}
      };
    } else if (error && (error as any).response) {
      result.raw_response = (error as any).response;
    }

    // リトライ情報を追加
    if (retryCount > 0) {
      (result as any).retry_count = retryCount;
    }

    return result;
  }

  /**
   * 変数をクリア
   */
  clearVariables(): void {
    this.variables = {};
    this.log('DEBUG', '変数をクリアしました');
  }

  /**
   * 変数を取得
   */
  getVariables(): Record<string, any> {
    return { ...this.variables };
  }

  /**
   * 変数を設定
   */
  setVariable(key: string, value: any): void {
    this.variables[key] = value;
    this.log('DEBUG', `変数を設定: ${key}`);
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
      console.log(`[${timestamp}] [${level}] [EnhancedExecutor] ${message}`);
    }
  }

  /**
   * 設定を更新
   */
  updateConfig(newConfig: Partial<EnhancedMethodExecutorConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.log('DEBUG', '設定を更新しました');
  }

  /**
   * 統計情報を取得
   */
  getStats(): {
    totalExecutions: number;
    successfulExecutions: number;
    failedExecutions: number;
    averageExecutionTime: number;
  } {
    // 簡易実装: 実際の統計は別途実装が必要
    return {
      totalExecutions: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
      averageExecutionTime: 0
    };
  }
}