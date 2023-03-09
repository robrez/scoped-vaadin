/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { GridDefaultItem } from './vaadin-grid.js';
import { GridColumn } from './vaadin-grid-column.js';

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
declare class GridFilterColumn<TItem = GridDefaultItem> extends GridColumn<TItem> {
  /**
   * Text to display as the label of the column filter text-field.
   */
  header: string | null | undefined;

  /**
   * JS Path of the property in the item used for filtering the data.
   */
  path: string | null | undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-grid-filter-column': GridFilterColumn<GridDefaultItem>;
  }
}

export { GridFilterColumn };
