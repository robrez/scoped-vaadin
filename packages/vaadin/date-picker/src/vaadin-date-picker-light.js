/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-date-picker-overlay-content.js';
import './vaadin-date-picker-overlay.js';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ValidateMixin } from '@scoped-vaadin/field-base/src/validate-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { DatePickerMixin } from './vaadin-date-picker-mixin.js';

/**
 * `<vaadin24-date-picker-light>` is a customizable version of the `<vaadin24-date-picker>` providing
 * only the scrollable month calendar view and leaving the input field definition to the user.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `bindValue` by default. See the example below for a simplest possible example
 * using an `<input>` element.
 *
 * ```html
 * <vaadin24-date-picker-light attr-for-value="value">
 *   <input class="input">
 * </vaadin24-date-picker-light>
 * ```
 *
 * ### Styling
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * In addition to `<vaadin24-date-picker-light>` itself, the following
 * internal components are themable:
 *
 * - `<vaadin24-date-picker-overlay>`
 * - `<vaadin24-date-picker-overlay-content>`
 * - `<vaadin24-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin24-date-picker-light>`
 * is propagated to the internal themable components listed above.
 *
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes DatePickerMixin
 */
class DatePickerLight extends ThemableMixin(DatePickerMixin(ValidateMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([opened]) {
          pointer-events: auto;
        }
      </style>
      <slot></slot>

      <vaadin24-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        theme$="[[_theme]]"
      ></vaadin24-date-picker-overlay>
    `;
  }

  static get is() {
    return 'vaadin24-date-picker-light';
  }

  static get properties() {
    return {
      /**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       * @attr {string} attr-for-value
       * @type {string}
       */
      attrForValue: {
        type: String,
        value: 'value',
      },
    };
  }

  /**
   * This method from InputMixin is overridden to make
   * the input element value property customizable.
   *
   * @protected
   * @override
   * @return {string}
   */
  get _inputElementValueProperty() {
    return dashToCamelCase(this.attrForValue);
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    const cssSelector = 'vaadin24-text-field,.input';
    this._setInputElement(this.querySelector(cssSelector));
    this._setFocusElement(this.inputElement);
  }

  // Workaround https://github.com/vaadin/web-components/issues/2855
  /** @protected */
  _openedChanged(opened) {
    super._openedChanged(opened);

    this.$.overlay.positionTarget = this.inputElement;
    this.$.overlay.noVerticalOverlap = true;
  }
}

defineCustomElement(DatePickerLight);

export { DatePickerLight };
