import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ComboBoxItemMixin } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-item-mixin.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * An item element used by the `<vaadin24-multi-select-combo-box>` dropdown.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|--------------
 * `checkmark` | The graphical checkmark shown for a selected item
 * `content`   | The element that wraps the item content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------|-------------
 * `selected`   | Set when the item is selected
 * `focused`    | Set when the item is focused
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @mixes ComboBoxItemMixin
 * @mixes ThemableMixin
 * @mixes DirMixin
 * @private
 */
export class MultiSelectComboBoxItem extends ComboBoxItemMixin(ThemableMixin(DirMixin(PolymerElement))) {
  static get is() {
    return 'vaadin24-multi-select-combo-box-item';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }
}

internalCustomElements.define(MultiSelectComboBoxItem.is, MultiSelectComboBoxItem);
