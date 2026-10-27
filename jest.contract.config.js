/**
 * Entry point for the SDK contract test.
 *
 * Separate from jest.config.js because the contract suite needs a running Prism
 * mock, while `npm test` must stay runnable without one.
 *
 * This file name is part of the contract: test (C) starts the suite each release
 * ships with, so a later generation has to be able to invoke an earlier one the
 * same way. Do not rename it.
 */
module.exports = {
  roots: ["<rootDir>/contract"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  // One HTTP round trip per case against a local mock, but the whole suite
  // shares one worker, so allow for a slow runner.
  testTimeout: 30000,
};
