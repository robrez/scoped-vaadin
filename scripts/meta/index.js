import { elementMeta } from "./element-meta.js";
import { ignorePackages } from "./ignore-packages.js";
import ignoreTests from "./ignore-tests.js";
import {
  supplementalElementNames,
  supplementalCssSelectors,
} from "./supplemental-targets.js";
import { versionMeta } from "./version.js";

export {
  elementMeta,
  ignorePackages,
  ignoreTests,
  supplementalCssSelectors,
  supplementalElementNames,
  versionMeta,
};

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
