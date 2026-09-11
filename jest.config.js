module.exports = {
  roots: ["."],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/testlib/",
    "<rootDir>/tests/e2e/"
  ],
  testTimeout: 300000, // 5分 (300秒)
  maxWorkers: process.env.E2E_ENABLE_PARALLEL === 'true' ? parseInt(process.env.E2E_MAX_CONCURRENCY || '4') : 1,
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  collectCoverageFrom: [
    "tests/e2e/auth/**/*.ts",
    "!tests/e2e/auth/**/*.d.ts"
  ],
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "test-reports",
      outputName: "junit.xml",
      ancestorSeparator: ' › ',
      uniqueOutputName: 'false',
      suiteNameTemplate: '{filepath}',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}'
    }]
  ],
  // パフォーマンス最適化設定
  globals: {
    'ts-jest': {
      isolatedModules: true, // コンパイル速度向上
    }
  },
  // 並列実行時のメモリ制限
  workerIdleMemoryLimit: '512MB'
};
