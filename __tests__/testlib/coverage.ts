interface MethodExecution {
  storyName: string;
  stepName: string;
  statusCode: number;
  duration: number;
  success: boolean;
  error?: string;
  timestamp: Date;
}

interface MethodCoverageEntry {
  methodName: string;
  executions: MethodExecution[];
  totalExecutions: number;
  successCount: number;
  failureCount: number;
  totalDuration: number;
}

export class CoverageTracker {
  private coverage: Map<string, MethodCoverageEntry>;
  private registeredMethods: string[];

  constructor(methods: string[] = []) {
    this.coverage = new Map();
    this.registeredMethods = methods;
  }

  recordExecution(
    methodName: string,
    storyName: string,
    stepName: string,
    statusCode: number,
    duration: number,
    success: boolean,
    error?: string
  ): void {
    let entry = this.coverage.get(methodName);
    
    if (!entry) {
      entry = {
        methodName,
        executions: [],
        totalExecutions: 0,
        successCount: 0,
        failureCount: 0,
        totalDuration: 0
      };
      this.coverage.set(methodName, entry);
    }

    entry.executions.push({
      storyName,
      stepName,
      statusCode,
      duration,
      success,
      error,
      timestamp: new Date()
    });

    entry.totalExecutions++;
    entry.totalDuration += duration;
    
    if (success) {
      entry.successCount++;
    } else {
      entry.failureCount++;
    }
  }

  getCoverage(): { covered: number; total: number; percentage: number } {
    const covered = this.coverage.size;
    const total = this.registeredMethods.length;
    const percentage = total === 0 ? 0 : (covered / total) * 100;
    
    return { covered, total, percentage };
  }

  getUntestedMethods(): string[] {
    const executedMethods = new Set(this.coverage.keys());
    return this.registeredMethods.filter(method => !executedMethods.has(method));
  }

  getMethodStats(methodName: string): MethodCoverageEntry | undefined {
    return this.coverage.get(methodName);
  }

  getAllMethodStats(): MethodCoverageEntry[] {
    return Array.from(this.coverage.values());
  }

  getSummary(): any {
    const { covered, total, percentage } = this.getCoverage();
    const allStats = this.getAllMethodStats();
    
    const totalExecutions = allStats.reduce((sum, stat) => sum + stat.totalExecutions, 0);
    const totalSuccesses = allStats.reduce((sum, stat) => sum + stat.successCount, 0);
    const totalFailures = allStats.reduce((sum, stat) => sum + stat.failureCount, 0);
    const totalDuration = allStats.reduce((sum, stat) => sum + stat.totalDuration, 0);
    
    return {
      coverage: {
        covered,
        total,
        percentage: percentage.toFixed(2)
      },
      executions: {
        total: totalExecutions,
        successes: totalSuccesses,
        failures: totalFailures,
        successRate: totalExecutions === 0 ? 0 : ((totalSuccesses / totalExecutions) * 100).toFixed(2)
      },
      performance: {
        totalDuration: totalDuration.toFixed(3),
        averageDuration: totalExecutions === 0 ? 0 : (totalDuration / totalExecutions).toFixed(3)
      },
      untestedMethods: this.getUntestedMethods()
    };
  }

  printSummary(): void {
    const summary = this.getSummary();
    
    console.log('\n' + '='.repeat(60));
    console.log('COVERAGE SUMMARY');
    console.log('='.repeat(60));
    console.log(`Methods Covered: ${summary.coverage.covered}/${summary.coverage.total} (${summary.coverage.percentage}%)`);
    console.log(`Total Executions: ${summary.executions.total}`);
    console.log(`Success Rate: ${summary.executions.successRate}%`);
    console.log(`Total Duration: ${summary.performance.totalDuration}s`);
    console.log(`Average Duration: ${summary.performance.averageDuration}s`);
    
    if (summary.untestedMethods.length > 0) {
      console.log('\nUntested Methods:');
      summary.untestedMethods.forEach((method: string) => {
        console.log(`  - ${method}`);
      });
    }
    
    console.log('='.repeat(60) + '\n');
  }

  getCoverageReport(): any {
    return this.getSummary();
  }
}
