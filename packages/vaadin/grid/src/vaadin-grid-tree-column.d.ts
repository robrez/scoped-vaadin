/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { GridDefaultItem } from './vaadin-grid.js';
import type { GridColumn, GridColumnMixin } from './vaadin-grid-column.js';
import type { GridTreeColumnMixinClass } from './vaadin-grid-tree-column-mixin.js';

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
 */

declare class GridTreeColumn<TItem = GridDefaultItem> extends HTMLElement {}

interface GridTreeColumn<TItem = GridDefaultItem>
  extends GridTreeColumnMixinClass<TItem>,
    GridColumnMixin<TItem, GridColumn<TItem>>,
    GridColumn<TItem> {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-grid-tree-column': GridTreeColumn<GridDefaultItem>;
  }
}

export { GridTreeColumn };
