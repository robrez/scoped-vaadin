/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { VirtualListMixin } from './vaadin-virtual-list-mixin.js';
import { virtualListStyles } from './vaadin-virtual-list-styles.js';

registerStyles('vaadin24-virtual-list', virtualListStyles, { moduleId: 'vaadin-virtual-list-styles' });

/**
 * `<vaadin24-virtual-list>` is a Web Component for displaying a virtual/infinite list of items.
 *
 * ```html
 * <vaadin24-virtual-list></vaadin24-virtual-list>
 * ```
 *
 * ```js
 * const list = document.querySelector('vaadin24-virtual-list');
 * list.items = items; // An array of data items
 * list.renderer = (root, list, {item, index}) => {
 *   root.textContent = `#${index}: ${item.name}`
 * }
 * ```
 *
 * The following state attributes are available for styling:
 *
 * Attribute        | Description
 * -----------------|--------------------------------------------
 * `overflow`       | Set to `top`, `bottom`, both, or none.
 *
 * See [Virtual List](https://vaadin.com/docs/latest/components/virtual-list) documentation.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes VirtualListMixin
 */
class VirtualList extends ElementMixin(ThemableMixin(VirtualListMixin(PolymerElement))) {
  static get template() {
    return html`
      <div id="items">
        <slot></slot>
      </div>
    `;
  }

  static get is() {
    return 'vaadin24-virtual-list';
  }
}

defineCustomElement(VirtualList);

export { VirtualList };
