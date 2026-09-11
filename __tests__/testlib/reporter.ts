import fs from 'fs';
import path from 'path';
import { Config } from './config';
import { StoryResult } from './models';

export class Reporter {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  generate(storyResults: StoryResult[], coverageReport: any): Record<string, string> {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total_stories: storyResults.length,
        success_stories: storyResults.filter(r => r.success).length,
        failed_stories: storyResults.filter(r => !r.success).length,
        total_execution_time: storyResults.reduce((sum, r) => sum + r.execution_time, 0)
      },
      stories: storyResults.map(r => ({
        name: r.story.name,
        module: r.story.module,
        success: r.success,
        execution_time: r.execution_time,
        steps: r.step_results.map(s => ({
          method: s.step.method_name,
          success: s.success,
          status: s.status_code,
          error: s.error ? s.error.message : undefined,
          error_response: s.error ? (s.error as any)?.response?.data : undefined
        }))
      })),
      coverage: coverageReport
    };

    // Group results by module to determine output directories
    const modules = [...new Set(storyResults.map(r => r.story.module))];
    const outputPaths: string[] = [];

    for (const module of modules) {
      const moduleResults = storyResults.filter(r => r.story.module === module);
      const reportDir = this.config.getStoryReportsDir(module);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }

      const reportName = `report-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const jsonPath = path.join(reportDir, reportName);
      
      // Filter report data for this module
      const moduleReport = {
        ...report,
        summary: {
          ...report.summary,
          total_stories: moduleResults.length,
          success_stories: moduleResults.filter(r => r.success).length,
          failed_stories: moduleResults.filter(r => !r.success).length,
          total_execution_time: moduleResults.reduce((sum, r) => sum + r.execution_time, 0)
        },
        stories: report.stories.filter(s => s.module === module)
      };

      fs.writeFileSync(jsonPath, JSON.stringify(moduleReport, null, 2));
      outputPaths.push(jsonPath);
    }

    return {
      json: outputPaths.join(', ')
    };
  }
}
