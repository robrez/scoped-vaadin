import { versionMeta } from "../meta/index.js";
import { processTagNames, replaceNpmScope } from "./helpers.js";

/**
 * Replaces tag names, package names, and version numbers in web-types.json
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
export function transformWebTypes(content, filePath) {
  let result = content;
  result = processTagNames(result, filePath);
  result = replaceNpmScope(result);

  const webTypesJson = JSON.parse(result);
  webTypesJson["version"] = versionMeta.version;

  return JSON.stringify(webTypesJson, null, 2);
}
