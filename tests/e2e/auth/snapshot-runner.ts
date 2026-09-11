import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { createAuthE2EClient, getAuthMethods } from './client';
import { ensureAuthTestPreconditions, StateManager } from './state';
import { getAuthStories } from './stories';

type SnapshotMode = 'capture' | 'compare' | 'report' | 'full';

const DEFAULT_SNAPSHOT_OUTPUT_DIR = 'tests/e2e/snapshot/';

interface SnapshotCliOptions {
  mode: SnapshotMode;
  outputDir?: string;
  stories?: string[];
}

const loadEnv = () => {
  const envPath = path.resolve(process.cwd(), '.env');
  dotenv.config({ path: envPath });
};

const parseArgs = (): SnapshotCliOptions => {
  const args = process.argv.slice(2);
  const options: SnapshotCliOptions = {
    mode: 'capture'
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg.startsWith('--snapshot-mode=')) {
      options.mode = arg.split('=')[1] as SnapshotMode;
    } else if (arg === '--snapshot-mode') {
      options.mode = (args[i + 1] as SnapshotMode) || 'capture';
      i += 1;
    } else if (arg.startsWith('--snapshot-output=')) {
      options.outputDir = arg.split('=')[1];
    } else if (arg === '--snapshot-output') {
      options.outputDir = args[i + 1];
      i += 1;
    } else if (arg.startsWith('--stories=')) {
      options.stories = arg
        .split('=')[1]
        .split(',')
        .map(name => name.trim())
        .filter(Boolean);
    } else if (arg === '--stories') {
      options.stories = (args[i + 1] || '')
        .split(',')
        .map(name => name.trim())
        .filter(Boolean);
      i += 1;
    }
  }

  return options;
};

const applySnapshotMode = (mode: SnapshotMode, outputDir?: string): string => {
  const enableCapture = mode === 'capture' || mode === 'full';
  const enableComparison = mode === 'compare' || mode === 'full';
  const enableReporting = mode === 'report' || mode === 'full';
  const resolvedOutputDir = outputDir || DEFAULT_SNAPSHOT_OUTPUT_DIR;
  const snapshotEnabled = enableCapture || enableComparison || enableReporting;

  process.env.SNAPSHOT_MODE = mode;
  process.env.E2E_SNAPSHOT_OUTPUT_DIR = resolvedOutputDir;
  process.env.SNAPSHOT_DIR = resolvedOutputDir;
  process.env.E2E_SNAPSHOT_CAPTURE_LEVEL = 'FULL';
  process.env.E2E_SNAPSHOT_CAPTURE = enableCapture ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_COMPARISON = enableComparison ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_REPORTING = enableReporting ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_ENABLE = snapshotEnabled ? 'true' : 'false';
  process.env.SNAPSHOT_ENABLED = snapshotEnabled ? 'true' : 'false';
  // 成功ケースのみをスナップショットに記録
  process.env.SNAPSHOT_SUCCESS_ONLY = 'true';

  return resolvedOutputDir;
};

const describeMode = (mode: SnapshotMode): string => {
  switch (mode) {
    case 'compare':
      return '🔍 Mode: Compare only';
    case 'report':
      return '📄 Mode: Report only';
    case 'full':
      return '🔄 Mode: Full (Capture + Compare + Report)';
    case 'capture':
    default:
      return '📸 Mode: Capture only';
  }
};

async function runAuthSnapshot(): Promise<void> {
  loadEnv();
  const options = parseArgs();
  const snapshotOutput = applySnapshotMode(options.mode, options.outputDir);

  console.log('🚀 Starting SaaSus Auth API Snapshot Tests');
  console.log('==========================================');
  console.log(describeMode(options.mode));
  console.log(`Snapshot output: ${snapshotOutput}`);
  if (options.stories && options.stories.length > 0) {
    console.log(`Filtering stories: ${options.stories.join(', ')}`);
  }

  const client = createAuthE2EClient();
  await ensureAuthTestPreconditions(client);
  const engine = new E2EEngine(client, getAuthMethods());
  const stories = getAuthStories(options.stories);

  try {
    const results = await engine.executeStories(stories);
    engine.generateReport(results);

    const failedStory = results.find(r => !r.success);
    if (failedStory) {
      console.error(`\n❌ Snapshot execution failed for story: ${failedStory.story.name}`);
      // StateManagerで失敗時の自動クリーンアップを実行
      try {
        await StateManager.handleStoryFailure(new Error(`Snapshot failed: ${failedStory.story.name}`));
      } catch (cleanupError) {
        console.error(`❌ クリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
      }
      process.exitCode = 1;
      return;
    }

    console.log('\n📊 Snapshot execution finished successfully.');
    
    // 成功時もStateManagerでクリーンアップを実行
    console.log('\n🧹 スナップショットテスト完了後のクリーンアップを実行中...');
    try {
      await StateManager.cleanupAllResources();
      console.log('✅ クリーンアップが完了しました');
    } catch (cleanupError) {
      console.warn(`⚠️ クリーンアップ中に警告: ${(cleanupError as Error).message}`);
    }
    
  } catch (error) {
    console.error(`\n❌ スナップショットテスト実行中にエラーが発生しました: ${(error as Error).message}`);
    
    // エラー時のStateManagerクリーンアップ
    try {
      await StateManager.handleStoryFailure(error as Error);
    } catch (cleanupError) {
      console.error(`❌ エラー時のクリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
    }
    
    process.exitCode = 1;
    throw error;
  } finally {
    // 従来のクリーンアップも実行（後方互換性のため）
    await ensureAuthTestPreconditions(client);
  }
}

runAuthSnapshot().catch(error => {
  console.error('Failed to execute auth snapshot tests', error);
  process.exitCode = 1;
});
