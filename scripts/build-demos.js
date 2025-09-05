import { glob } from "glob";
import Path from "path";
import fs from "fs";
import { versionMeta } from "./meta/index.js";
import { transformJs, processTagNamesNaive } from "./transform/index.js";

const majorVersion = versionMeta.vaadinVersion;

// this lazily just operates on `dev/` which was copied directly (and manually) from `git_modules/@vaadin/web-components/dev`
// TODO make this DRY vs `build.js`

const nodePackagesRoot = "dev";
const localPackagesRoot = "dev";

function findPackages(dir) {
  const files = glob.sync(dir, { dot: false, posix: true });
  const paths = files.sort().map((name) => Path.parse(name));
  return paths;
}

function findFiles(dir) {
  const files = glob.sync(dir + "/*.html", { dot: true, posix: true });
  const paths = files
    .filter((fileName) => fs.lstatSync(fileName).isFile())
    .sort()
    .map((name) => Path.parse(name));
  return paths;
}

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
}

async function processHtml(content, filePath) {
  const contentLower = content.toLowerCase();
  const results = [];
  let pos = 0;
  let done = false;
  const open = "<script";
  const close = "</script>";
  while (!done) {
    const openStart = contentLower.substring(pos).indexOf(open);
    if (openStart < 0) {
      done = true;
      break;
    }
    const openEnd = contentLower.substring(pos + openStart).indexOf(">");
    if (openEnd < 0) {
      done = true;
      break;
    }
    const closeStart = contentLower
      .substring(pos + openStart + openEnd + 1)
      .indexOf(close);
    if (closeStart < 0) {
      done = true;
      break;
    }
    const pre = content.substring(pos, pos + openStart);
    const openTag = content.substring(
      pos + openStart,
      pos + openStart + openEnd + 1
    );
    const scriptContent = content.substring(
      pos + openStart + openEnd + 1,
      pos + openStart + openEnd + closeStart + 1
    );
    const closeTag = content.substring(
      pos + openStart + openEnd + closeStart + 1,
      pos + openStart + openEnd + closeStart + 1 + close.length
    );

    let cleanScriptContent = scriptContent;
    if (!!scriptContent) {
      // use the js lexer to cleanup the js parts
      cleanScriptContent = await transformJs(scriptContent, filePath);
    }
    // use simple tagname replacement to process the html parts
    let cleanPreContent = processTagNamesNaive(pre);
    results.push(cleanPreContent);
    results.push(openTag);
    results.push(cleanScriptContent);
    results.push(closeTag);
    pos =
      pos + openStart + openTag.length + scriptContent.length + closeTag.length;
  }

  if (pos < content.length) {
    results.push(processTagNamesNaive(content.substring(pos, content.length)));
  }

  return results.join("");
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
    content = await processHtml(content, filePath);
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
