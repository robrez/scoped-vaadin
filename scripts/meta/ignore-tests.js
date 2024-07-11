// Path patterns for tests which should _not_ be built
const ignoreTestPatterns = [
  // Many tests are testing code that isn't published to node
  "avatar/test/avatar-lit.test.js",
  "custom-field/test/custom-field-lit.test.js",
  "custom-field/test/keyboard-lit.test.js",
  "custom-field/test/slot-wrapper-lit.test.js",
  "email-field/test/validation-lit.test.js",
  "details/test/details-lit.test.js",
  "icon/test/icon.test.js",
  "login/test/login-form-lit.test.js",
  "login/test/login-overlay-lit.test.js",
  "login/test/login-submit-lit.test.js",
  "number-field/test/number-field-lit.test.js",
  "number-field/test/validation-lit.test.js",
  "number-field/test/value-commit-lit.test.js",
  "number-field/test/value-control-buttons-lit.test.js",
  "polymer-legacy-adapter/test/grid-editor.test.js",
  "progress-bar/test/progress-bar-lit.test.js",
  "radio-group/test/radio-button-lit.test.js",
  "radio-group/test/radio-group-keyboard-navigation-lit.test.js",
  "radio-group/test/radio-group-lit.test.js",
  "radio-group/test/validation-lit.test.js",
  "split-layout/test/split-layout-lit.test.js",
  "text-area/test/text-area-lit.test.js",
  "text-area/test/validation-lit.test.js",
  "upload/test/a11y-lit.test.js",
  "upload/test/adding-files-lit.test.js",
  "upload/test/file-list-lit.test.js",
  "upload/test/file-lit.test.js",
  "upload/test/keyboard-navigation-lit.test.js",
  "upload/test/slots-lit.test.js",
  "upload/test/upload-lit.test.js",
  "virtual-list/test/lit-lit.test.js",
  "virtual-list/test/lit-renderer-directives-lit.test.js",
  "virtual-list/test/virtual-list-lit.test.js",
  // do not build snapshot tests
  `/test/dom/`,
  // do not build visual regression tests
  `/test/visual/`,
];

export default ignoreTestPatterns;
