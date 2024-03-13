import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { DatePicker } from '@scoped-vaadin/date-picker/src/vaadin-date-picker.js';

/**
 * An element used internally by `<vaadin23-date-time-picker>`. Not intended to be used separately.
 *
 * @extends DatePicker
 * @private
 */
class DateTimePickerDatePicker extends DatePicker {
  static get is() {
    return 'vaadin23-date-time-picker-date-picker';
  }
}

internalCustomElements.define(DateTimePickerDatePicker.is, DateTimePickerDatePicker);
