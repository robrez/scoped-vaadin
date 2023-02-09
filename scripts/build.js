import glob from "glob";
import Path from "path";
import fs from "fs";

const nodePackagesRoot = "node_modules/@vaadin";
const localPackagesRoot = "packages";

function findPackages(dir) {
  const files = glob.sync(dir + "/*", { dot: false });
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

const packages = findPackages(nodePackagesRoot);

function posixify(pathString) {
  return pathString.split(Path.sep).join(Path.posix.sep);
}

function processPackageJson(content, filePath) {
  return content.replaceAll("@vaadin/", "@scoped-vaadin/");
}

function processJs(content, filePath) {
  return content.replaceAll("@vaadin/", "@scoped-vaadin/");
}

function processFile(filePath) {
  const destinationDir = filePath.dir.replace(
    nodePackagesRoot,
    localPackagesRoot
  );
  if (!fs.existsSync(destinationDir)) {
    console.log("creating ", destinationDir);
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

  if (filePath.ext === "js") {
    content = processJs(content, filePath);
  }

  fs.writeFileSync(outputFileName, content);
  console.log(filePath);
}

function processPackage(packagePath) {
  const files = findFiles(packagePath.dir + "/" + packagePath.name);
  files.forEach((filePath) => processFile(filePath));
}

processPackage(packages[0]);

// glob(targetDir + "/*", { dot: true }, (err, files) => {
