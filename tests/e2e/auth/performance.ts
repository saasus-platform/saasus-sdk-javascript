/**
 * パフォーマンス最適化ユーティリティ
 * 並列実行、リトライ、タイムアウト、キャッシュなどの機能を提供
 */

import { StoryDefinition } from './types';

/**
 * リトライ設定
 */
export interface RetryConfig {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
}

/**
 * タイムアウト設定
 */
export interface TimeoutConfig {
  requestTimeoutMs: number;
  storyTimeoutMs: number;
}

/**
 * 並列実行設定
 */
export interface ParallelConfig {
  maxConcurrency: number;
  enableParallel: boolean;
}

/**
 * パフォーマンス統計
 */
export interface PerformanceStats {
  totalExecutionTime: number;
  averageStepTime: number;
  slowestSteps: Array<{ name: string; time: number }>;
  fastestSteps: Array<{ name: string; time: number }>;
  retryCount: number;
  timeoutCount: number;
}

/**
 * デフォルトのリトライ設定
 */
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 10000,
  backoffMultiplier: 2
};

/**
 * デフォルトのタイムアウト設定
 */
export const DEFAULT_TIMEOUT_CONFIG: TimeoutConfig = {
  requestTimeoutMs: 30000, // 30秒
  storyTimeoutMs: 300000 // 5分
};

/**
 * デフォルトの並列実行設定
 */
export const DEFAULT_PARALLEL_CONFIG: ParallelConfig = {
  maxConcurrency: 4,
  enableParallel: true
};

/**
 * 指数バックオフでリトライを実行
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  config: RetryConfig = DEFAULT_RETRY_CONFIG,
  shouldRetry: (error: any) => boolean = () => true
): Promise<T> {
  let lastError: any;
  let delay = config.initialDelayMs;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      // 最後の試行の場合はエラーをスロー
      if (attempt === config.maxRetries) {
        break;
      }

      // リトライすべきかチェック
      if (!shouldRetry(error)) {
        throw error;
      }

      // 指数バックオフで待機
      await sleep(delay);
      delay = Math.min(delay * config.backoffMultiplier, config.maxDelayMs);
    }
  }

  throw lastError;
}

/**
 * タイムアウト付きでPromiseを実行
 */
export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutMessage = 'Operation timed out'
): Promise<T> {
  let timeoutHandle: NodeJS.Timeout;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(() => {
      reject(new Error(timeoutMessage));
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timeoutHandle!);
  }
}

/**
 * 並列実行でPromiseを実行（同時実行数制限付き）
 */
export async function executeInParallel<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  maxConcurrency: number = DEFAULT_PARALLEL_CONFIG.maxConcurrency
): Promise<R[]> {
  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (const item of items) {
    const promise = fn(item).then(result => {
      results.push(result);
    });

    executing.push(promise);

    if (executing.length >= maxConcurrency) {
      await Promise.race(executing);
      // 完了したPromiseを削除
      const completed = executing.filter(p => {
        return Promise.race([p, Promise.resolve()]).then(() => true);
      });
      executing.splice(0, executing.length, ...completed);
    }
  }

  await Promise.all(executing);
  return results;
}

/**
 * ストーリーの依存関係を分析して並列実行可能なグループに分割
 */
export function analyzeStoryDependencies(stories: StoryDefinition[]): StoryDefinition[][] {
  // 簡易実装: 全てのストーリーを独立として扱う
  // 実際の実装では、リソース競合を検出して依存関係を分析する必要がある
  
  // 現時点では、各ストーリーを個別のグループとして返す
  // これにより、全てのストーリーが並列実行可能になる
  return stories.map(story => [story]);
}

/**
 * 一時的なエラーかどうかを判定
 */
export function isTransientError(error: any): boolean {
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

/**
 * 実行時間を測定
 */
export class PerformanceTimer {
  private startTime: number;
  private endTime: number | null = null;

  constructor() {
    this.startTime = Date.now();
  }

  stop(): number {
    this.endTime = Date.now();
    return this.getElapsedTime();
  }

  getElapsedTime(): number {
    const end = this.endTime || Date.now();
    return (end - this.startTime) / 1000; // 秒単位で返す
  }

  reset(): void {
    this.startTime = Date.now();
    this.endTime = null;
  }
}

/**
 * パフォーマンス統計を収集
 */
export class PerformanceCollector {
  private stepTimes: Map<string, number[]> = new Map();
  private retryCount = 0;
  private timeoutCount = 0;

  recordStepTime(stepName: string, timeSeconds: number): void {
    if (!this.stepTimes.has(stepName)) {
      this.stepTimes.set(stepName, []);
    }
    this.stepTimes.get(stepName)!.push(timeSeconds);
  }

  recordRetry(): void {
    this.retryCount++;
  }

  recordTimeout(): void {
    this.timeoutCount++;
  }

  getStats(): PerformanceStats {
    const allTimes: Array<{ name: string; time: number }> = [];
    let totalTime = 0;
    let totalSteps = 0;

    for (const [name, times] of this.stepTimes.entries()) {
      for (const time of times) {
        allTimes.push({ name, time });
        totalTime += time;
        totalSteps++;
      }
    }

    // 遅いステップと速いステップをソート
    const sortedByTime = [...allTimes].sort((a, b) => b.time - a.time);
    const slowestSteps = sortedByTime.slice(0, 10);
    const fastestSteps = sortedByTime.slice(-10).reverse();

    return {
      totalExecutionTime: totalTime,
      averageStepTime: totalSteps > 0 ? totalTime / totalSteps : 0,
      slowestSteps,
      fastestSteps,
      retryCount: this.retryCount,
      timeoutCount: this.timeoutCount
    };
  }

  reset(): void {
    this.stepTimes.clear();
    this.retryCount = 0;
    this.timeoutCount = 0;
  }
}

/**
 * スリープ関数
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * レスポンスボディのストリーミング処理
 * 大きなレスポンスを効率的に処理
 */
export class ResponseStreamProcessor {
  private maxChunkSize: number;

  constructor(maxChunkSize: number = 1024 * 1024) { // デフォルト1MB
    this.maxChunkSize = maxChunkSize;
  }

  /**
   * 大きなレスポンスボディを処理
   */
  async processLargeResponse(response: any): Promise<any> {
    // レスポンスサイズをチェック
    const contentLength = response.headers?.['content-length'];
    if (!contentLength || parseInt(contentLength) < this.maxChunkSize) {
      // 小さいレスポンスはそのまま返す
      return response.data;
    }

    // 大きいレスポンスの場合はストリーミング処理
    // 実際の実装では、axiosのresponseTypeを'stream'に設定して処理する
    console.log(`大きなレスポンス (${contentLength} bytes) を検出しました。ストリーミング処理を使用します。`);
    
    // 簡易実装: データをそのまま返す
    // 本格的な実装では、チャンク単位で処理してメモリ使用量を削減する
    return response.data;
  }

  /**
   * レスポンスサイズが大きいかチェック
   */
  isLargeResponse(response: any): boolean {
    const contentLength = response.headers?.['content-length'];
    if (!contentLength) return false;
    return parseInt(contentLength) > this.maxChunkSize;
  }
}

/**
 * メモリキャッシュ
 */
export class MemoryCache<K, V> {
  private cache: Map<K, { value: V; expiry: number }> = new Map();
  private defaultTTL: number;

  constructor(defaultTTLSeconds: number = 3600) { // デフォルト1時間
    this.defaultTTL = defaultTTLSeconds * 1000;
  }

  set(key: K, value: V, ttlSeconds?: number): void {
    const ttl = ttlSeconds ? ttlSeconds * 1000 : this.defaultTTL;
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });
  }

  get(key: K): V | undefined {
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    // 有効期限チェック
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.value;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: K): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    // 期限切れのエントリを除外してカウント
    let count = 0;
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now <= entry.expiry) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
    return count;
  }
}
