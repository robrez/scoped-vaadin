import glob from "glob";
import Path from "path";
import fs from "fs";
import { minify } from "terser";

const nodePackagesRoot = "node_modules/@vaadin";
const localPackagesRoot = "packages/vaadin";

const regexes = [
  { re: /static get is\(\){return\'([a-z\-]+)'/g, pos: 1 },
  { re: /customElements.define\(\'([a-z\-]+)\'/g, pos: 1 },
];

const eventRegexes = [
  { re: /new Event\(\'([a-z\-]+)'/g, pos: 1 },
  { re: /new CustomEvent\(\'([a-z\-]+)'/g, pos: 1 },
];

function findPackages(dir) {
  const files = glob.sync(dir + "/*", { dot: false });
  const paths = files.map((name) => Path.parse(name));
  return paths;
}

function findFiles(dir) {
  const files = glob.sync(dir + "/**/*.js", { dot: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .map((name) => Path.parse(name));
  return paths;
}

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
}

/**
 *
 * @param {string} content : ;
 * @returns {string[]}
 */
function findElementNames(content) {
  const results = new Set();
  regexes.forEach((reInfo) => {
    const matches = content.matchAll(reInfo.re);
    if (matches) {
      [...matches].forEach((match) => {
        results.add(match[reInfo.pos]);
      });
    }
  });
  return [...results.keys()];
}

/**
 *
 * @param {string} content : ;
 * @returns {string[]}
 */
function findEventNames(content) {
  const results = new Set();
  eventRegexes.forEach((reInfo) => {
    const matches = content.matchAll(reInfo.re);
    if (matches) {
      [...matches].forEach((match) => {
        results.add(match[reInfo.pos]);
      });
    }
  });
  return [...results.keys()];
}

/**
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns
 */
async function processJs(content, filePath) {
  const result = await minify(content, {
    format: { quote_style: 1, comments: false },
  });

  const elementNames = findElementNames(result.code);
  const eventNames = findEventNames(result.code);
  return {
    elementNames,
    eventNames,
  };
}

/**
 *
 * @param {Path} filePath
 * @returns {Promise<string[]>}
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
  let content = fs.readFileSync(inputFileName, "utf-8");

  let result = undefined;
  if (filePath.ext.toLowerCase() === ".js") {
    result = await processJs(content, filePath);
  }
  return result;
}

async function processPackage(packagePath) {
  let results = [];
  const files = findFiles(packagePath.dir + "/" + packagePath.name);
  for (const filePath of files) {
    const result = await processFile(filePath);
    if (result) {
      results = [...results, result];
    }
  }
  return results;
}

const packages = findPackages(nodePackagesRoot);

async function processPackages(packages) {
  let allElementNames = [];
  let allEventNames = [];
  for (const vpackage of packages) {
    const results = await processPackage(vpackage);
    if (results) {
      results.forEach((result) => {
        if (result.elementNames) {
          allElementNames = [...allElementNames, ...result.elementNames];
        }
        if (result.eventNames) {
          allEventNames = [...allEventNames, ...result.eventNames];
        }
      });
    }
  }
  // note that CEM/webtypes has some of this same info, but hides "internal" elements
  const allElementNamesSorted = [...new Set(allElementNames)].sort();
  const allEventNamesSorted = [...new Set(allEventNames)].sort();
  const meta = {
    elementNames: allElementNamesSorted,
    eventNames: allEventNamesSorted,
  };
  const outputFileName = `scripts/element-meta.js`;
  const tpl = `export const elementMeta = ${JSON.stringify(meta, null, 2)}`;
  fs.writeFileSync(outputFileName, tpl);
}

processPackages(packages);
