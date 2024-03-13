/* eslint-env node */
const { chromeLauncher } = require("@web/test-runner-chrome");
const { createUnitTestsConfig } = require("./wtr-utils.cjs");
const devServerConfig = require("./web-dev-server.config.cjs");

const unitTestsConfig = createUnitTestsConfig({
  browsers: [
    chromeLauncher({
      concurrency: 1,
      launchOptions: {
        headless: false,
        devtools: true,
      },
    }),
  ],
});

module.exports = {
  ...unitTestsConfig,
  ...devServerConfig,
};
