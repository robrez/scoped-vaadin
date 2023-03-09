import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */

/**
 * Dummy custom element used for collecting
 * development time usage statistics.
 *
 * @private
 */
class Lumo extends HTMLElement {
  static get version() {
    return '24.0.0';
  }
}

internalCustomElements.define('vaadin24-lumo-styles', Lumo);

export { Lumo };
