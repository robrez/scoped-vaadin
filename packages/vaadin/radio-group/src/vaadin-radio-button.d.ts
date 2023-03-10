/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ActiveMixin } from '@scoped-vaadin/component-base/src/active-mixin.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { CheckedMixin } from '@scoped-vaadin/field-base/src/checked-mixin.js';
import { DelegateFocusMixin } from '@scoped-vaadin/field-base/src/delegate-focus-mixin.js';
import { LabelMixin } from '@scoped-vaadin/field-base/src/label-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * Fired when the `checked` property changes.
 */
export type RadioButtonCheckedChangedEvent = CustomEvent<{ value: boolean }>;

export interface RadioButtonCustomEventMap {
  'checked-changed': RadioButtonCheckedChangedEvent;
}

export interface RadioButtonEventMap extends HTMLElementEventMap, RadioButtonCustomEventMap {}

/**
 * `<vaadin23-radio-button>` is a web component representing a choice in a radio group.
 * Only one radio button in the group can be selected at the same time.
 *
 * ```html
 * <vaadin23-radio-group label="Travel class">
 *   <vaadin23-radio-button value="economy" label="Economy"></vaadin23-radio-button>
 *   <vaadin23-radio-button value="business" label="Business"></vaadin23-radio-button>
 *   <vaadin23-radio-button value="firstClass" label="First Class"></vaadin23-radio-button>
 * </vaadin23-radio-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|----------------
 * `radio`     | The wrapper element which contains slotted `<input type="radio">`.
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `active`     | Set when the radio button is pressed down, either with a pointer or the keyboard. | `:host`
 * `disabled`   | Set when the radio button is disabled. | `:host`
 * `focus-ring` | Set when the radio button is focused using the keyboard. | `:host`
 * `focused`    | Set when the radio button is focused. | `:host`
 * `checked`    | Set when the radio button is checked. | `:host`
 * `has-label`  | Set when the radio button has a label. | `:host`
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {CustomEvent} checked-changed - Fired when the `checked` property changes.
 */
declare class RadioButton extends LabelMixin(
  CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin(ThemableMixin(ControllerMixin(HTMLElement)))))),
) {
  /**
   * The name of the radio button.
   */
  name: string;

  addEventListener<K extends keyof RadioButtonEventMap>(
    type: K,
    listener: (this: RadioButton, ev: RadioButtonEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof RadioButtonEventMap>(
    type: K,
    listener: (this: RadioButton, ev: RadioButtonEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-radio-button': RadioButton;
  }
}

export { RadioButton };
