/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { FocusMixin } from '@scoped-vaadin/a11y-base/src/focus-mixin.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { OverflowController } from '@scoped-vaadin/component-base/src/overflow-controller.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * `<vaadin24-scroller>` provides a simple way to enable scrolling when its content is overflowing.
 *
 * ```
 * <vaadin24-scroller>
 *   <div>Content</div>
 * </vaadin24-scroller>
 * ```
 * The following attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------| -----------
 * `focus-ring` | Set when the element is focused using the keyboard.
 * `focused`    | Set when the element is focused.
 * `overflow`   | Set to `top`, `bottom`, `start`, `end`, all of them, or none.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ControllerMixin
 * @mixes ElementMixin
 * @mixes FocusMixin
 */
class Scroller extends FocusMixin(ElementMixin(ControllerMixin(ThemableMixin(PolymerElement)))) {
  static get template() {
    return html`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `;
  }

  static get is() {
    return 'vaadin24-scroller';
  }

  static get properties() {
    return {
      /**
       * This property indicates the scroll direction. Supported values are `vertical`, `horizontal`, `none`.
       * When `scrollDirection` is undefined scrollbars will be shown in both directions.
       * @attr {string} scroll-direction
       */
      scrollDirection: {
        type: String,
        reflectToAttribute: true,
      },

      /**
       * Indicates whether the element can be focused and where it participates in sequential keyboard navigation.
       * @protected
       */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
      },
    };
  }

  /** @protected */
  ready() {
    super.ready();

    this.__overflowController = new OverflowController(this);
    this.addController(this.__overflowController);
  }

  /**
   * Override method inherited from `FocusMixin` to mark the scroller as focused
   * only when the host is focused.
   * @param {Event} event
   * @return {boolean}
   * @protected
   */
  _shouldSetFocus(event) {
    return event.target === this;
  }
}

defineCustomElement(Scroller);

export { Scroller };
