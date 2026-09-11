import dotenv from 'dotenv';
import path from 'path';
import { E2EEngine } from '../../../__tests__/testlib/engine';
import { createIntegrationE2EClient, getIntegrationMethods } from './client';
import { ensureIntegrationTestPreconditions, cleanupIntegrationTestState } from './state';
import { getIntegrationStories } from './stories';

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

async function runIntegrationE2E(): Promise<void> {
  loadEnv();

  console.log('🚀 Starting SaaSus Integration API E2E Tests');
  console.log('============================================');

  const client = createIntegrationE2EClient();
  await ensureIntegrationTestPreconditions(client);
  const engine = new E2EEngine(client, getIntegrationMethods());
  const stories = getIntegrationStories();

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
      console.error(`\n❌ Story failed: ${failedStory.story.name}`);
      process.exitCode = 1;
      return;
    }

    if (hasIncompleteCoverage(coverageSummary)) {
      console.error('\n⚠️  Coverage is incomplete. Please ensure all methods are executed.');
      process.exitCode = 1;
      return;
    }

    try {
      const { verifyMethodCoverage } = require('./stories');
      verifyMethodCoverage();
      console.log('✅ Method coverage verification passed');
    } catch (e: any) {
      console.error(`\n❌ Method coverage verification failed: ${e.message}`);
      process.exitCode = 1;
      return;
    }

    console.log('\n🎉 ALL TESTS PASSED - FULL METHOD COVERAGE ACHIEVED!');
  } finally {
    await cleanupIntegrationTestState(client);
  }
}

runIntegrationE2E().catch(error => {
  console.error('Failed to execute integration E2E tests', error);
  process.exitCode = 1;
});
