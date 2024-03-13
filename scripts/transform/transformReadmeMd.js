import Path from "path";
import { processTagNames, replaceNpmScope } from "./helpers.js";

/**
 * Replaces tag names and package names in README.md
 *
 * @param {string} content : ;
 * @param {Path} filePath : ;
 * @returns {string}
 */
export function transformReadmeMd(content, filePath) {
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
