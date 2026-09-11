import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { StorySnapshot } from './types';

export class FileManager {
  private baseDir: string;

  constructor(baseDir: string = 'tests/e2e/snapshot') {
    this.baseDir = baseDir;
  }

  async saveStorySnapshot(snapshot: StorySnapshot): Promise<string> {
    const tag = this.getGitTag();
    const filename = `story_snapshot_${tag}_${this.sanitizeName(snapshot.storyName)}.json`;
    const dir = path.join(this.baseDir, 'story_snapshots', 'tags');
    
    await fs.promises.mkdir(dir, { recursive: true });
    
    const filePath = path.join(dir, filename);
    const data = JSON.stringify(snapshot, null, 2);
    
    await fs.promises.writeFile(filePath, data, 'utf-8');
    return filePath;
  }

  async loadStorySnapshot(filePath: string): Promise<StorySnapshot> {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  }

  async findLatestSnapshot(storyName: string): Promise<string | null> {
    const dir = path.join(this.baseDir, 'story_snapshots', 'tags');
    
    if (!fs.existsSync(dir)) return null;
    
    const files = await fs.promises.readdir(dir);
    const pattern = `story_snapshot_.*_${this.sanitizeName(storyName)}.json`;
    const regex = new RegExp(pattern);
    
    const matching = files
      .filter(f => regex.test(f))
      .map(f => ({
        name: f,
        path: path.join(dir, f),
        mtime: fs.statSync(path.join(dir, f)).mtime
      }))
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
    
    return matching.length > 0 ? matching[0].path : null;
  }

  async listSnapshots(storyName?: string): Promise<string[]> {
    const dir = path.join(this.baseDir, 'story_snapshots', 'tags');
    
    if (!fs.existsSync(dir)) return [];
    
    const files = await fs.promises.readdir(dir);
    
    if (storyName) {
      const pattern = `story_snapshot_.*_${this.sanitizeName(storyName)}.json`;
      const regex = new RegExp(pattern);
      return files.filter(f => regex.test(f)).map(f => path.join(dir, f));
    }
    
    return files
      .filter(f => f.startsWith('story_snapshot_') && f.endsWith('.json'))
      .map(f => path.join(dir, f));
  }

  private getGitTag(): string {
    try {
      const tag = execSync('git describe --tags --abbrev=0', { encoding: 'utf-8' }).trim();
      return tag || `snapshot_${Date.now()}`;
    } catch {
      return `snapshot_${Date.now()}`;
    }
  }

  private sanitizeName(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  }
}
