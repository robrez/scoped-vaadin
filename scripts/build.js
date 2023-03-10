import glob from "glob";
import Path from "path";
import fs from "fs";
import { init, parse } from "es-module-lexer";
import { transformImports } from "./transformModuleImportsPlugin.js";
import { elementMeta } from "./element-meta.js";
import { versionMeta } from "../version.js";
import { ignorePackages } from "./ignore-packages.js";

const nodePackagesRoot = "node_modules/@vaadin";
const localPackagesRoot = "packages/vaadin";
const majorVersion = versionMeta.vaadinVersion;

function allElementNames() {
  let accumulator = [];
  elementMeta.forEach((meta) => {
    accumulator = [...accumulator, ...meta.elementNames];
  });
  return [...new Set(accumulator)].sort();
}

function allEventNames() {
  let accumulator = [];
  elementMeta.forEach((meta) => {
    accumulator = [...accumulator, ...meta.eventNames];
  });
  return [...new Set(accumulator)].sort();
}

function allPackageNames() {
  return elementMeta.map((meta) => meta.package);
}

function findPackages(dir) {
  const ignore = new Set(ignorePackages);
  const files = glob.sync(dir + "/*", { dot: false }).filter((file) => {
    const packageName = file.replace("node_modules/", "");
    return !ignore.has(packageName);
  });
  const paths = files.map((name) => Path.parse(name));
  return paths;
}

function findFiles(dir) {
  const files = glob.sync(dir + "/**/*", { dot: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => Path.parse(name));
  return paths;
}

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
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
function replaceNpmScope(input) {
  const result = input.replace(packagesRe, (matched) => {
    return matched.replaceAll(`@vaadin/`, `@scoped-vaadin/`);
  });
  return result;
}

/**
 * Attempts to perform various mutations on package.json
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
function processPackageJson(content, filePath) {
  const packageJson = JSON.parse(content);
  const {
    name,
    version,
    repository,
    bugs,
    devDependencies,
    gitHead,
    dependencies,
    ...keep
  } = packageJson;
  let newDependencies = {};
  const versionMetaSelector = `${versionMeta.selector}${versionMeta.version}`;
  Object.keys(dependencies).forEach((dep) => {
    const originalDepVersion = dependencies[dep];
    const newDepName = replaceNpmScope(dep);
    const newDepVersion =
      newDepName === dep ? originalDepVersion : versionMetaSelector;
    newDependencies[newDepName] = newDepVersion;
  });

  const additionalDependencies = {
    "@scoped-vaadin/internal-custom-elements-registry": versionMetaSelector,
  };

  newDependencies = { ...newDependencies, ...additionalDependencies };

  let oldRepository =
    repository && typeof repository === "object" ? repository : {};

  let newRepository = {
    ...oldRepository,
    ...versionMeta.repository,
  };
  if (oldRepository.directory) {
    newRepository = {
      ...newRepository,
      directory: oldRepository.directory.replace(
        "packages/",
        "packages/vaadin/"
      ),
    };
  }

  let result = {
    name: replaceNpmScope(name),
    version: `${versionMeta.version}`,
    repository: newRepository,
    bugs: { ...bugs, ...versionMeta.bugs },
    ...keep,
    dependencies: newDependencies,
  };
  if (!result.publishConfig) {
    result = {
      ...result,
      publishConfig: {
        access: "public",
      },
    };
  }
  return JSON.stringify(result, null, 2) + "\n";
}

/**
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
function processCustomElementsRegistry(content, filePath) {
  let cleaned = content.replaceAll(`customElements`, `internalCustomElements`);
  if (cleaned.length !== content.length) {
    cleaned = `import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';\n${cleaned}`;
  }
  return cleaned;
}

function computeLiteralRe() {
  // matches string literals like "foo-bar", 'foo-bar', `foo-bar`
  // added commas to the mix because a couple of places in the code will try to search for
  // tag names like so:
  // this._setInputElement(this.querySelector("vaadin-text-field,.input"));
  // could technically add optional commas within the quote maches, but will instead just
  // include them where the quotes are matched
  const names = allElementNames().join("|");
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
const undoEventsRe = computeUndoEventsRe();
const undoEventsStrictRe = computeUndoEventsStrictRe();

function processLocalName(content) {
  // Usages of `localName` in code are tricky to contend with...

  // example: vaadin-combo-box-overlay creates some custom properties via localName... would perhaps be better
  // to just change the consumption of those properties (css) so that the version-adorned
  // names are used, but crrently feel it's better to place along nicely w/ the
  // standard-fare custom property names
  // we want this:  --_vaadin-time-picker-overlay-default-width
  // not this:      --_vaadin23-time-picker-overlay-default-width
  return content.replaceAll(
    `const propPrefix = this.localName;`,
    `const propPrefix = this.localName.replace('vaadin${majorVersion}', 'vaadin');`
  );
}

/**
 * Attempts to find HTMLElement tag-names and replace them, eg:
 *
 *   "vaadin-button" -> "vaadin23-button"
 *
 * This is done using string search-and-replace only. There is no attempt to
 * parse the input as codeF
 *
 * @param {string} content : ;
 * @param {Path} filePath
 */
function processTagNames(content, filePath) {
  let result = content;

  result = processLocalName(result);

  result = result.replace(literalRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
  });

  result = result.replace(tagRe, (matched) => {
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
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns
 */
async function processJs(content, filePath) {
  const cleanedTagNames = processTagNames(content, filePath);

  await init;
  const [imports, _exports] = await parse(cleanedTagNames, filePath.base);
  const cleanedImports = await transformImports(
    cleanedTagNames,
    imports,
    (specifier) => {
      const scopeFixed = replaceNpmScope(specifier);
      const versionFixed = scopeFixed.replaceAll(
        `vaadin${majorVersion}-`,
        `vaadin-`
      ); // undo aggressive tag name replacements
      return versionFixed;
    }
  );

  const cleanedCustomElementsRegistry = processCustomElementsRegistry(
    cleanedImports,
    filePath
  );

  return cleanedCustomElementsRegistry;
}

/**
 * Replaces tag names and package names in README.md
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
function processReadmeMd(content, filePath) {
  let result = content;
  result = processTagNames(result, filePath);
  result = replaceNpmScope(result);

  const vaadinPackageName = filePath.dir.replace("node_modules/", "");
  const internalMd = `\nThis component is based on [${vaadinPackageName}](https://www.npmjs.com/package/${vaadinPackageName})`;

  const lines = result.split("\n");
  const newLines = [...lines.slice(0, 1), internalMd, ...lines.slice(1)];
  result = newLines.join("\n");

  return result;
}

/**
 * Replaces tag names, package names, and version numbers in web-types.json
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
function processWebTypes(content, filePath) {
  let result = content;
  result = processTagNames(result, filePath);
  result = replaceNpmScope(result);

  const webTypesJson = JSON.parse(result);
  webTypesJson["version"] = versionMeta.version;

  return JSON.stringify(webTypesJson, null, 2);
}

/**
 *
 * @param {Path} filePath
 * @returns {Promise<void>}
 */
async function processFile(filePath) {
  const destinationDir = filePath.dir.replace(
    nodePackagesRoot,
    localPackagesRoot
  );
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  const inputFileName = posixify(Path.format(filePath));
  const outputFileName = posixify(
    inputFileName.replace(nodePackagesRoot, localPackagesRoot)
  );
  let content = fs.readFileSync(inputFileName, "utf-8");

  if (filePath.base === "package.json") {
    content = processPackageJson(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".js") {
    content = await processJs(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".ts") {
    content = await processJs(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".md" && filePath.name === "README") {
    content = processReadmeMd(content, filePath);
  }

  if (
    filePath.ext.toLowerCase() === ".json" &&
    filePath.name.indexOf("web-types") === 0
  ) {
    content = processWebTypes(content, filePath);
  }

  fs.writeFileSync(outputFileName, content);
  // console.log(outputFileName);
}

function processPackage(packagePath) {
  const files = findFiles(packagePath.dir + "/" + packagePath.name);
  files.forEach((filePath) => processFile(filePath));
}

/**
 * Updates versions on internal package.json files
 * @param {string} content : ;
 * @returns {string}
 */
function processVendorPackageJson(content) {
  const packageJson = JSON.parse(content);
  const { version, dependencies, ...keep } = packageJson;
  let newDependencies = {};
  const versionMetaSelector = `${versionMeta.selector}${versionMeta.version}`;

  if (dependencies) {
    Object.keys(dependencies).forEach((dep) => {
      const originalDepVersion = dependencies[dep];
      const newDepVersion =
        dep.indexOf("@scoped-vaadin") <= -1
          ? originalDepVersion
          : versionMetaSelector;
      newDependencies[newDepName] = newDepVersion;
    });
  }

  let result = {
    version: `${versionMeta.version}`,
    ...keep,
  };

  if (dependencies) {
    reult = {
      ...result,
      dependencies,
    };
  }
  return JSON.stringify(result, null, 2) + "\n";
}

/**
 * Updates internal package.json files
 */
function processVendorPackageJsons() {
  const files = [
    "package.json",
    ...glob.sync("packages/vendor/*/package.json", { dot: false }),
  ];
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => Path.parse(name));
  paths.forEach((filePath) => {
    const inputFileName = posixify(Path.format(filePath));
    let content = fs.readFileSync(inputFileName, "utf-8");
    if (filePath.base === "package.json") {
      content = processVendorPackageJson(content, filePath);
    }
    fs.writeFileSync(inputFileName, content);
  });
}

processVendorPackageJsons();

const packages = findPackages(nodePackagesRoot);
packages.forEach((vpackage) => processPackage(vpackage));
