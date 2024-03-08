/**
 * Reads files in `node_modules/@vaadin/**`
 * Writes them to `packages/vaadin/**`
 * Performs replacement tagNames: `vaadin-` => `vaadin{majorVersion}-`
 */

import { glob } from "glob";
import Path from "path";
import fs from "fs";
import { init, parse } from "es-module-lexer";
import { transformImports } from "./transformModuleImportsPlugin.js";
import { ignorePackages } from "./ignore-packages.js";
import {
  processTagNames,
  processTagNamesNaive,
  processLocalName,
} from "./replacement-helpers.js";
import { allElementNames, allEventNames, allPackageNames } from "./meta.js";
import { versionMeta } from "../version.js";

export const majorVersion = versionMeta.vaadinVersion;
const nodePackagesRoot = "node_modules/@vaadin";
const localPackagesRoot = "packages/vaadin";

function findPackages(dir) {
  const ignore = new Set(ignorePackages);
  const files = glob
    .sync(dir + "/*", { dot: false, posix: true })
    .map((name) => posixify(name))
    .filter((file) => {
      const packageName = file.replace("node_modules/", "");
      return !ignore.has(packageName);
    });
  const paths = files
    .map((name) => posixify(name))
    .sort()
    .map((name) => Path.parse(name));
  return paths;
}

function findFiles(dir) {
  const files = glob.sync(dir + "/**/*", { dot: true, posix: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => posixify(name))
    .sort()
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

/**
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns
 */
export async function processJs(content, filePath) {
  const cleanedTagNames = processTagNames(content);

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
  result = processTagNames(result);
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
    ...glob.sync("packages/vendor/*/package.json", { dot: false, posix: true }),
  ];
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => posixify(name))
    .sort()
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
