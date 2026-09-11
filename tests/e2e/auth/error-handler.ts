/**
 * エラーハンドリング基盤
 * 設定エラー、外部サービスエラー、APIエラー、リソースエラーの分類と対応を行います
 */

import { AxiosError } from 'axios';
import { AuthE2EError, ErrorType, LogLevel } from './types';

export class ErrorHandler {
  private static logLevel: LogLevel = LogLevel.INFO;

  /**
   * ログレベルを設定
   */
  static setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  /**
   * 設定エラーを処理
   */
  static handleConfigError(error: Error, context: string): void {
    const message = `設定エラーが発生しました: ${error.message}`;
    const authError = new AuthE2EError(message, ErrorType.CONFIG_ERROR, context, error);
    
    this.log(LogLevel.ERROR, `[CONFIG_ERROR] ${context}: ${error.message}`);
    this.log(LogLevel.DEBUG, `設定エラーの詳細: ${error.stack}`);
    
    throw authError;
  }

  /**
   * 外部サービスエラーを処理
   */
  static async handleExternalServiceError(error: Error, service: string): Promise<void> {
    const message = `外部サービス「${service}」でエラーが発生しました: ${error.message}`;
    const authError = new AuthE2EError(message, ErrorType.EXTERNAL_SERVICE_ERROR, service, error);
    
    this.log(LogLevel.ERROR, `[EXTERNAL_SERVICE_ERROR] ${service}: ${error.message}`);
    
    // リトライが必要かどうかを判定
    if (this.shouldRetry(error)) {
      this.log(LogLevel.WARN, `${service}への接続をリトライします...`);
      // リトライロジックは呼び出し元で実装
      return;
    }
    
    throw authError;
  }

  /**
   * APIエラーを処理
   */
  static handleAPIError(error: AxiosError, request: any): void {
    const status = error.response?.status;
    const statusText = error.response?.statusText;
    const responseData = error.response?.data;
    
    let message = `API呼び出しでエラーが発生しました`;
    if (status) {
      message += ` (HTTP ${status}: ${statusText})`;
    }
    
    const authError = new AuthE2EError(message, ErrorType.API_ERROR, 'API呼び出し', error);
    
    this.log(LogLevel.ERROR, `[API_ERROR] ${error.config?.method?.toUpperCase()} ${error.config?.url}`);
    this.log(LogLevel.ERROR, `ステータス: ${status} ${statusText}`);
    
    if (this.logLevel === LogLevel.DEBUG) {
      this.log(LogLevel.DEBUG, `リクエスト詳細: ${JSON.stringify(request, null, 2)}`);
      this.log(LogLevel.DEBUG, `レスポンス詳細: ${JSON.stringify(responseData, null, 2)}`);
    }
    
    throw authError;
  }

  /**
   * リソースエラーを処理
   */
  static handleResourceError(error: Error, resourceType: string, resourceId: string): void {
    const message = `リソース操作でエラーが発生しました: ${resourceType} (ID: ${resourceId})`;
    const authError = new AuthE2EError(message, ErrorType.RESOURCE_ERROR, resourceType, error);
    
    this.log(LogLevel.WARN, `[RESOURCE_ERROR] ${resourceType} ${resourceId}: ${error.message}`);
    this.log(LogLevel.INFO, `リソースのクリーンアップを継続します...`);
    
    // リソースエラーは警告として扱い、処理を継続
    // 必要に応じて呼び出し元でキャッチして処理を継続
  }

  /**
   * リトライが必要かどうかを判定
   */
  static shouldRetry(error: Error): boolean {
    // AxiosErrorの場合
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      // 一時的なエラー（5xx、429、408）の場合はリトライ
      return status === 429 || status === 408 || (typeof status === 'number' && status >= 500);
    }
    
    // ネットワークエラーの場合
    if (error.message.includes('ECONNRESET') || 
        error.message.includes('ETIMEDOUT') ||
        error.message.includes('ENOTFOUND')) {
      return true;
    }
    
    return false;
  }

  /**
   * リトライ遅延時間を計算（指数バックオフ）
   */
  static getRetryDelay(attempt: number): number {
    const baseDelay = 1000; // 1秒
    const maxDelay = 30000; // 30秒
    const delay = Math.min(baseDelay * Math.pow(2, attempt - 1), maxDelay);
    
    // ジッターを追加（±25%）
    const jitter = delay * 0.25 * (Math.random() * 2 - 1);
    return Math.round(delay + jitter);
  }

  /**
   * リトライ実行
   */
  static async executeWithRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    context: string = '操作'
  ): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        
        if (attempt === maxRetries || !this.shouldRetry(lastError)) {
          break;
        }
        
        const delay = this.getRetryDelay(attempt);
        this.log(LogLevel.WARN, `${context}が失敗しました (試行 ${attempt}/${maxRetries}). ${delay}ms後にリトライします...`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    throw lastError!;
  }

  /**
   * ログ出力
   */
  private static log(level: LogLevel, message: string): void {
    const levels = [LogLevel.ERROR, LogLevel.WARN, LogLevel.INFO, LogLevel.DEBUG];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    
    if (messageLevelIndex <= currentLevelIndex) {
      const timestamp = new Date().toISOString();
      const levelStr = level.toUpperCase().padEnd(5);
      console.log(`[${timestamp}] ${levelStr} ${message}`);
    }
  }

  /**
   * 環境変数の検証
   */
  static validateEnvironmentVariables(requiredVars: string[]): void {
    const missing: string[] = [];
    
    for (const varName of requiredVars) {
      if (!process.env[varName]) {
        missing.push(varName);
      }
    }
    
    if (missing.length > 0) {
      const message = `必要な環境変数が設定されていません: ${missing.join(', ')}`;
      this.handleConfigError(new Error(message), '環境変数検証');
    }
  }

  /**
   * 設定値の検証
   */
  static validateConfig<T>(config: T, requiredFields: (keyof T)[]): void {
    const missing: string[] = [];
    
    for (const field of requiredFields) {
      if (config[field] === undefined || config[field] === null || config[field] === '') {
        missing.push(String(field));
      }
    }
    
    if (missing.length > 0) {
      const message = `必要な設定値が不足しています: ${missing.join(', ')}`;
      this.handleConfigError(new Error(message), '設定値検証');
    }
  }

  /**
   * エラーの詳細情報を取得
   */
  static getErrorDetails(error: unknown): {
    message: string;
    type: string;
    stack?: string;
    context?: string;
  } {
    if (error instanceof AuthE2EError) {
      return {
        message: error.message,
        type: error.type,
        stack: error.stack,
        context: error.context
      };
    }
    
    if (error instanceof AxiosError) {
      return {
        message: error.message,
        type: 'AxiosError',
        stack: error.stack,
        context: `${error.config?.method?.toUpperCase()} ${error.config?.url}`
      };
    }
    
    if (error instanceof Error) {
      return {
        message: error.message,
        type: error.constructor.name,
        stack: error.stack
      };
    }
    
    return {
      message: String(error),
      type: 'Unknown'
    };
  }

  /**
   * エラーサマリーを出力
   */
  static logErrorSummary(errors: Error[]): void {
    if (errors.length === 0) {
      return;
    }
    
    this.log(LogLevel.ERROR, `=== エラーサマリー (${errors.length}件) ===`);
    
    const errorCounts = new Map<string, number>();
    
    for (const error of errors) {
      const details = this.getErrorDetails(error);
      const key = details.type;
      errorCounts.set(key, (errorCounts.get(key) || 0) + 1);
    }
    
    for (const [type, count] of errorCounts.entries()) {
      this.log(LogLevel.ERROR, `${type}: ${count}件`);
    }
  }
}

// ログレベルを環境変数から設定
const envLogLevel = process.env.LOG_LEVEL as LogLevel;
if (envLogLevel && Object.values(LogLevel).includes(envLogLevel)) {
  ErrorHandler.setLogLevel(envLogLevel);
}