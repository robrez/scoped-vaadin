import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Item } from '@scoped-vaadin/item/src/vaadin-item.js';

/**
 * An element used internally by `<vaadin23-select>`. Not intended to be used separately.
 *
 * @extends Item
 * @protected
 */
class SelectItem extends Item {
  static get is() {
    return 'vaadin23-select-item';
  }
}

internalCustomElements.define(SelectItem.is, SelectItem);
