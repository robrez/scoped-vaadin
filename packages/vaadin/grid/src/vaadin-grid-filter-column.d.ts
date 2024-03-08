/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { GridDefaultItem } from './vaadin-grid.js';
import type { GridColumn, GridColumnMixin } from './vaadin-grid-column.js';
import type { GridFilterColumnMixinClass } from './vaadin-grid-filter-column-mixin.js';

export * from './vaadin-grid-filter-column-mixin.js';

/**
 * `<vaadin24-grid-filter-column>` is a helper element for the `<vaadin24-grid>`
 * that provides default header renderer and functionality for filtering.
 *
 * #### Example:
 * ```html
 * <vaadin24-grid items="[[items]]">
 *  <vaadin24-grid-filter-column path="name.first"></vaadin24-grid-filter-column>
 *
 *  <vaadin24-grid-column>
 *    ...
 * ```
 */
declare class GridFilterColumn<TItem = GridDefaultItem> extends HTMLElement {}

interface GridFilterColumn<TItem = GridDefaultItem>
  extends GridFilterColumnMixinClass,
    GridColumnMixin<TItem, GridColumn<TItem>>,
    GridColumn<TItem> {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-grid-filter-column': GridFilterColumn<GridDefaultItem>;
  }
}

export { GridFilterColumn };
