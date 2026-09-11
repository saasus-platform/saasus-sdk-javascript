export class Masker {
  private maskPatterns: string[];

  constructor(maskPatterns: string[] = []) {
    this.maskPatterns = maskPatterns;
  }

  mask(data: any): any {
    if (data === null || data === undefined) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.mask(item));
    }

    if (typeof data === 'object') {
      const masked: Record<string, any> = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (this.shouldMask(key)) {
            masked[key] = '***MASKED***';
          } else {
            masked[key] = this.mask(data[key]);
          }
        }
      }
      return masked;
    }

    return data;
  }

  private shouldMask(key: string): boolean {
    // Default sensitive keys
    const defaultPatterns = ['password', 'token', 'secret', 'key', 'signature'];
    if (defaultPatterns.some(p => key.toLowerCase().includes(p))) {
      return true;
    }

    // Custom patterns
    if (this.maskPatterns.some(p => key.match(new RegExp(p)))) {
      return true;
    }

    // Dynamic IDs and timestamps often need masking for stable snapshots
    // This is a heuristic; might need configuration
    if (key === 'id' || key.endsWith('_id') || key === 'created_at' || key === 'updated_at') {
        // We might want to mask these or replace with a fixed value
        // For now, let's keep them unless explicitly masked, 
        // or maybe we should have a specific "stabilize" pass?
        // The Python version likely has specific logic.
        // Let's stick to explicit masking for now to be safe.
        return false; 
    }

    return false;
  }
}
