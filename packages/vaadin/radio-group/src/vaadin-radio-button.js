/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { RadioButtonMixin } from './vaadin-radio-button-mixin.js';
import { radioButtonStyles } from './vaadin-radio-button-styles.js';

registerStyles('vaadin24-radio-button', radioButtonStyles, { moduleId: 'vaadin-radio-button-styles' });

/**
 * `<vaadin24-radio-button>` is a web component representing a choice in a radio group.
 * Only one radio button in the group can be selected at the same time.
 *
 * ```html
 * <vaadin24-radio-group label="Travel class">
 *   <vaadin24-radio-button value="economy" label="Economy"></vaadin24-radio-button>
 *   <vaadin24-radio-button value="business" label="Business"></vaadin24-radio-button>
 *   <vaadin24-radio-button value="firstClass" label="First Class"></vaadin24-radio-button>
 * </vaadin24-radio-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|----------------
 * `radio`     | The wrapper element that contains slotted `<input type="radio">`.
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
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * @fires {CustomEvent} checked-changed - Fired when the `checked` property changes.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 * @mixes RadioButtonMixin
 */
class RadioButton extends RadioButtonMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))) {
  static get is() {
    return 'vaadin24-radio-button';
  }

  static get template() {
    return html`
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `;
  }
}

defineCustomElement(RadioButton);

export { RadioButton };
