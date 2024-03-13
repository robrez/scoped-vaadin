import Path from "path";
import { init, parse } from "es-module-lexer";
import { transformImports } from "./transformModuleImportsPlugin.js";
import { processTagNames, replaceNpmScope } from "./helpers.js";
import { transformCustomElementsRegistry } from "./transformCustomElementsRegistry.js";
import { versionMeta } from "../meta/index.js";

/**
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {Promise<string>} the transformed content
 */
export async function transformJs(content, filePath) {
  const cleanedTagNames = processTagNames(content);

  await init;
  const [imports, _exports] = await parse(cleanedTagNames, filePath.base);
  const cleanedImports = await transformImports(
    cleanedTagNames,
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
