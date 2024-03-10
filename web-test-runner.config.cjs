/* eslint-env node */
const { playwrightLauncher } = require("@web/test-runner-playwright");
const { createUnitTestsConfig } = require("./wtr-utils.cjs");
const devServerConfig = require("./web-dev-server.config.cjs");

const breaksTestRunner = [
  //
  "app-layout", // timeout error
  "combo-box", // stalls w/ no obvious error
];

let packageFilter = null;
// packageFilter = ["component-base"];

const unitTestsConfig = createUnitTestsConfig({
  browsers: [playwrightLauncher()],
  packageFilter,
  coverageConfig: {
    include: [`packages/**/src/**/*`, `packages/**/*.js`],
    threshold: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
});

module.exports = {
  ...unitTestsConfig,
  ...devServerConfig,
};
