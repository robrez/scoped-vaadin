import { elementMeta } from "./element-meta.js";
import { versionMeta } from "../version.js";
import { supplementalElementNames } from "./supplemental-element-names.js";
export { supplementalCssSelectors } from "./supplemental-css-selectors.js";

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
