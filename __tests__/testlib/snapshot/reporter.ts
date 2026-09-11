import { ComparisonResult, CompatibilityLevel, StorySnapshot } from './types';

export class SnapshotReporter {
  printComparisonResult(result: ComparisonResult, storyName: string): void {
    console.log('\n' + '='.repeat(60));
    console.log(`SNAPSHOT COMPARISON: ${storyName}`);
    console.log('='.repeat(60));
    console.log(`Status: ${result.compatible ? '✓ COMPATIBLE' : '✗ INCOMPATIBLE'}`);
    console.log(`Level: ${result.level}`);
    console.log(`Summary: ${result.summary}`);

    if (result.issues.length > 0) {
      console.log('\nIssues:');
      
      const breaking = result.issues.filter(i => i.impact === CompatibilityLevel.Breaking);
      const warnings = result.issues.filter(i => i.impact === CompatibilityLevel.Warning);

      if (breaking.length > 0) {
        console.log('\n  Breaking Changes:');
        breaking.forEach(issue => {
          console.log(`    ✗ ${issue.description}`);
        });
      }

      if (warnings.length > 0) {
        console.log('\n  Warnings:');
        warnings.forEach(issue => {
          console.log(`    ⚠ ${issue.description}`);
        });
      }
    }

    console.log('='.repeat(60) + '\n');
  }

  printSnapshotSummary(snapshot: StorySnapshot): void {
    console.log('\n' + '='.repeat(60));
    console.log(`SNAPSHOT SUMMARY: ${snapshot.storyName}`);
    console.log('='.repeat(60));
    console.log(`Status: ${snapshot.status}`);
    console.log(`Duration: ${snapshot.duration.toFixed(3)}s`);
    console.log(`Steps: ${snapshot.steps.length}`);
    console.log(`Timestamp: ${snapshot.timestamp.toISOString()}`);

    const successful = snapshot.steps.filter(s => s.success).length;
    const failed = snapshot.steps.filter(s => !s.success).length;

    console.log(`\nStep Results:`);
    console.log(`  Successful: ${successful}`);
    console.log(`  Failed: ${failed}`);

    if (failed > 0) {
      console.log('\nFailed Steps:');
      snapshot.steps
        .filter(s => !s.success)
        .forEach(step => {
          console.log(`  ✗ ${step.stepName} (${step.methodName})`);
          if (step.error) {
            console.log(`    Error: ${step.error.message}`);
          }
        });
    }

    console.log('='.repeat(60) + '\n');
  }

  exportJSON(result: ComparisonResult): string {
    return JSON.stringify(result, null, 2);
  }

  exportMarkdown(result: ComparisonResult, storyName: string): string {
    let md = `# Snapshot Comparison: ${storyName}\n\n`;
    md += `**Status:** ${result.compatible ? '✓ Compatible' : '✗ Incompatible'}\n`;
    md += `**Level:** ${result.level}\n`;
    md += `**Summary:** ${result.summary}\n\n`;

    if (result.issues.length > 0) {
      md += `## Issues\n\n`;

      const breaking = result.issues.filter(i => i.impact === CompatibilityLevel.Breaking);
      const warnings = result.issues.filter(i => i.impact === CompatibilityLevel.Warning);

      if (breaking.length > 0) {
        md += `### Breaking Changes\n\n`;
        breaking.forEach(issue => {
          md += `- ✗ ${issue.description}\n`;
        });
        md += '\n';
      }

      if (warnings.length > 0) {
        md += `### Warnings\n\n`;
        warnings.forEach(issue => {
          md += `- ⚠ ${issue.description}\n`;
        });
        md += '\n';
      }
    }

    return md;
  }
}
