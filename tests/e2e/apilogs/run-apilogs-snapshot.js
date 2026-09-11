require('ts-node').register({
  project: 'tsconfig.e2e.json',
  transpileOnly: true,
  compilerOptions: { module: 'commonjs' }
});

require('./apilogs.snapshot.ts');
