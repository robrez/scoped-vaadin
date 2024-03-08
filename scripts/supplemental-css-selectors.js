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
];
