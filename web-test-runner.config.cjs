/* eslint-env node */
const { playwrightLauncher } = require("@web/test-runner-playwright");
const { createUnitTestsConfig } = require("./wtr-utils.cjs");
const devServerConfig = require("./web-dev-server.config.cjs");
/**
 * @typedef {import('@web/test-runner').TestRunnerConfig} TestRunnerConfig
 */
const allPackages = [
  "a11y-base",
  "accordion",
  "app-layout",
  "avatar",
  "avatar-group",
  "button",
  "checkbox",
  "checkbox-group",
  "combo-box",
  "component-base",
  "confirm-dialog",
  "context-menu",
  "custom-field",
  "date-picker",
  "date-time-picker",
  "details",
  "dialog",
  "email-field",
  "field-base",
  "field-highlighter",
  "form-layout",
  "grid",
  "horizontal-layout",
  "icon",
  "icons",
  "input-container",
  "integer-field",
  "item",
  "items.txt",
  "list-box",
  "lit-renderer",
  "login",
  "menu-bar",
  "message-input",
  "message-list",
  "multi-select-combo-box",
  "notification",
  "number-field",
  "overlay",
  "password-field",
  "polymer-legacy-adapter",
  "progress-bar",
  "radio-group",
  "scroller",
  "select",
  "split-layout",
  "tabs",
  "tabsheet",
  "testing-helpers",
  "text-area",
  "text-field",
  "time-picker",
  "tooltip",
  "upload",
  "vaadin-development-mode-detector",
  "vaadin-lumo-styles",
  "vaadin-material-styles",
  "vaadin-themable-mixin",
  "vaadin-usage-statistics",
  "vertical-layout",
  "virtual-list",
];

let packageFilter = null;
// packageFilter = ["avatar-group"];
// console.log("packages", packageFilter.join(', '));

/**
 * @type {TestRunnerConfig}
 */
const baseConfig = {
  staticLogging: false,
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
};
const unitTestsConfig = createUnitTestsConfig(baseConfig);

module.exports = {
  ...unitTestsConfig,
  ...devServerConfig,
};
