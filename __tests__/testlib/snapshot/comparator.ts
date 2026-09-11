import jsondiffpatch from 'jsondiffpatch';

export interface DiffResult {
  hasDiff: boolean;
  message: string;
}

export class Comparator {
  private differ = jsondiffpatch.create({
    objectHash: (item: any, index?: number) => {
      if (item && typeof item === 'object') {
        if ('step_name' in item && typeof item.step_name === 'string') {
          return item.step_name;
        }
        if ('method' in item && typeof item.method === 'string') {
          return item.method;
        }
      }
      return `${index ?? 0}-${JSON.stringify(item)}`;
    }
  });

  compare(expected: any, actual: any): DiffResult {
    const delta = this.differ.diff(expected, actual);

    if (!delta) {
      return { hasDiff: false, message: '' };
    }

    return {
      hasDiff: true,
      message: JSON.stringify(delta, null, 2)
    };
  }
}
