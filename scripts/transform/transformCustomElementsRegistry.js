/**
 * Replaces calls to `customElements` with `internalCustomElements` and ensures
 * `internalCustomElements` is the first import present
 * @param {string} content : ;
 * @returns {string}
 */
export function transformCustomElementsRegistry(content) {
  let cleaned = content.replaceAll(`customElements`, `internalCustomElements`);
  if (cleaned.length !== content.length) {
    cleaned = `import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';\n${cleaned}`;
  }
  return cleaned;
}
