// import "@webcomponents/scoped-custom-element-registry";

const nativeRegistry = window.customElements;
const registryKey = Symbol.for("vaadin24"); // registry for entire major version
const debugKey = Symbol.for("vaadin24-debug");

class InternalCustomElementsRegistry {
  //define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
  define() {
    try {
      if (window[debugKey]) {
        console.log(`InternalCustomElementsRegisty`, `define`, arguments[0]);
      }
      nativeRegistry.define.apply(nativeRegistry, arguments);
    } catch (error) {
      console.warn(error);
    }
  }

  // get(name: string): CustomElementConstructor | undefined;
  get() {
    return nativeRegistry.get.apply(nativeRegistry, arguments);
  }

  // upgrade(root: Node): void;
  upgrade() {
    nativeRegistry.upgrade.apply(nativeRegistry, arguments);
  }

  // whenDefined(name: string): Promise<CustomElementConstructor>;
  whenDefined() {
    return nativeRegistry.whenDefined.apply(nativeRegistry, arguments);
  }
}

if (!window[registryKey]) {
  window[registryKey] = new InternalCustomElementsRegistry();
}

const internalCustomElements = window[registryKey];

export { internalCustomElements };

// TODO convert to typescript or vend d.ts
