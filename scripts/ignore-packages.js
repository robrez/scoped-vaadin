/**
 * Packages to intentionally not transpile or vend. Criteria for things here:
 *
 * - Does not register a custom element
 * - Does not import a vaadin package which registers a custom element
 *
 * Note that some packages were considered for exclusion and subsequently removed
 * because concerns w/ fragility but moreso increased cognitive load..
 * "oh.. import _these 5 things_ from @vaadin".  Did also consider publishing
 * these as re-export-only packages (similar to how vaadin deprecated packages work)
 * that are mantained herein in packages/vendor/
 */
export const ignorePackages = [
  // "@vaadin/component-base",
  // "@vaadin/field-base",
  // "@vaadin/lit-renderer",
  "@vaadin/vaadin-development-mode-detector",
  // "@vaadin/vaadin-list-mixin",
  // "@vaadin/vaadin-themable-mixin",
  "@vaadin/vaadin-usage-statistics",
];
