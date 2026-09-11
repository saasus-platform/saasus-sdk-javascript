import { StorySnapshot, CompatibilityLevel, CompatibilityIssue, ComparisonResult } from './types';

export class SnapshotValidator {
  validate(current: StorySnapshot, baseline: StorySnapshot): ComparisonResult {
    const issues: CompatibilityIssue[] = [];

    // Check story name
    if (current.storyName !== baseline.storyName) {
      issues.push({
        type: 'story_name_mismatch',
        description: `Story name changed: ${baseline.storyName} -> ${current.storyName}`,
        impact: CompatibilityLevel.Breaking
      });
    }

    // Check step count
    if (current.steps.length !== baseline.steps.length) {
      issues.push({
        type: 'step_count_mismatch',
        description: `Step count changed: ${baseline.steps.length} -> ${current.steps.length}`,
        impact: CompatibilityLevel.Warning
      });
    }

    // Compare each step
    const minSteps = Math.min(current.steps.length, baseline.steps.length);
    for (let i = 0; i < minSteps; i++) {
      const currentStep = current.steps[i];
      const baselineStep = baseline.steps[i];

      // Check method name
      if (currentStep.methodName !== baselineStep.methodName) {
        issues.push({
          type: 'method_name_mismatch',
          description: `Step ${i}: Method changed: ${baselineStep.methodName} -> ${currentStep.methodName}`,
          impact: CompatibilityLevel.Breaking
        });
      }

      // Check status code
      if (currentStep.actualStatus !== baselineStep.actualStatus) {
        issues.push({
          type: 'status_code_mismatch',
          description: `Step ${i}: Status code changed: ${baselineStep.actualStatus} -> ${currentStep.actualStatus}`,
          impact: CompatibilityLevel.Breaking
        });
      }

      // Check response structure
      if (currentStep.returnValue && baselineStep.returnValue) {
        const structureIssues = this.compareStructure(
          currentStep.returnValue.jsonData,
          baselineStep.returnValue.jsonData,
          `Step ${i}`
        );
        issues.push(...structureIssues);
      }
    }

    // Determine overall compatibility
    const level = this.determineLevel(issues);
    const compatible = level === CompatibilityLevel.Compatible;

    return {
      compatible,
      level,
      issues,
      summary: this.generateSummary(issues, compatible)
    };
  }

  private compareStructure(current: any, baseline: any, path: string): CompatibilityIssue[] {
    const issues: CompatibilityIssue[] = [];

    if (typeof current !== typeof baseline) {
      issues.push({
        type: 'type_mismatch',
        description: `${path}: Type changed from ${typeof baseline} to ${typeof current}`,
        impact: CompatibilityLevel.Breaking
      });
      return issues;
    }

    if (typeof current === 'object' && current !== null && baseline !== null) {
      const currentKeys = Object.keys(current);
      const baselineKeys = Object.keys(baseline);

      // Check for removed keys
      for (const key of baselineKeys) {
        if (!currentKeys.includes(key)) {
          issues.push({
            type: 'field_removed',
            description: `${path}.${key}: Field removed`,
            impact: CompatibilityLevel.Breaking
          });
        }
      }

      // Check for added keys
      for (const key of currentKeys) {
        if (!baselineKeys.includes(key)) {
          issues.push({
            type: 'field_added',
            description: `${path}.${key}: Field added`,
            impact: CompatibilityLevel.Warning
          });
        }
      }
    }

    return issues;
  }

  private determineLevel(issues: CompatibilityIssue[]): CompatibilityLevel {
    if (issues.length === 0) return CompatibilityLevel.Compatible;
    
    const hasBreaking = issues.some(i => i.impact === CompatibilityLevel.Breaking);
    if (hasBreaking) return CompatibilityLevel.Breaking;
    
    return CompatibilityLevel.Warning;
  }

  private generateSummary(issues: CompatibilityIssue[], compatible: boolean): string {
    if (compatible) return 'All checks passed. Snapshots are compatible.';
    
    const breaking = issues.filter(i => i.impact === CompatibilityLevel.Breaking).length;
    const warnings = issues.filter(i => i.impact === CompatibilityLevel.Warning).length;
    
    return `Found ${breaking} breaking issue(s) and ${warnings} warning(s).`;
  }
}
