/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-menu-bar-submenu.js';
import './vaadin-menu-bar-button.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { TooltipController } from '@scoped-vaadin/component-base/src/tooltip-controller.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { MenuBarMixin } from './vaadin-menu-bar-mixin.js';

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
 * @fires {CustomEvent<boolean>} item-selected - Fired when a submenu item or menu bar button without children is clicked.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes MenuBarMixin
 * @mixes ThemableMixin
 */
class MenuBar extends MenuBarMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin24-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin24-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `;
  }

  static get is() {
    return 'vaadin24-menu-bar';
  }

  /** @protected */
  ready() {
    super.ready();

    this._tooltipController = new TooltipController(this);
    this._tooltipController.setManual(true);
    this.addController(this._tooltipController);
  }

  /**
   * Fired when either a submenu item or menu bar button without nested children is clicked.
   *
   * @event item-selected
   * @param {Object} detail
   * @param {Object} detail.value the selected menu bar item
   */
}

defineCustomElement(MenuBar);

export { MenuBar };
