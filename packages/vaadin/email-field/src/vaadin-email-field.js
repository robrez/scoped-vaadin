/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { TextField } from '@scoped-vaadin/text-field/src/vaadin-text-field.js';
import { registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { emailFieldStyles } from './vaadin-email-field-styles.js';

registerStyles('vaadin24-email-field', emailFieldStyles, { moduleId: 'vaadin-email-field-styles' });

/**
 * `<vaadin24-email-field>` is a Web Component for email field control in forms.
 *
 * ```html
 * <vaadin24-email-field label="Email"></vaadin24-email-field>
 * ```
 *
 * ### Styling
 *
 * `<vaadin24-email-field>` provides the same set of shadow DOM parts and state attributes as `<vaadin24-text-field>`.
 * See [`<vaadin24-text-field>`](#/elements/vaadin-text-field) for the styling documentation.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * @fires {Event} input - Fired when the value is changed by the user: on every typing keystroke, and the value is cleared using the clear button.
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 *
 * @customElement
 * @extends TextField
 */
export class EmailField extends TextField {
  static get is() {
    return 'vaadin24-email-field';
  }

  constructor() {
    super();
    this._setType('email');
    this.pattern = '^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9\\-.]+\\.[a-zA-Z0-9\\-]{2,}$';
  }

  /** @protected */
  ready() {
    super.ready();

    if (this.inputElement) {
      this.inputElement.autocapitalize = 'off';
    }
  }
}

defineCustomElement(EmailField);
