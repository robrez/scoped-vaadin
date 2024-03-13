import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { TimePicker } from '@scoped-vaadin/time-picker/src/vaadin-time-picker.js';

/**
 * An element used internally by `<vaadin23-date-time-picker>`. Not intended to be used separately.
 *
 * @extends TimePicker
 * @private
 */
class DateTimePickerTimePicker extends TimePicker {
  static get is() {
    return 'vaadin23-date-time-picker-time-picker';
  }
}

internalCustomElements.define(DateTimePickerTimePicker.is, DateTimePickerTimePicker);
