module.exports = {
  roots: ["."],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  // The contract suite needs a running Prism mock; it has its own entry point,
  // jest.contract.config.js.
  testPathIgnorePatterns: ["/node_modules/", "/contract/"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
