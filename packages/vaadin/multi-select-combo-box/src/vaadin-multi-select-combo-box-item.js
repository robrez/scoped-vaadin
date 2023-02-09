import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxItem } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-item.js';

/**
 * An element used for items in `<vaadin23-multi-select-combo-box>`.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------|-------------
 * `content` | The element that wraps the item content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute  | Description                   | Part name
 * -----------|-------------------------------|-----------
 * `selected` | Set when the item is selected | :host
 * `focused`  | Set when the item is focused  | :host
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @extends ComboBoxItem
 * @private
 */
class MultiSelectComboBoxItem extends ComboBoxItem {
  static get is() {
    return 'vaadin23-multi-select-combo-box-item';
  }
}

internalCustomElements.define(MultiSelectComboBoxItem.is, MultiSelectComboBoxItem);
