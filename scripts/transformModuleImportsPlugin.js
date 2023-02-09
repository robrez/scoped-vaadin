// Borrowed from @web/dev-server-core/src/plugins/transformModuleImportsPlugin.ts
import { parseDynamicImport } from "./parseDynamicImport.js";

export async function transformImports(code, imports, resolver) {
  let resolvedSource = "";
  let lastIndex = 0;

  for (const imp of imports) {
    const { s: start, e: end, d: dynamicImportIndex, n: unescaped } = imp;

    if (dynamicImportIndex === -1) {
      // static import
      const importSpecifier = unescaped || code.substring(start, end);
      const lines = code.slice(0, end).split("\n");
      const line = lines.length;
      const column = lines[lines.length - 1].indexOf(importSpecifier);

      const resolvedImport = resolver(importSpecifier);
      resolvedSource += `${code.substring(lastIndex, start)}${resolvedImport}`;
      lastIndex = end;
    } else if (dynamicImportIndex >= 0) {
      // dynamic import
      const {
        importString,
        importSpecifier,
        stringLiteral,
        concatenatedString,
        dynamicStart,
        dynamicEnd,
      } = parseDynamicImport(code, start, end);

      const lines = code.slice(0, dynamicStart).split("\n");
      const line = lines.length;
      const column = lines[lines.length - 1].indexOf("import(") || 0;

      let rewrittenImport;
      if (stringLiteral) {
        const resolvedImport = resolver(importSpecifier);
        rewrittenImport = `${importString[0]}${resolvedImport}${
          importString[importString.length - 1]
        }`;
      } else {
        rewrittenImport = importString;
      }

      resolvedSource += `${code.substring(
        lastIndex,
        dynamicStart
      )}${rewrittenImport}`;
      lastIndex = dynamicEnd;
    }
  }

  if (lastIndex < code.length - 1) {
    resolvedSource += `${code.substring(lastIndex, code.length)}`;
  }

  return resolvedSource;
}
