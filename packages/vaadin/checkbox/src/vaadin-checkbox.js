import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ActiveMixin } from '@scoped-vaadin/component-base/src/active-mixin.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { TooltipController } from '@scoped-vaadin/component-base/src/tooltip-controller.js';
import { CheckedMixin } from '@scoped-vaadin/field-base/src/checked-mixin.js';
import { DelegateFocusMixin } from '@scoped-vaadin/field-base/src/delegate-focus-mixin.js';
import { InputController } from '@scoped-vaadin/field-base/src/input-controller.js';
import { LabelMixin } from '@scoped-vaadin/field-base/src/label-mixin.js';
import { LabelledInputController } from '@scoped-vaadin/field-base/src/labelled-input-controller.js';
import { SlotTargetController } from '@scoped-vaadin/field-base/src/slot-target-controller.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * `<vaadin23-checkbox>` is an input field representing a binary choice.
 *
 * ```html
 * <vaadin23-checkbox label="I accept the terms and conditions"></vaadin23-checkbox>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|----------------
 * `checkbox`  | The wrapper element that contains slotted <input type="checkbox">.
 *
 * The following state attributes are available for styling:
 *
 * Attribute       | Description | Part name
 * ----------------|-------------|--------------
 * `active`        | Set when the checkbox is pressed down, either with mouse, touch or the keyboard. | `:host`
 * `disabled`      | Set when the checkbox is disabled. | `:host`
 * `focus-ring`    | Set when the checkbox is focused using the keyboard. | `:host`
 * `focused`       | Set when the checkbox is focused. | `:host`
 * `indeterminate` | Set when the checkbox is in the indeterminate state. | `:host`
 * `checked`       | Set when the checkbox is checked. | `:host`
 * `has-label`     | Set when the checkbox has a label. | `:host`
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {CustomEvent} checked-changed - Fired when the `checked` property changes.
 * @fires {CustomEvent} indeterminate-changed - Fired when the `indeterminate` property changes.
 *
 * @extends HTMLElement
 * @mixes ControllerMixin
 * @mixes ThemableMixin
 * @mixes ElementMixin
 * @mixes ActiveMixin
 * @mixes DelegateFocusMixin
 * @mixes CheckedMixin
 * @mixes LabelMixin
 */
class Checkbox extends LabelMixin(
  CheckedMixin(DelegateFocusMixin(ActiveMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))))),
) {
  static get is() {
    return 'vaadin23-checkbox';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='checkbox'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='checkbox'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='checkbox'] {
          width: var(--vaadin-checkbox-size, 1em);
          height: var(--vaadin-checkbox-size, 1em);
        }

        [part='checkbox']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-checkbox-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div part="checkbox"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `;
  }

  static get properties() {
    return {
      /**
       * True if the checkbox is in the indeterminate state which means
       * it is not possible to say whether it is checked or unchecked.
       * The state is reset once the user switches the checkbox by hand.
       *
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       *
       * @type {boolean}
       */
      indeterminate: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
      },

      /**
       * The name of the checkbox.
       *
       * @type {string}
       */
      name: {
        type: String,
        value: '',
      },
    };
  }

  /** @override */
  static get delegateProps() {
    return [...super.delegateProps, 'indeterminate'];
  }

  /** @override */
  static get delegateAttrs() {
    return [...super.delegateAttrs, 'name'];
  }

  constructor() {
    super();

    this._setType('checkbox');

    // Set the string "on" as the default value for the checkbox following the HTML specification:
    // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
    this.value = 'on';
  }

  /** @protected */
  ready() {
    super.ready();

    this.addController(
      new InputController(this, (input) => {
        this._setInputElement(input);
        this._setFocusElement(input);
        this.stateTarget = input;
        this.ariaTarget = input;
      }),
    );
    this.addController(new LabelledInputController(this.inputElement, this._labelController));
    this.addController(
      new SlotTargetController(
        this.$.noop,
        () => this._labelController.node,
        () => this.__warnDeprecated(),
      ),
    );
    this._tooltipController = new TooltipController(this);
    this.addController(this._tooltipController);
  }

  /** @private */
  __warnDeprecated() {
    console.warn(
      `WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin23-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`,
    );
  }

  /**
   * Extends the method from `ActiveMixin` in order to
   * prevent setting the `active` attribute when interacting with a link inside the label.
   *
   * @param {Event} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldSetActive(event) {
    if (event.target.localName === 'a') {
      return false;
    }

    return super._shouldSetActive(event);
  }

  /**
   * Extends the method from `CheckedMixin` in order to
   * reset the indeterminate state once the user switches the checkbox.
   *
   * @param {boolean} checked
   * @protected
   * @override
   */
  _toggleChecked(checked) {
    if (this.indeterminate) {
      this.indeterminate = false;
    }

    super._toggleChecked(checked);
  }
}

internalCustomElements.define(Checkbox.is, Checkbox);

export { Checkbox };
