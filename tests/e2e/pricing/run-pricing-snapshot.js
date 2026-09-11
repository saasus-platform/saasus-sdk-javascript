#!/usr/bin/env node
const path = require('path');

require('ts-node').register({
  transpileOnly: true,
  project: path.resolve(__dirname, '../../..', 'tsconfig.e2e.json'),
  compilerOptions: {
    module: 'commonjs'
  }
});

require('./pricing.snapshot.ts');
