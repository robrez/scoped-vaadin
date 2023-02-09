import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxOverlay } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-time-picker-overlay',
  css`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,
  { moduleId: 'vaadin-time-picker-overlay-styles' },
);

/**
 * An element used internally by `<vaadin23-time-picker>`. Not intended to be used separately.
 *
 * @extends ComboBoxOverlay
 * @private
 */
class TimePickerOverlay extends ComboBoxOverlay {
  static get is() {
    return 'vaadin23-time-picker-overlay';
  }
}

internalCustomElements.define(TimePickerOverlay.is, TimePickerOverlay);
