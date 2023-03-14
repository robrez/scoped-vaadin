/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { InputFieldMixin } from '@scoped-vaadin/field-base/src/input-field-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { NumberFieldMixin } from './vaadin-number-field-mixin.js';

/**
 * Fired when the user commits a value change.
 */
export type NumberFieldChangeEvent = Event & {
  target: NumberField;
};

/**
 * Fired when the `invalid` property changes.
 */
export type NumberFieldInvalidChangedEvent = CustomEvent<{ value: boolean }>;

/**
 * Fired when the `value` property changes.
 */
export type NumberFieldValueChangedEvent = CustomEvent<{ value: string }>;

/**
 * Fired whenever the field is validated.
 */
export type NumberFieldValidatedEvent = CustomEvent<{ valid: boolean }>;

export interface NumberFieldCustomEventMap {
  'invalid-changed': NumberFieldInvalidChangedEvent;

  'value-changed': NumberFieldValueChangedEvent;

  validated: NumberFieldValidatedEvent;
}

export interface NumberFieldEventMap extends HTMLElementEventMap, NumberFieldCustomEventMap {
  change: NumberFieldChangeEvent;
}

/**
 * `<vaadin24-number-field>` is an input field web component that only accepts numeric input.
 *
 * ```html
 * <vaadin24-number-field label="Balance"></vaadin24-number-field>
 * ```
 *
 * ### Styling
 *
 * `<vaadin24-number-field>` provides the same set of shadow DOM parts and state attributes as `<vaadin24-text-field>`.
 * See [`<vaadin24-text-field>`](#/elements/vaadin-text-field) for the styling documentation.
 *
 * In addition to `<vaadin24-text-field>` parts, the following parts are available for theming:
 *
 * Part name         | Description
 * ------------------|-------------------------
 * `increase-button` | Increase ("plus") button
 * `decrease-button` | Decrease ("minus") button
 *
 * Note, the `input-prevented` state attribute is only supported when `allowedCharPattern` is set.
 *
 * @fires {Event} input - Fired when the value is changed by the user: on every typing keystroke, and the value is cleared using the clear button.
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 */
declare class NumberField extends NumberFieldMixin(ThemableMixin(ElementMixin(HTMLElement))) {
  addEventListener<K extends keyof NumberFieldEventMap>(
    type: K,
    listener: (this: NumberField, ev: NumberFieldEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof NumberFieldEventMap>(
    type: K,
    listener: (this: NumberField, ev: NumberFieldEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-number-field': NumberField;
  }
}

export { NumberField };
