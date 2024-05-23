import Path from "path";
import { init, parse } from "es-module-lexer";
import { transformImports } from "./transformModuleImportsPlugin.js";
import { processTagNames, replaceNpmScope } from "./helpers.js";
import { transformCustomElementsRegistry } from "./transformCustomElementsRegistry.js";
import { versionMeta } from "../meta/index.js";

/**
 * This is an enhancement where I've taken a liberty... TODO: propose enhancement to vaadin
 * Themable mixin can fail to collect styles whenever an app both lit2 and lit3
 * in its dependency graph. Lit has stopped using `instanceof` as the mechanism
 * to determine template compatibility
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/css-tag.ts#L108
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
function supportLit2OrLit3Css(content, filePath) {
  if (filePath.base !== "vaadin-themable-mixin.js") {
    return content;
  }
  // had a heck of a time getting this to work w/ "string.replace", using split instead
  const result = content
    .split("(style instanceof CSSResult)")
    .join("(style instanceof CSSResult || style['_$cssResult$'] === true)");
  return result;
}

/**
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {Promise<string>} the transformed content
 */
export async function transformJs(content, filePath) {
  const cleanedTagNames = processTagNames(content);

  const cleanedCssDetection = supportLit2OrLit3Css(cleanedTagNames, filePath);

  await init;
  const [imports, _exports] = await parse(cleanedCssDetection, filePath.base);
  const cleanedImports = await transformImports(
    cleanedCssDetection,
    imports,
    (specifier) => {
      const scopeFixed = replaceNpmScope(specifier);
      const versionFixed = scopeFixed.replaceAll(
        `vaadin${versionMeta.majorVersion}-`,
        `vaadin-`
      ); // undo aggressive tag name replacements
      return versionFixed;
    }
  );

  const cleanedCustomElementsRegistry = transformCustomElementsRegistry(
    cleanedImports,
    filePath
  );

  return cleanedCustomElementsRegistry;
}
