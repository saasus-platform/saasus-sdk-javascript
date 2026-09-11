export interface SnapshotConfig {
  enabled: boolean;
  captureMode: boolean;
  compareMode: boolean;
  reportMode: boolean;
  outputDir: string;
  captureLevel: 'FULL' | 'MINIMAL';
  autoSave: boolean;
  failOnMismatch: boolean;
}

export class SnapshotConfigManager {
  private config: SnapshotConfig;

  constructor(env: Record<string, string | undefined> = process.env) {
    this.config = {
      enabled: env.E2E_SNAPSHOT_ENABLE === 'true',
      captureMode: env.E2E_SNAPSHOT_CAPTURE === 'true',
      compareMode: env.E2E_SNAPSHOT_COMPARISON === 'true',
      reportMode: env.E2E_SNAPSHOT_REPORTING === 'true',
      outputDir: env.E2E_SNAPSHOT_OUTPUT_DIR || 'tests/e2e/snapshot',
      captureLevel: env.E2E_SNAPSHOT_CAPTURE_LEVEL === 'MINIMAL' ? 'MINIMAL' : 'FULL',
      autoSave: env.E2E_SNAPSHOT_AUTO_SAVE !== 'false',
      failOnMismatch: env.E2E_SNAPSHOT_FAIL_ON_MISMATCH === 'true'
    };
  }

  getConfig(): SnapshotConfig {
    return { ...this.config };
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }

  shouldCapture(): boolean {
    return this.config.enabled && this.config.captureMode;
  }

  shouldCompare(): boolean {
    return this.config.enabled && this.config.compareMode;
  }

  shouldReport(): boolean {
    return this.config.enabled && this.config.reportMode;
  }

  getOutputDir(): string {
    return this.config.outputDir;
  }

  getCaptureLevel(): 'FULL' | 'MINIMAL' {
    return this.config.captureLevel;
  }
}
