/**
 * Reads files in `node_modules/@vaadin/**`
 * Writes them to `packages/**`
 * Performs replacement tagNames: `vaadin-` => `vaadin{majorVersion}-`
 */

import { glob } from "glob";
import Path from "path";
import fs from "fs";
import {
  ignorePackages,
  versionMeta,
  ignoreTests as _ignoreTests,
} from "./meta/index.js";
import { createPatch } from "diff";
import {
  transformJs,
  transformPackageJson,
  transformReadmeMd,
  transformWebTypes,
  replaceNpmScope,
} from "./transform/index.js";

const nodePackagesRoot = "node_modules/@vaadin";
const clonePackagesRoot = "git_modules/@vaadin/web-components/packages";
const localPackagesRoot = "packages";
const localDiffsRoot = "buildinfo/vaadin";

const ignoreTests = new Set(
  _ignoreTests.map((test) => test.replace("packages", clonePackagesRoot))
);

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

const findTestFiles = (dir) => {
  const files = glob.sync(dir + "/test/**/*", { dot: true, posix: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => posixify(name))
    // note -- could have provided ignoredTests as negation globs
    // but choosing to - instead - not create the ignored tests
    .filter((name) => !ignoreTests.has(name))
    .sort()
    .map((name) => Path.parse(name));
  return paths;
};

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
}

/**
 *
 * @param {Path} filePath
 * @returns {Promise<void>}
 */
async function processFile(filePath) {
  const inputFilePackageRoot =
    filePath.dir.indexOf(clonePackagesRoot) > -1
      ? clonePackagesRoot
      : nodePackagesRoot;
  const destinationDir = filePath.dir.replace(
    inputFilePackageRoot,
    localPackagesRoot
  );
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  const inputFileName = posixify(Path.format(filePath));
  const outputFileName = posixify(
    inputFileName.replace(inputFilePackageRoot, localPackagesRoot)
  );
  let content = fs.readFileSync(inputFileName, "utf-8");
  const _origContent = content;

  if (filePath.base === "package.json") {
    content = transformPackageJson(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".js") {
    content = await transformJs(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".ts") {
    content = await transformJs(content, filePath);
  }

  if (filePath.ext.toLowerCase() === ".md" && filePath.name === "README") {
    content = transformReadmeMd(content, filePath);
  }

  if (
    filePath.ext.toLowerCase() === ".json" &&
    filePath.name.indexOf("web-types") === 0
  ) {
    content = transformWebTypes(content, filePath);
  }

  const nameForPatch = outputFileName.split("/").splice(2).join("/");
  const diff = createPatch(
    nameForPatch,
    _origContent,
    content,
    undefined,
    undefined,
    {
      context: 3,
    }
  );
  if (diff.trim().split(/\r?\n/).length > 4) {
    const patchDestination = filePath.dir.replace(
      inputFilePackageRoot,
      localDiffsRoot
    );
    if (!fs.existsSync(patchDestination)) {
      fs.mkdirSync(patchDestination, { recursive: true });
    }
    const patchFilePath =
      posixify(inputFileName.replace(inputFilePackageRoot, localDiffsRoot)) +
      ".patch";
    fs.writeFileSync(patchFilePath, diff);
  }

  fs.writeFileSync(outputFileName, content);
  // console.log(outputFileName);
}

function processPackage(packagePath) {
  const files = findFiles(packagePath.dir + "/" + packagePath.name);
  files.forEach((filePath) => processFile(filePath));
  processPackageTests(packagePath);
}

function processPackageTests(packagePath) {
  const packageTestsDir = `${clonePackagesRoot}/${packagePath.name}`;
  const files = findTestFiles(packageTestsDir);
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
      const newDepName = replaceNpmScope(dep);
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
    result = {
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
    ...glob.sync("vendor-packages/*/package.json", { dot: false, posix: true }),
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
