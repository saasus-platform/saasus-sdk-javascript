import { execSync } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface SnapshotConfig {
  enableCapture: boolean;
  enableComparison: boolean;
  enableReporting: boolean;
  outputDirectory: string;
  captureLevel: string;
}

export class Config {
  baseUrl: string;
  apiKey: string;
  secretKey: string;
  saasId: string;
  stripeKey: string;
  dryRun: boolean;
  failFast: boolean;
  logLevel: LogLevel;
  maxRetries: number;
  timeout: number;
  snapshot?: SnapshotConfig;
  snapshotEnabled: boolean;
  snapshotDir: string;
  snapshotMode: 'capture' | 'compare' | 'report' | 'full';
  private cachedGitTag: string | undefined;

  constructor(
    env: Record<string, string | undefined> = process.env,
    args: string[] = process.argv.slice(2)
  ) {
    this.baseUrl = 'http://localhost:8080';
    this.apiKey = '';
    this.secretKey = '';
    this.saasId = '';
    this.stripeKey = '';
    this.dryRun = false;
    this.failFast = false;
    this.logLevel = 'INFO';
    this.maxRetries = 3;
    this.timeout = 300;
    this.snapshotEnabled = false;
    this.snapshotDir = path.join(__dirname, '../snapshots');
    this.snapshotMode = 'compare';

    this.loadEnvFile();
    const sourceEnv = env === process.env ? process.env : env;
    this.applyEnvironment(sourceEnv);
    this.parseArgs(args);
  }

  static fromEnv(): Config {
    return new Config();
  }

  getStorySnapshotsDir(module: string): string {
    return path.join(this.snapshotDir, module, 'story_snapshots');
  }

  getSnapshotTag(): string {
    if (this.cachedGitTag) {
      return this.cachedGitTag;
    }

    try {
      // 1. Try exact tag
      this.cachedGitTag = execSync('git describe --tags --exact-match HEAD', { stdio: 'pipe' })
        .toString()
        .trim();
      return this.cachedGitTag;
    } catch (e) {
      // Ignore error
    }

    try {
      // 2. Try tag with commit info
      this.cachedGitTag = execSync('git describe --tags --always', { stdio: 'pipe' })
        .toString()
        .trim();
      return this.cachedGitTag;
    } catch (e) {
      // Ignore error
    }

    try {
      // 3. Fallback to commit hash
      this.cachedGitTag = execSync('git rev-parse --short HEAD', { stdio: 'pipe' })
        .toString()
        .trim();
      return this.cachedGitTag;
    } catch (e) {
      // Ignore error
    }

    // 4. Fallback to timestamp
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14); // YYYYMMDDHHMMSS
    this.cachedGitTag = `dev-${timestamp}`;
    return this.cachedGitTag;
  }

  getStorySnapshotTagDir(module: string): string {
    return path.join(this.getStorySnapshotsDir(module), 'tags');
  }

  getStoryComparisonsDir(module: string): string {
    return path.join(this.snapshotDir, module, 'story_comparisons');
  }

  getStoryReportsDir(module: string): string {
    return path.join(this.snapshotDir, module, 'story_reports');
  }

  getStoryValidationsDir(module: string): string {
    return path.join(this.snapshotDir, module, 'story_validations');
  }

  getCanonicalSnapshotPath(module: string, storyName: string): string {
    return path.join(this.getStorySnapshotsDir(module), `${storyName}.json`);
  }

  getTaggedSnapshotPath(module: string, storyName: string): string {
    const sanitizedStoryName = this.sanitizeStoryName(storyName);
    const tag = this.sanitizeTag(this.getSnapshotTag());
    const filename = `story_snapshot_${tag}_${sanitizedStoryName}.json`;
    return path.join(this.getStorySnapshotTagDir(module), filename);
  }

  private sanitizeStoryName(storyName: string): string {
    // Replace spaces and special characters with underscores
    let sanitized = storyName
      .replace(/\s+/g, '_')
      .replace(/-/g, '_')
      .replace(/\./g, '_')
      .replace(/\//g, '_')
      .replace(/\\/g, '_')
      .toLowerCase();

    // Remove multiple consecutive underscores
    while (sanitized.includes('__')) {
      sanitized = sanitized.replace(/__/g, '_');
    }

    // Trim underscores from start and end
    sanitized = sanitized.replace(/^_+|_+$/g, '');

    return sanitized;
  }

  private sanitizeTag(tag: string): string {
    // Replace problematic characters
    return tag
      .replace(/\//g, '_')
      .replace(/\\/g, '_')
      .replace(/:/g, '_');
  }

  getComparisonPath(module: string, storyName: string): string {
    return path.join(this.getStoryComparisonsDir(module), `${storyName}.json`);
  }

  getReportPath(module: string, storyName: string): string {
    return path.join(this.getStoryReportsDir(module), `${storyName}.json`);
  }

  getValidationPath(module: string, storyName: string): string {
    return path.join(this.getStoryValidationsDir(module), `${storyName}.json`);
  }

  shouldCaptureSnapshots(): boolean {
    if (this.snapshot) {
      return this.snapshot.enableCapture;
    }
    return (
      this.snapshotEnabled &&
      (this.snapshotMode === 'capture' || this.snapshotMode === 'full')
    );
  }

  shouldCompareSnapshots(): boolean {
    if (this.snapshot) {
      return this.snapshot.enableComparison;
    }
    return (
      this.snapshotEnabled &&
      (this.snapshotMode === 'compare' || this.snapshotMode === 'full')
    );
  }

  shouldReportSnapshots(): boolean {
    if (this.snapshot) {
      return this.snapshot.enableReporting;
    }
    return (
      this.snapshotEnabled &&
      (this.snapshotMode === 'report' || this.snapshotMode === 'full')
    );
  }

  validate(): void {
    if (!this.saasId) {
      throw new Error('Missing required environment variable: SAASUS_SAAS_ID');
    }
    if (!this.apiKey) {
      throw new Error('Missing required environment variable: SAASUS_API_KEY');
    }
    if (!this.secretKey) {
      throw new Error('Missing required environment variable: SAASUS_SECRET_KEY');
    }
  }

  private applyEnvironment(env: Record<string, string | undefined>): void {
    this.baseUrl = env.SAASUS_BASE_URL || this.baseUrl;
    this.apiKey = env.SAASUS_API_KEY || this.apiKey;
    this.secretKey = env.SAASUS_SECRET_KEY || this.secretKey;
    this.saasId = env.SAASUS_SAAS_ID || this.saasId;
    this.stripeKey = env.STRIPE_SECRET_KEY || this.stripeKey;

    this.dryRun = this.parseBool(env.E2E_DRY_RUN ?? env.DRY_RUN, this.dryRun);
    this.failFast = this.parseBool(env.E2E_FAIL_FAST ?? env.FAIL_FAST, this.failFast);
    this.maxRetries = this.parseNumber(env.E2E_MAX_RETRIES, this.maxRetries);
    this.timeout = this.parseNumber(env.E2E_TIMEOUT, this.timeout);

    this.logLevel = this.resolveLogLevel(env);
    this.snapshot = this.resolveSnapshotConfig(env);
    this.snapshotEnabled = this.resolveSnapshotEnabled(env);
    this.snapshotDir = this.resolveSnapshotDirectory(env);
    this.snapshotMode = this.resolveSnapshotMode(env);
  }

  private parseArgs(args: string[]): void {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      switch (arg) {
        case '-v':
        case '--verbose':
          this.logLevel = 'DEBUG';
          break;
        case '--timeout': {
          const value = args[i + 1];
          if (value === undefined || Number.isNaN(Number(value))) {
            throw new Error('--timeout requires a numeric value');
          }
          this.timeout = parseInt(value, 10);
          i++;
          break;
        }
        case '--dry-run':
          this.dryRun = true;
          break;
        case '--fail-fast':
          this.failFast = true;
          break;
        default:
          break;
      }
    }
  }

  private loadEnvFile(): void {
    const root = process.cwd();
    const candidates = [
      '.env',
      '../.env',
      '../../.env',
      '../../../.env',
      '../../../../.env'
    ].map(relative => path.resolve(root, relative));

    for (const envPath of candidates) {
      if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
        break;
      }
    }
  }

  private resolveLogLevel(env: Record<string, string | undefined>): LogLevel {
    const preferredValues = [env.E2E_LOG_LEVEL, env.LOG_LEVEL];
    for (const value of preferredValues) {
      if (value) {
        const parsed = this.parseLogLevel(value);
        if (parsed) {
          return parsed;
        }
      }
    }
    return this.logLevel;
  }

  private parseLogLevel(value: string): LogLevel | undefined {
    const normalized = value.trim().toUpperCase();
    switch (normalized) {
      case 'DEBUG':
        return 'DEBUG';
      case 'INFO':
        return 'INFO';
      case 'WARN':
      case 'WARNING':
        return 'WARN';
      case 'ERROR':
        return 'ERROR';
      default:
        return undefined;
    }
  }

  private resolveSnapshotConfig(
    env: Record<string, string | undefined>
  ): SnapshotConfig | undefined {
    const hasSnapshotEnv =
      env.E2E_SNAPSHOT_ENABLE !== undefined ||
      env.E2E_SNAPSHOT_CAPTURE !== undefined ||
      env.E2E_SNAPSHOT_COMPARISON !== undefined ||
      env.E2E_SNAPSHOT_REPORTING !== undefined ||
      env.E2E_SNAPSHOT_OUTPUT_DIR !== undefined ||
      env.E2E_SNAPSHOT_CAPTURE_LEVEL !== undefined ||
      env.SNAPSHOT_MODE !== undefined;

    if (!hasSnapshotEnv) {
      return undefined;
    }

    const enableCapture = this.parseBool(
      env.E2E_SNAPSHOT_CAPTURE,
      this.parseBool(env.E2E_SNAPSHOT_ENABLE, false)
    );
    const enableComparison = this.parseBool(env.E2E_SNAPSHOT_COMPARISON, false);
    const enableReporting = this.parseBool(env.E2E_SNAPSHOT_REPORTING, false);

    const config: SnapshotConfig = {
      enableCapture,
      enableComparison,
      enableReporting,
      outputDirectory:
        env.E2E_SNAPSHOT_OUTPUT_DIR || env.SNAPSHOT_DIR || this.snapshotDir,
      captureLevel: (env.E2E_SNAPSHOT_CAPTURE_LEVEL || 'FULL').toUpperCase()
    };

    if (!config.enableCapture && !config.enableComparison && !config.enableReporting) {
      const mode = (env.SNAPSHOT_MODE || '').toLowerCase();
      if (mode === 'capture') {
        config.enableCapture = true;
      } else if (mode === 'compare') {
        config.enableComparison = true;
      } else if (mode === 'report') {
        config.enableReporting = true;
      } else if (mode === 'full') {
        config.enableCapture = true;
        config.enableComparison = true;
        config.enableReporting = true;
      }
    }

    return config;
  }

  private resolveSnapshotEnabled(env: Record<string, string | undefined>): boolean {
    if (this.snapshot) {
      return (
        this.snapshot.enableCapture ||
        this.snapshot.enableComparison ||
        this.snapshot.enableReporting
      );
    }
    if (env.SNAPSHOT_MODE) {
      return true;
    }
    return this.parseBool(env.SNAPSHOT_ENABLED, false);
  }

  private resolveSnapshotDirectory(env: Record<string, string | undefined>): string {
    if (this.snapshot?.outputDirectory) {
      return this.snapshot.outputDirectory;
    }
    return env.SNAPSHOT_DIR || this.snapshotDir;
  }

  private resolveSnapshotMode(
    env: Record<string, string | undefined>
  ): 'capture' | 'compare' | 'report' | 'full' {
    if (env.SNAPSHOT_MODE) {
      const mode = env.SNAPSHOT_MODE.toLowerCase();
      if (
        mode === 'capture' ||
        mode === 'compare' ||
        mode === 'report' ||
        mode === 'full'
      ) {
        return mode;
      }
    }

    if (this.snapshot) {
      const { enableCapture, enableComparison, enableReporting } = this.snapshot;
      if (enableCapture && enableComparison && enableReporting) {
        return 'full';
      }
      if (enableCapture && !enableComparison && !enableReporting) {
        return 'capture';
      }
      if (!enableCapture && enableComparison && !enableReporting) {
        return 'compare';
      }
      if (!enableCapture && !enableComparison && enableReporting) {
        return 'report';
      }
    }

    return this.snapshotMode;
  }

  private parseBool(value: string | undefined, defaultValue: boolean): boolean {
    if (value === undefined) {
      return defaultValue;
    }
    return value.toLowerCase() === 'true';
  }

  private parseNumber(value: string | undefined, defaultValue: number): number {
    if (value === undefined) {
      return defaultValue;
    }
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? defaultValue : parsed;
  }
}
