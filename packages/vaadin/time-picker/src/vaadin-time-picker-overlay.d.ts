/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxOverlayMixin } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-overlay-mixin.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { OverlayMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * An element used internally by `<vaadin24-time-picker>`. Not intended to be used separately.
 */
declare class TimePickerOverlay extends ComboBoxOverlayMixin(OverlayMixin(DirMixin(ThemableMixin(HTMLElement)))) {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-time-picker-overlay': TimePickerOverlay;
  }
}

export { TimePickerOverlay };
