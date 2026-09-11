declare module 'jsondiffpatch' {
  interface DiffPatcher {
    diff(lhs: any, rhs: any): any;
  }

  interface JsonDiffPatchOptions {
    objectHash?: (item: any, index?: number) => string;
  }

  interface JsonDiffPatchModule {
    create(options?: JsonDiffPatchOptions): DiffPatcher;
  }

  const jsondiffpatch: JsonDiffPatchModule;
  export default jsondiffpatch;
}
