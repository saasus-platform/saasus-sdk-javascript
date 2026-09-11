import { Config, LogLevel } from './config';
import { StepResult, Story, StoryResult } from './models';
import { Masker } from './masker';

export class TestLogger {
  private config: Config;
  private masker: Masker;

  constructor(config: Config) {
    this.config = config;
    this.masker = new Masker();
  }

  info(message: string): void {
    if (this.shouldLog('INFO')) {
      console.log(`[INFO] ${message}`);
    }
  }

  error(message: string): void {
    if (this.shouldLog('ERROR')) {
      console.error(`[ERROR] ${message}`);
    }
  }

  debug(message: string): void {
    if (this.shouldLog('DEBUG')) {
      console.debug(`[DEBUG] ${message}`);
    }
  }

  warning(message: string): void {
    if (this.shouldLog('WARN')) {
      console.warn(`[WARN] ${message}`);
    }
  }

  logObject(label: string, data: any, level: string = 'DEBUG'): void {
    if (this.shouldLog(level)) {
      const maskedData = this.masker.mask(data);
      const message = `${label}: ${JSON.stringify(maskedData, null, 2)}`;
      if (level === 'DEBUG') console.debug(`[DEBUG] ${message}`);
      else if (level === 'INFO') console.log(`[INFO] ${message}`);
      else if (level === 'WARN') console.warn(`[WARN] ${message}`);
      else if (level === 'ERROR') console.error(`[ERROR] ${message}`);
    }
  }

  storyStart(story: Story): void {
    this.info(`\n${'='.repeat(60)}`);
    this.info(`Starting story: ${story.name}`);
    if (story.description) {
      this.info(`Description: ${story.description}`);
    }
    this.info('='.repeat(60));
  }

  storyEnd(result: StoryResult): void {
    const status = result.success ? '✓ SUCCESS' : '✗ FAILURE';
    this.info(`\n${'='.repeat(60)}`);
    this.info(`Story finished: ${result.story.name} - ${status}`);
    this.info(`Execution time: ${result.execution_time.toFixed(3)}s`);
    this.info('='.repeat(60));
  }

  stepResult(result: StepResult): void {
    const status = result.success ? '✓' : '✗';
    const message = `  ${status} ${result.step.method_name} (${result.execution_time.toFixed(3)}s)`;
    
    if (result.success) {
      this.info(message);
      if (result.status_code) {
        this.debug(`    Status: ${result.status_code}`);
      }
    } else {
      this.error(message);
      if (result.status_code) {
        this.error(`    Status: ${result.status_code}`);
      }
      if (result.error) {
        this.error(`    Error: ${result.error.message}`);
      }
    }
  }

  private shouldLog(level: string): boolean {
    const normalizedLevel = level.toUpperCase() === 'WARNING' ? 'WARN' : level.toUpperCase();
    const levels: LogLevel[] = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
    const configLevelIndex = levels.indexOf(this.config.logLevel);
    const messageLevelIndex = levels.indexOf(normalizedLevel as LogLevel);
    return (
      configLevelIndex !== -1 &&
      messageLevelIndex !== -1 &&
      messageLevelIndex >= configLevelIndex
    );
  }
}
