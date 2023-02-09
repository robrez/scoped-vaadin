import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
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
    return '23.3.7';
  }
}

internalCustomElements.define('vaadin23-lumo-styles', Lumo);

export { Lumo };
