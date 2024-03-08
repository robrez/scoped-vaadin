/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-grid-tree-toggle.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { GridColumn } from './vaadin-grid-column.js';
import { GridTreeColumnMixin } from './vaadin-grid-tree-column-mixin.js';

/**
 * `<vaadin24-grid-tree-column>` is a helper element for the `<vaadin24-grid>`
 * that provides default renderer and functionality for toggling tree/hierarchical items.
 *
 * #### Example:
 * ```html
 * <vaadin24-grid items="[[items]]">
 *  <vaadin24-grid-tree-column path="name.first"></vaadin24-grid-tree-column>
 *
 *  <vaadin24-grid-column>
 *    ...
 * ```
 * @customElement
 * @extends GridColumn
 * @mixes GridTreeColumnMixin
 */
class GridTreeColumn extends GridTreeColumnMixin(GridColumn) {
  static get is() {
    return 'vaadin24-grid-tree-column';
  }
}

defineCustomElement(GridTreeColumn);

export { GridTreeColumn };
