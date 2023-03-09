/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { GridDefaultItem } from './vaadin-grid.js';
import { GridColumn } from './vaadin-grid-column.js';

/**
 * Fired when the `selectAll` property changes.
 */
export type GridSelectionColumnSelectAllChangedEvent = CustomEvent<{ value: boolean }>;

export interface GridSelectionColumnCustomEventMap {
  'select-all-changed': GridSelectionColumnSelectAllChangedEvent;
}

export interface GridSelectionColumnEventMap extends HTMLElementEventMap, GridSelectionColumnCustomEventMap {}

/**
 * `<vaadin24-grid-selection-column>` is a helper element for the `<vaadin24-grid>`
 * that provides default renderers and functionality for item selection.
 *
 * #### Example:
 * ```html
 * <vaadin24-grid items="[[items]]">
 *  <vaadin24-grid-selection-column frozen auto-select></vaadin24-grid-selection-column>
 *
 *  <vaadin24-grid-column>
 *    ...
 * ```
 *
 * By default the selection column displays `<vaadin24-checkbox>` elements in the
 * column cells. The checkboxes in the body rows toggle selection of the corresponding row items.
 *
 * When the grid data is provided as an array of [`items`](#/elements/vaadin-grid#property-items),
 * the column header gets an additional checkbox that can be used for toggling
 * selection for all the items at once.
 *
 * __The default content can also be overridden__
 *
 * @fires {CustomEvent} select-all-changed - Fired when the `selectAll` property changes.
 */
declare class GridSelectionColumn<TItem = GridDefaultItem> extends GridColumn<TItem> {
  /**
   * When true, all the items are selected.
   * @attr {boolean} select-all
   */
  selectAll: boolean;

  /**
   * When true, the active gets automatically selected.
   * @attr {boolean} auto-select
   */
  autoSelect: boolean;

  addEventListener<K extends keyof GridSelectionColumnEventMap>(
    type: K,
    listener: (this: GridSelectionColumn<TItem>, ev: GridSelectionColumnEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof GridSelectionColumnEventMap>(
    type: K,
    listener: (this: GridSelectionColumn<TItem>, ev: GridSelectionColumnEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-grid-selection-column': GridSelectionColumn<GridDefaultItem>;
  }
}

export { GridSelectionColumn };
