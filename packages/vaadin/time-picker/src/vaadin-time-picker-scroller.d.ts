/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxScrollerMixin } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-scroller-mixin.js';

/**
 * An element used internally by `<vaadin24-time-picker>`. Not intended to be used separately.
 */
declare class TimePickerScroller extends ComboBoxScrollerMixin(HTMLElement) {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-time-picker-scroller': TimePickerScroller;
  }
}

export { TimePickerScroller };
