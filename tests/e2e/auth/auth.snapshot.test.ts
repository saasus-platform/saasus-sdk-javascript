/**
 * Auth API スナップショットテスト (Jest版)
 * スナップショットモード指定オプションをサポート
 */

import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { AuthE2EClient, getAuthMethods } from './client';
import { ensureAuthTestPreconditions, StateManager } from './state';
import { getAuthStories } from './stories';

type SnapshotMode = 'capture' | 'compare' | 'report' | 'full';

const DEFAULT_SNAPSHOT_OUTPUT_DIR = 'tests/e2e/snapshot/';

const loadEnv = () => {
  const envPath = path.resolve(process.cwd(), '.env');
  dotenv.config({ path: envPath });
};

const getSnapshotMode = (): SnapshotMode => {
  const mode = process.env.SNAPSHOT_MODE as SnapshotMode;
  return mode || 'capture';
};

const applySnapshotMode = (mode: SnapshotMode) => {
  const enableCapture = mode === 'capture' || mode === 'full';
  const enableComparison = mode === 'compare' || mode === 'full';
  const enableReporting = mode === 'report' || mode === 'full';
  const snapshotEnabled = enableCapture || enableComparison || enableReporting;

  process.env.SNAPSHOT_MODE = mode;
  process.env.E2E_SNAPSHOT_OUTPUT_DIR = DEFAULT_SNAPSHOT_OUTPUT_DIR;
  process.env.SNAPSHOT_DIR = DEFAULT_SNAPSHOT_OUTPUT_DIR;
  process.env.E2E_SNAPSHOT_CAPTURE_LEVEL = 'FULL';
  process.env.E2E_SNAPSHOT_CAPTURE = enableCapture ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_COMPARISON = enableComparison ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_REPORTING = enableReporting ? 'true' : 'false';
  process.env.E2E_SNAPSHOT_ENABLE = snapshotEnabled ? 'true' : 'false';
  process.env.SNAPSHOT_ENABLED = snapshotEnabled ? 'true' : 'false';
  // 成功ケースのみをスナップショットに記録
  process.env.SNAPSHOT_SUCCESS_ONLY = 'true';
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

describe('Auth API スナップショットテスト', () => {
  let client: any;
  let engine: E2EEngine;

  beforeAll(async () => {
    loadEnv();
    const mode = getSnapshotMode();
    applySnapshotMode(mode);

    console.log('🚀 Starting SaaSus Auth API Snapshot Tests');
    console.log('==========================================');
    console.log(describeMode(mode));

    client = new AuthE2EClient();
    // await ensureAuthTestPreconditions(client); // 一時的にスキップ
    engine = new E2EEngine(client, getAuthMethods());
  });

  afterAll(async () => {
    // テスト完了後のクリーンアップ
    console.log('\n🧹 スナップショットテスト完了後のクリーンアップを実行中...');
    try {
      // クリーンアップを一時的にスキップ
      console.log('⚠️ クリーンアップをスキップしました（デバッグ用）');
    } catch (cleanupError) {
      console.warn(`⚠️ クリーンアップ中に警告: ${(cleanupError as Error).message}`);
    }
    
    // 従来のクリーンアップも実行（後方互換性のため）
    // await ensureAuthTestPreconditions(client);
  });

  test('全ストーリーのスナップショットテストを実行', async () => {
    const stories = getAuthStories();
    
    try {
      const results = await engine.executeStories(stories);
      engine.generateReport(results);

      const failedStory = results.find(r => !r.success);
      if (failedStory) {
        // StateManagerで失敗時の自動クリーンアップを実行
        try {
          await StateManager.handleStoryFailure(new Error(`Snapshot failed: ${failedStory.story.name}`));
        } catch (cleanupError) {
          console.error(`❌ クリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
        }
        throw new Error(`Snapshot execution failed for story: ${failedStory.story.name}`);
      }

      console.log('\n📊 Snapshot execution finished successfully.');
      console.log('✅ All Auth API E2E snapshot tests completed!');
      
    } catch (error) {
      console.error(`\n❌ スナップショットテスト実行中にエラーが発生しました: ${(error as Error).message}`);
      
      // エラー時のStateManagerクリーンアップ
      try {
        await StateManager.handleStoryFailure(error as Error);
      } catch (cleanupError) {
        console.error(`❌ エラー時のクリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
      }
      
      throw error;
    }
  });
});
