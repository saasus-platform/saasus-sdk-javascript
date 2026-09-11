import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { createAuthE2EClient, getAuthMethods } from './client';
import { CognitoTokenProvider } from './cognito/token-provider';
import { ensureAuthTestPreconditions, StateManager } from './state';
import { getAuthStories, prepareStoriesExecution, verifyMethodCoverage } from './stories';

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

async function runAuthE2E(): Promise<void> {
  loadEnv();

  console.log('🚀 Starting SaaSus Auth API E2E Tests');
  console.log('=====================================');

  // パフォーマンス最適化の設定を表示
  const enableParallel = process.env.E2E_ENABLE_PARALLEL === 'true';
  const maxConcurrency = process.env.E2E_MAX_CONCURRENCY || '4';
  const requestTimeout = process.env.E2E_REQUEST_TIMEOUT || '30000';
  
  console.log(`並列実行: ${enableParallel ? '有効' : '無効'}`);
  if (enableParallel) {
    console.log(`最大同時実行数: ${maxConcurrency}`);
  }
  console.log(`APIリクエストタイムアウト: ${parseInt(requestTimeout) / 1000}秒`);
  
  try {
    console.log(`Cognitoトークンキャッシュサイズ: ${CognitoTokenProvider.getCacheSize()}`);
  } catch (error) {
    console.log('Cognitoトークンキャッシュサイズ: 0 (初期化前)');
  }

  const client = createAuthE2EClient();
  await ensureAuthTestPreconditions(client);

  // ストーリー実行前の準備処理
  try {
    await prepareStoriesExecution();
  } catch (error: any) {
    console.error(`❌ ストーリー実行準備に失敗しました: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const engine = new E2EEngine(client, getAuthMethods());
  const stories = getAuthStories();

  try {
    const startTime = Date.now();
    const results = await engine.executeStories(stories);
    const totalExecutionTime = (Date.now() - startTime) / 1000;
    
    const reportPaths = engine.generateReport(results);
    const coverageSummary = engine.getCoverageReport();

    console.log('\n📊 Execution Summary');
    console.log('---------------------');
    console.log(`Stories executed: ${results.length}`);
    console.log(`Total execution time: ${totalExecutionTime.toFixed(2)}秒`);
    console.log(`Average time per story: ${(totalExecutionTime / results.length).toFixed(2)}秒`);
    console.log(formatCoverageSummary(coverageSummary));
    console.log(`Report: ${reportPaths.json}`);
    
    try {
      console.log(`Cognitoトークンキャッシュサイズ: ${CognitoTokenProvider.getCacheSize()}`);
    } catch (error) {
      console.log('Cognitoトークンキャッシュサイズ: 0');
    }

    const failedStory = results.find(r => !r.success);
    if (failedStory) {
      console.error(`\n❌ Story failed: ${failedStory.story.name}`);
      // StateManagerで失敗時の自動クリーンアップを実行
      try {
        await StateManager.handleStoryFailure(new Error(`Story failed: ${failedStory.story.name}`));
      } catch (cleanupError) {
        console.error(`❌ クリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
      }
      process.exitCode = 1;
      return;
    }

    if (hasIncompleteCoverage(coverageSummary)) {
      if (!allowIncompleteCoverage) {
        console.error('\n⚠️  Coverage is incomplete. Please ensure all methods are executed.');
        process.exitCode = 1;
        return;
      }
      console.warn('\n⚠️  Coverage is incomplete. Skipping coverage enforcement.');
    }

    if (!allowIncompleteCoverage) {
      try {
        verifyMethodCoverage();
        console.log('✅ Method coverage verification passed');
      } catch (e: any) {
        console.error(`\n❌ Method coverage verification failed: ${e.message}`);
        process.exitCode = 1;
        return;
      }
    }

    console.log('\n🎉 ALL TESTS PASSED - FULL METHOD COVERAGE ACHIEVED!');
    
    // 成功時もStateManagerでクリーンアップを実行
    console.log('\n🧹 テスト完了後のクリーンアップを実行中...');
    try {
      await StateManager.cleanupAllResources();
      console.log('✅ クリーンアップが完了しました');
    } catch (cleanupError) {
      console.warn(`⚠️ クリーンアップ中に警告: ${(cleanupError as Error).message}`);
    }

    // Cognitoトークンキャッシュをクリア
    try {
      CognitoTokenProvider.clearTokenCache();
      console.log('✅ Cognitoトークンキャッシュをクリアしました');
    } catch (error) {
      console.log('⚠️ Cognitoトークンキャッシュのクリアをスキップしました');
    }
    
  } catch (error) {
    console.error(`\n❌ テスト実行中にエラーが発生しました: ${(error as Error).message}`);
    
    // エラー時のStateManagerクリーンアップ
    try {
      await StateManager.handleStoryFailure(error as Error);
    } catch (cleanupError) {
      console.error(`❌ エラー時のクリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
    }

    // エラー時もCognitoトークンキャッシュをクリア
    try {
      CognitoTokenProvider.clearTokenCache();
    } catch (error) {
      // エラー時はスキップ
    }
    
    process.exitCode = 1;
    throw error;
  } finally {
    // 従来のクリーンアップも実行（後方互換性のため）
    await ensureAuthTestPreconditions(client);
  }
}

runAuthE2E().catch(error => {
  console.error('Failed to execute auth E2E tests', error);
  process.exitCode = 1;
});
