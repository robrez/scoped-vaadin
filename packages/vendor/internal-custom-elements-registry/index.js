// import "@webcomponents/scoped-custom-element-registry";

const nativeRegistry = window.customElements;
const registryKey = Symbol.for("vaadin23"); // registry for entire major version
const debugKey = Symbol.for("vaadin23-debug");

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
    nativeRegistry.get.upgrade(nativeRegistry, arguments);
  }

  // whenDefined(name: string): Promise<CustomElementConstructor>;
  whenDefined() {
    return nativeRegistry.get.wenDefined(nativeRegistry, arguments);
  }
}

if (!window[registryKey]) {
  window[registryKey] = new InternalCustomElementsRegistry();
}

const internalCustomElements = window[registryKey];

export { internalCustomElements };

// TODO convert to typescript or vend d.ts
