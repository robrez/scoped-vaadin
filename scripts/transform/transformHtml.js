import { transformJs } from "./transformJs.js";
import { processTagNamesNaive } from "./helpers.js";

export async function transformHtml(content, filePath) {
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
