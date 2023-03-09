import glob from "glob";
import Path from "path";
import fs from "fs";
import { elementMeta } from "./element-meta.js";
import { versionMeta } from "../version.js";

function allElementNames() {
  let accumulator = [];
  elementMeta.forEach((meta) => {
    accumulator = [...accumulator, ...meta.elementNames];
  });
  return [...new Set(accumulator)].sort();
}

// this lazily just operates on `dev/` which was copied directly from `@vaadin/web-components/dev`
// TODO make this DRY vs `build.js`

const nodePackagesRoot = "dev";
const localPackagesRoot = "dev";
const majorVersion = versionMeta.vaadinVersion;

function findPackages(dir) {
  const files = glob.sync(dir, { dot: false });
  const paths = files.map((name) => Path.parse(name));
  return paths;
}

function findFiles(dir) {
  const files = glob.sync(dir + "/*.html", { dot: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => Path.parse(name));
  return paths;
}

function replaceNpmScope(input) {
  return input.replaceAll("@vaadin/", "@scoped-vaadin/");
}

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
}

function computeRe() {
  // var re = new RegExp("[<`'\"](vaadin-foo|vaadin-bar|vaadin-baz)", "gi")
  const names = allElementNames().join("|");
  return new RegExp(names, "gi");
}

const elementsRe = computeRe();

/**
 * @param {string} content : ;
 * @param {Path} filePath
 */
function processTagNames(content, filePath) {
  let result = content;
  result = result.replace(elementsRe, (matched) => {
    return matched.replaceAll(`vaadin-`, `vaadin${majorVersion}-`);
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
  const cleanedImports = replaceNpmScope(content); // should really use the es-lexer, but need to parse content between script tags first
  const cleanedTagNames = processTagNames(cleanedImports, filePath);
  return cleanedTagNames;
}

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

  if (filePath.ext.toLowerCase() === ".html") {
    content = await processJs(content, filePath);
  }

  fs.writeFileSync(outputFileName, content);
  console.log(outputFileName);
}

function processPackage(packagePath) {
  const files = findFiles(packagePath.name);
  files.forEach((filePath) => processFile(filePath));
}

const packages = findPackages(nodePackagesRoot);
packages.forEach((vpackage) => processPackage(vpackage));
