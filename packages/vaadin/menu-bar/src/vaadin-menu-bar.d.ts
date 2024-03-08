/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { DisabledMixin } from '@scoped-vaadin/a11y-base/src/disabled-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { type MenuBarItem, MenuBarMixin } from './vaadin-menu-bar-mixin.js';

export { MenuBarItem, MenuBarI18n, SubMenuItem } from './vaadin-menu-bar-mixin.js';

/**
 * Fired when a submenu item or menu bar button without children is clicked.
 */
export type MenuBarItemSelectedEvent = CustomEvent<{ value: MenuBarItem }>;

export interface MenuBarCustomEventMap {
  'item-selected': MenuBarItemSelectedEvent;
}

export interface MenuBarEventMap extends HTMLElementEventMap, MenuBarCustomEventMap {}

/**
 * `<vaadin24-menu-bar>` is a Web Component providing a set of horizontally stacked buttons offering
 * the user quick access to a consistent set of commands. Each button can toggle a submenu with
 * support for additional levels of nested menus.
 *
 * To create the menu bar, first add the component to the page:
 *
 * ```
 * <vaadin24-menu-bar></vaadin24-menu-bar>
 * ```
 *
 * And then use [`items`](#/elements/vaadin-menu-bar#property-items) property to initialize the structure:
 *
 * ```
 * document.querySelector('vaadin24-menu-bar').items = [{text: 'File'}, {text: 'Edit'}];
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `container`       | The container wrapping menu bar buttons.
 *
 * The following state attributes are available for styling:
 *
 * Attribute           | Description
 * --------------------|----------------------------------
 * `disabled`          | Set when the menu bar is disabled
 * `has-single-button` | Set when there is only one button visible
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * ### Internal components
 *
 * In addition to `<vaadin24-menu-bar>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin24-menu-bar-button>` - has the same API as [`<vaadin24-button>`](#/elements/vaadin-button).
 * - `<vaadin24-menu-bar-item>` - has the same API as [`<vaadin24-item>`](#/elements/vaadin-item).
 * - `<vaadin24-menu-bar-list-box>` - has the same API as [`<vaadin24-list-box>`](#/elements/vaadin-list-box).
 * - `<vaadin24-menu-bar-overlay>` - has the same API as [`<vaadin24-overlay>`](#/elements/vaadin-overlay).
 *
 * @fires {CustomEvent} item-selected - Fired when a submenu item or menu bar button without children is clicked.
 */
declare class MenuBar extends MenuBarMixin(DisabledMixin(ElementMixin(ThemableMixin(HTMLElement)))) {
  addEventListener<K extends keyof MenuBarEventMap>(
    type: K,
    listener: (this: MenuBar, ev: MenuBarEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof MenuBarEventMap>(
    type: K,
    listener: (this: MenuBar, ev: MenuBarEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-menu-bar': MenuBar;
  }
}

export { MenuBar };
