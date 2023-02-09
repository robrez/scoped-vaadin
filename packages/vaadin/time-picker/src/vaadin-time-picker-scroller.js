import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxScroller } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-scroller.js';

/**
 * An element used internally by `<vaadin23-time-picker>`. Not intended to be used separately.
 *
 * @extends ComboBoxScroller
 * @private
 */
class TimePickerScroller extends ComboBoxScroller {
  static get is() {
    return 'vaadin23-time-picker-scroller';
  }
}

internalCustomElements.define(TimePickerScroller.is, TimePickerScroller);
