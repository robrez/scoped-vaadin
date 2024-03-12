import { elementMeta } from "./element-meta.js";

/**
 * additional string literals to treat like tag names
 */
export const supplementalElementNames = [
  "vaadin-${type}-picker", // vaadin-date-time-picker creates a tag dynamically
  "vaadin-date-picker-2016", // test
  "vaadin-date-time-picker-2020", // from test
  "vaadin-time-picker-20", // from unit test
];

/**
 * CSS selectors which should undergo naive tag-name replacement
 * Choosing to handle these individually for now, rather than risk breaking
 * HTML and JS replacements which are trying to target string literals
 * and HTML tags.  Consider filename whitelisting?
 */
export const supplementalCssSelectors = [
  // login/src/vaadin-login-form.js
  "vaadin-login-form-wrapper > form > * {",

  // vaadin/vaadin-lumo-styles/badge.js
  "vaadin-icon[theme~='badge'][icon] {",
  "vaadin-icon[theme~='badge'][icon][theme~='small'] {",

  // app-layout/test/app-layout.test.js
  "vaadin-app-layout::part(drawer) {",

  // avatar-group/test/avatar-group.test.js
  "vaadin-avatar:not([hidden])",

  // login/test/login-form.common.js
  `vaadin-button[slot="forgot-password"]`,

  // context-menu/test/selection.common.js
  "#menu vaadin-item",

  // combo-box/test/overlay-position.test.js
  "vaadin-combo-box-overlay::part(overlay)",

  // form-layout/test/form-item.test.js
  ":scope > vaadin-text-field",
  ":scope > vaadin-custom-field",

  // grid/test/column-auto-width.common.js
  "vaadin-grid::part(cell) {",

  // tooltip/test/tooltip.common.js
  `vaadin-tooltip[for="foo"]`,

  // polymer-legacy-adapter/test/grid-body.test.js
  // polymer-legacy-adapter/test/grid-row-details.test.js
  "vaadin-checkbox.details-opened",
  "vaadin-checkbox.selected",
  "vaadin-checkbox.expanded",

  "label-vaadin-form-item-",
];

export function allElementNames() {
  let accumulator = [];
  elementMeta.forEach((meta) => {
    accumulator = [...accumulator, ...meta.elementNames];
  });
  accumulator = [...accumulator, ...supplementalElementNames];
  return [...new Set(accumulator)].sort();
}

export function allEventNames() {
  let accumulator = [];
  elementMeta.forEach((meta) => {
    accumulator = [...accumulator, ...meta.eventNames];
  });
  return [...new Set(accumulator)].sort();
}

export function allPackageNames() {
  return elementMeta.map((meta) => meta.package);
}
