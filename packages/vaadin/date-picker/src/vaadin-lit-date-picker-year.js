/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { css, html, LitElement } from 'lit';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { PolylitMixin } from '@scoped-vaadin/component-base/src/polylit-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { DatePickerYearMixin } from './vaadin-date-picker-year-mixin.js';

/**
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes DatePickerYearMixin
 * @private
 */
export class DatePickerYear extends ThemableMixin(DatePickerYearMixin(PolylitMixin(LitElement))) {
  static get is() {
    return 'vaadin24-date-picker-year';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }
    `;
  }

  /** @protected */
  render() {
    return html`
      <div part="year-number">${this.year}</div>
      <div part="year-separator" aria-hidden="true"></div>
    `;
  }
}

defineCustomElement(DatePickerYear);
