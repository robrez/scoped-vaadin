/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { DelegateStateMixin } from '@scoped-vaadin/component-base/src/delegate-state-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import type { Tab } from '@scoped-vaadin/tabs/src/vaadin-tab.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * Fired when the `items` property changes.
 */
export type TabSheetItemsChangedEvent = CustomEvent<{ value: Tab[] }>;

/**
 * Fired when the `selected` property changes.
 */
export type TabSheetSelectedChangedEvent = CustomEvent<{ value: number }>;

export interface TabSheetCustomEventMap {
  'items-changed': TabSheetItemsChangedEvent;

  'selected-changed': TabSheetSelectedChangedEvent;
}

export interface TabSheetEventMap extends HTMLElementEventMap, TabSheetCustomEventMap {}

/**
 * `<vaadin24-tabsheet>` is a Web Component for organizing and grouping content
 * into scrollable panels. The panels can be switched between by using tabs.
 *
 * ```
 *  <vaadin24-tabsheet>
 *    <div slot="prefix">Prefix</div>
 *    <div slot="suffix">Suffix</div>
 *
 *    <vaadin24-tabs slot="tabs">
 *      <vaadin24-tab id="tab-1">Tab 1</vaadin24-tab>
 *      <vaadin24-tab id="tab-2">Tab 2</vaadin24-tab>
 *      <vaadin24-tab id="tab-3">Tab 3</vaadin24-tab>
 *    </vaadin24-tabs>
 *
 *    <div tab="tab-1">Panel 1</div>
 *    <div tab="tab-2">Panel 2</div>
 *    <div tab="tab-3">Panel 3</div>
 *  </vaadin24-tabsheet>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * --------- | ---------------
 * `tabs-container`    | The container for the slotted prefix, tabs and suffix
 * `content`    | The container for the slotted panels
 *
 * The following state attributes are available for styling:
 *
 * Attribute         | Description
 * ------------------|-------------
 * `loading` | Set when a tab without associated content is selected
 * `overflow`   | Set to `top`, `bottom`, `start`, `end`, all of them, or none.
 *
 * See [Styling Components](hhttps://vaadin.com/docs/latest/components/ds-resources/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} items-changed - Fired when the `items` property changes.
 * @fires {CustomEvent} selected-changed - Fired when the `selected` property changes.
 */
declare class TabSheet extends ControllerMixin(DelegateStateMixin(ElementMixin(ThemableMixin(HTMLElement)))) {
  /**
   * The index of the selected tab.
   */
  selected: number | null | undefined;

  /**
   * The list of `<vaadin24-tab>`s from which a selection can be made.
   * It is populated from the elements passed inside the slotted
   * `<vaadin24-tabs>`, and updated dynamically when adding or removing items.
   *
   * Note: unlike `<vaadin24-combo-box>`, this property is read-only.
   */
  readonly items: Tab[] | undefined;

  addEventListener<K extends keyof TabSheetEventMap>(
    type: K,
    listener: (this: TabSheet, ev: TabSheetEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof TabSheetEventMap>(
    type: K,
    listener: (this: TabSheet, ev: TabSheetEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-tabsheet': TabSheet;
  }
}

export { TabSheet };
