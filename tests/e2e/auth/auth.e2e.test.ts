/**
 * Auth API E2Eテスト (Jest版)
 */

import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { createAuthE2EClient, getAuthMethods } from './client';
import { ensureAuthTestPreconditions, StateManager } from './state';
import { getAuthStories, verifyMethodCoverage } from './stories';

const loadEnv = () => {
  const envPath = path.resolve(process.cwd(), '.env');
  dotenv.config({ path: envPath });
};

const formatCoverageSummary = (summary: any): string => {
  if (!summary || !summary.coverage) {
    return 'Coverage summary unavailable';
  }
  const covered = summary.coverage.covered;
  const total = summary.coverage.total;
  const percentage = summary.coverage.percentage;
  return `Method Coverage: ${covered}/${total} (${percentage}%)`;
};

const hasIncompleteCoverage = (summary: any): boolean => {
  if (!summary || !summary.coverage) {
    return true;
  }
  return summary.coverage.covered < summary.coverage.total;
};
const allowIncompleteCoverage =
  process.env.AUTH_E2E_ALLOW_INCOMPLETE_COVERAGE === 'true';

describe('Auth API E2Eテスト', () => {
  let client: any;
  let engine: E2EEngine;

  beforeAll(async () => {
    loadEnv();

    console.log('🚀 Starting SaaSus Auth API E2E Tests');
    console.log('=====================================');

    client = createAuthE2EClient();
    await ensureAuthTestPreconditions(client);
    engine = new E2EEngine(client, getAuthMethods());
  });

  afterAll(async () => {
    // テスト完了後のクリーンアップ
    console.log('\n🧹 テスト完了後のクリーンアップを実行中...');
    try {
      await StateManager.cleanupAllResources();
      console.log('✅ クリーンアップが完了しました');
    } catch (cleanupError) {
      console.warn(`⚠️ クリーンアップ中に警告: ${(cleanupError as Error).message}`);
    }
    
    // 従来のクリーンアップも実行（後方互換性のため）
    await ensureAuthTestPreconditions(client);
  });

  test('全ストーリーのE2Eテストを実行', async () => {
    const stories = getAuthStories();

    try {
      const results = await engine.executeStories(stories);
      const reportPaths = engine.generateReport(results);
      const coverageSummary = engine.getCoverageReport();

      console.log('\n📊 Execution Summary');
      console.log('---------------------');
      console.log(`Stories executed: ${results.length}`);
      console.log(formatCoverageSummary(coverageSummary));
      console.log(`Report: ${reportPaths.json}`);

      const failedStory = results.find(r => !r.success);
      if (failedStory) {
        // StateManagerで失敗時の自動クリーンアップを実行
        try {
          await StateManager.handleStoryFailure(new Error(`Story failed: ${failedStory.story.name}`));
        } catch (cleanupError) {
          console.error(`❌ クリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
        }
        throw new Error(`Story failed: ${failedStory.story.name}`);
      }

      if (hasIncompleteCoverage(coverageSummary)) {
        if (!allowIncompleteCoverage) {
          throw new Error('Coverage is incomplete. Please ensure all methods are executed.');
        }
        console.warn('⚠️ Coverage is incomplete. Skipping coverage enforcement.');
      }

      if (!allowIncompleteCoverage) {
        try {
          verifyMethodCoverage();
          console.log('✅ Method coverage verification passed');
        } catch (e: any) {
          throw new Error(`Method coverage verification failed: ${e.message}`);
        }
      }

      console.log('\n🎉 ALL TESTS PASSED - FULL METHOD COVERAGE ACHIEVED!');
      console.log('✅ All Auth API E2E tests completed!');
      
    } catch (error) {
      console.error(`\n❌ テスト実行中にエラーが発生しました: ${(error as Error).message}`);
      
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
