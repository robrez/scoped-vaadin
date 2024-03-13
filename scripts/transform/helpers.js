import {
  allElementNames,
  allEventNames,
  allPackageNames,
  ignorePackages,
  supplementalCssSelectors,
  versionMeta,
} from "../meta/index.js";

export const majorVersion = versionMeta.vaadinVersion;

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function computeTagNaiveRe() {
  // var re = new RegExp("[<`'\"](vaadin-foo|vaadin-bar|vaadin-baz)", "gi")
  const names = allElementNames().join("|");
  return new RegExp(names, "gi");
}

function computeTagInCssRe() {
  const names = supplementalCssSelectors
    .map((name) => escapeRegExp(name))
    .join("|");
  return new RegExp(names, "gi");
}

function computeLiteralRe() {
  // matches string literals like "foo-bar", 'foo-bar', `foo-bar`
  // added commas to the mix because a couple of places in the code will try to search for
  // tag names like so:
  // this._setInputElement(this.querySelector("vaadin-text-field,.input"));
  // could technically add optional commas within the quote maches, but will instead just
  // include them where the quotes are matched
  const names = allElementNames()
    .map((name) => escapeRegExp(name))
    .join("|");
  return new RegExp(`[\`'",](${names})[\`'",]`, "g");
}

function computeTagRe() {
  // tries to match opening and closing tags in markup
  // eg:  <foo-bar>, </foo-bar>
  const names = allElementNames().join("|");
  return new RegExp(`([<]|<\\/)(${names})`, "g");
}

function computeUndoEventsRe() {
  // tries to rename event-name literals that were over-aggressively renamed
  // due to they align with a tagName
  // note: this may nonger be needed
  const allTags = new Set(allElementNames());
  const names = allEventNames()
    .filter((value) => value.indexOf("vaadin-") > -1)
    .filter((value) => !allTags.has(value)) // if it _is_ a tag name, use special handling
    .map((value) => value.replace(`vaadin-`, `vaadin${majorVersion}-`))
    .join("|");
  return new RegExp(`${names}`, "g");
}

// tries to rename events that were renamed because they align with a tagName
// note: this may nonger be needed
function computeUndoEventsStrictRe() {
  const allTags = new Set(allElementNames());
  const names = allEventNames()
    .filter((value) => value.indexOf("vaadin-") > -1)
    .filter((value) => allTags.has(value))
    .map((value) => value.replace(`vaadin-`, `vaadin${majorVersion}-`))
    .join("|");
  return new RegExp(`Event\\(['"\`](${names})`, "g");
}

const literalRe = computeLiteralRe();
const tagRe = computeTagRe();
const tagNaiveRe = computeTagNaiveRe();
const tagInCssRe = computeTagInCssRe();
const undoEventsRe = computeUndoEventsRe();
const undoEventsStrictRe = computeUndoEventsStrictRe();

/**
 * Attempts to find HTMLElement tag-names and replace them, eg:
 *
 *   "vaadin-button" -> "vaadin24-button"
 *
 * This is done using string search-and-replace only. There is no attempt to
 * parse the input as codeF
 *
 * @param {string} content : ;
 */
export function processTagNames(content) {
  let result = content;

  result = processLocalName(result);

  result = result.replace(literalRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
  });

  result = result.replace(tagRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
  });

  result = result.replace(tagInCssRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
  });

  result = result.replace(undoEventsRe, (matched) => {
    return matched.replaceAll(`vaadin${majorVersion}-`, `vaadin-`);
  });

  result = result.replace(undoEventsStrictRe, (matched) => {
    return matched.replaceAll(`vaadin${majorVersion}-`, `vaadin-`);
  });

  return result;
}

/**
 * Not using the fn from build.js because it is more conservative, causing it
 * to miss bare tag names in CSS rules.  Someting is needed to handle that
 * but I will keep this part as naive
 * @param {string} content : ;
 * @param {Path} filePath
 */
export function processTagNamesNaive(content) {
  let result = content;
  result = result.replace(tagNaiveRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
  });
  return result;
}

export function processLocalName(content) {
  // Usages of `localName` in code are tricky to contend with...

  // example: vaadin-combo-box-overlay creates some custom properties via localName... would perhaps be better
  // to just change the consumption of those properties (css) so that the version-adorned
  // names are used, but crrently feel it's better to place along nicely w/ the
  // standard-fare custom property names
  // we want this:  --_vaadin-time-picker-overlay-default-width
  // not this:      --_vaadin24-time-picker-overlay-default-width
  return content.replaceAll(
    `const propPrefix = this.localName;`,
    `const propPrefix = this.localName.replace('vaadin${majorVersion}', 'vaadin');`
  );
}

function computePackagesRe() {
  const names = allPackageNames()
    .filter((name) => ignorePackages.indexOf(name) < 0)
    .join("|");
  return new RegExp(`(${names})`, "g");
}

const packagesRe = computePackagesRe();

/**
 * Replaces `@vaadin/` with `@scoped-vaadin/`
 * except for where a package has been marked as excluded
 *
 * @param {string} input
 * @returns {string}
 */
export function replaceNpmScope(input) {
  const result = input.replace(packagesRe, (matched) => {
    return matched.replaceAll(`@vaadin/`, `@scoped-vaadin/`);
  });
  return result;
}
