/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxOverlayMixin } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-overlay-mixin.js';
import { Overlay } from '@scoped-vaadin/overlay/src/vaadin-overlay.js';

/**
 * An element used internally by `<vaadin24-time-picker>`. Not intended to be used separately.
 */
declare class TimePickerOverlay extends ComboBoxOverlayMixin(Overlay) {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-time-picker-overlay': TimePickerOverlay;
  }
}

export { TimePickerOverlay };
