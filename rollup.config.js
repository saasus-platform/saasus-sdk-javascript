import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: './dist/saasus-sdk.js',
      format: 'umd',
      name: 'saasus-sdk',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
}