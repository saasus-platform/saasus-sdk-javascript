import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { createCommunicationE2EClient, getCommunicationMethods } from './client';
import { ensureCommunicationTestPreconditions } from './state';
import { getCommunicationStories } from './stories';

type SnapshotMode = 'capture' | 'compare' | 'report' | 'full';

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

const applySnapshotMode = (mode: SnapshotMode, outputDir?: string) => {
  const enableCapture = mode === 'capture' || mode === 'full';
  const enableComparison = mode === 'compare' || mode === 'full';
  const enableReporting = mode === 'report' || mode === 'full';

  process.env.E2E_SNAPSHOT_ENABLE = 'true';
  process.env.E2E_SNAPSHOT_COMPARISON = enableComparison ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_REPORTING = enableReporting ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_CAPTURE = enableCapture ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_CAPTURE_LEVEL = 'FULL';
  process.env.SNAPSHOT_ENABLED = 'true';

  if (outputDir) {
    process.env.E2E_SNAPSHOT_OUTPUT_DIR = outputDir;
  }
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

async function runCommunicationSnapshot(): Promise<void> {
  loadEnv();
  const options = parseArgs();
  applySnapshotMode(options.mode, options.outputDir);

  console.log('🚀 Starting SaaSus Communication API Snapshot Tests');
  console.log('===================================================');
  console.log(describeMode(options.mode));
  if (options.outputDir) {
    console.log(`Snapshot output: ${options.outputDir}`);
  }
  if (options.stories && options.stories.length > 0) {
    console.log(`Filtering stories: ${options.stories.join(', ')}`);
  }

  const client = createCommunicationE2EClient();
  await ensureCommunicationTestPreconditions(client);
  const engine = new E2EEngine(client, getCommunicationMethods());
  const stories = getCommunicationStories(options.stories);

  try {
    const results = await engine.executeStories(stories);
    engine.generateReport(results);

    const failedStory = results.find(r => !r.success);
    if (failedStory) {
      console.error(`\n❌ Snapshot execution failed for story: ${failedStory.story.name}`);
      process.exitCode = 1;
      return;
    }

    console.log('\n📊 Snapshot execution finished successfully.');
  } finally {
    await ensureCommunicationTestPreconditions(client);
  }
}

runCommunicationSnapshot().catch(error => {
  console.error('Failed to execute communication snapshot tests', error);
  process.exitCode = 1;
});
