/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { DisabledMixin } from '@scoped-vaadin/component-base/src/disabled-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { FocusMixin } from '@scoped-vaadin/component-base/src/focus-mixin.js';
import { FieldMixin } from '@scoped-vaadin/field-base/src/field-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * Fired when the `invalid` property changes.
 */
export type CheckboxGroupInvalidChangedEvent = CustomEvent<{ value: boolean }>;

/**
 * Fired when the `value` property changes.
 */
export type CheckboxGroupValueChangedEvent = CustomEvent<{ value: string[] }>;

/**
 * Fired whenever the field is validated.
 */
export type CheckboxGroupValidatedEvent = CustomEvent<{ valid: boolean }>;

export interface CheckboxGroupCustomEventMap {
  'invalid-changed': CheckboxGroupInvalidChangedEvent;

  'value-changed': CheckboxGroupValueChangedEvent;

  validated: CheckboxGroupValidatedEvent;
}

export interface CheckboxGroupEventMap extends HTMLElementEventMap, CheckboxGroupCustomEventMap {}

/**
 * `<vaadin24-checkbox-group>` is a web component that allows the user to choose several items from a group of binary choices.
 *
 * ```html
 * <vaadin24-checkbox-group label="Export data">
 *   <vaadin24-checkbox value="0" label="Order ID"></vaadin24-checkbox>
 *   <vaadin24-checkbox value="1" label="Product name"></vaadin24-checkbox>
 *   <vaadin24-checkbox value="2" label="Customer"></vaadin24-checkbox>
 *   <vaadin24-checkbox value="3" label="Status"></vaadin24-checkbox>
 * </vaadin24-checkbox-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name            | Description
 * ---------------------|----------------
 * `label`              | The slotted label element wrapper
 * `group-field`        | The checkbox elements wrapper
 * `helper-text`        | The slotted helper text element wrapper
 * `error-message`      | The slotted error message element wrapper
 * `required-indicator` | The `required` state indicator element
 *
 * The following state attributes are available for styling:
 *
 * Attribute           | Description                               | Part name
 * --------------------|-------------------------------------------|------------
 * `disabled`          | Set when the element is disabled          | :host
 * `invalid`           | Set when the element is invalid           | :host
 * `focused`           | Set when the element is focused           | :host
 * `has-label`         | Set when the element has a label          | :host
 * `has-value`         | Set when the element has a value          | :host
 * `has-helper`        | Set when the element has helper text      | :host
 * `has-error-message` | Set when the element has an error message | :host
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 */
declare class CheckboxGroup extends FieldMixin(FocusMixin(DisabledMixin(ElementMixin(ThemableMixin(HTMLElement))))) {
  /**
   * An array containing values of the currently checked checkboxes.
   *
   * The array is immutable so toggling checkboxes always results in
   * creating a new array.
   */
  value: string[];

  addEventListener<K extends keyof CheckboxGroupEventMap>(
    type: K,
    listener: (this: CheckboxGroup, ev: CheckboxGroupEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof CheckboxGroupEventMap>(
    type: K,
    listener: (this: CheckboxGroup, ev: CheckboxGroupEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-checkbox-group': CheckboxGroup;
  }
}

export { CheckboxGroup };
