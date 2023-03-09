import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/input-container/src/vaadin-input-container.js';
import './vaadin-date-picker-overlay.js';
import './vaadin-date-picker-overlay-content.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { TooltipController } from '@scoped-vaadin/component-base/src/tooltip-controller.js';
import { InputControlMixin } from '@scoped-vaadin/field-base/src/input-control-mixin.js';
import { InputController } from '@scoped-vaadin/field-base/src/input-controller.js';
import { LabelledInputController } from '@scoped-vaadin/field-base/src/labelled-input-controller.js';
import { inputFieldShared } from '@scoped-vaadin/field-base/src/styles/input-field-shared-styles.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { DatePickerMixin } from './vaadin-date-picker-mixin.js';

registerStyles('vaadin24-date-picker', inputFieldShared, { moduleId: 'vaadin-date-picker-styles' });

/**
 * `<vaadin24-date-picker>` is an input field that allows to enter a date by typing or by selecting from a calendar overlay.
 *
 * ```html
 * <vaadin24-date-picker label="Birthday"></vaadin24-date-picker>
 * ```
 *
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 *
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property                | Description                | Default
 * -------------------------------|----------------------------|---------
 * `--vaadin-field-default-width` | Default width of the field | `12em`
 *
 * `<vaadin24-date-picker>` provides the same set of shadow DOM parts and state attributes as `<vaadin24-text-field>`.
 * See [`<vaadin24-text-field>`](#/elements/vaadin-text-field) for the styling documentation.
 *
 * In addition to `<vaadin24-text-field>` parts, the following parts are available for theming:
 *
 * Part name             | Description
 * ----------------------|--------------------
 * `toggle-button`       | Toggle button
 *
 * In addition to `<vaadin24-text-field>` state attributes, the following state attributes are available for theming:
 *
 * Attribute  | Description                                      | Part name
 * -----------|--------------------------------------------------|-----------
 * `opened`   | Set when the date selector overlay is opened     | :host
 *
 * If you want to replace the default `<input>` and its container with a custom implementation to get full control
 * over the input field, consider using the [`<vaadin24-date-picker-light>`](#/elements/vaadin-date-picker-light) element.
 *
 * ### Internal components
 *
 * In addition to `<vaadin24-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin24-date-picker-overlay>` - has the same API as [`<vaadin24-overlay>`](#/elements/vaadin-overlay).
 * - `<vaadin24-date-picker-overlay-content>`
 * - `<vaadin24-date-picker-month-scroller>`
 * - `<vaadin24-date-picker-year-scroller>`
 * - `<vaadin24-date-picker-year>`
 * - `<vaadin24-month-calendar>`
 * - [`<vaadin24-input-container>`](#/elements/vaadin-input-container) - an internal element wrapping the input.
 *
 * In order to style the overlay content, use `<vaadin24-date-picker-overlay-content>` shadow DOM parts:
 *
 * Part name             | Description
 * ----------------------|--------------------
 * `overlay-header`      | Fullscreen mode header
 * `label`               | Fullscreen mode value/label
 * `clear-button`        | Fullscreen mode clear button
 * `toggle-button`       | Fullscreen mode toggle button
 * `years-toggle-button` | Fullscreen mode years scroller toggle
 * `toolbar`             | Footer bar with slotted buttons
 *
 * The following state attributes are available on the `<vaadin24-date-picker-overlay-content>` element:
 *
 * Attribute       | Description
 * ----------------|-------------------------------------------------
 * `desktop`       | Set when the overlay content is in desktop mode
 * `fullscreen`    | Set when the overlay content is in fullscreen mode
 * `years-visible` | Set when the year scroller is visible in fullscreen mode
 *
 * In order to style the month calendar, use `<vaadin24-month-calendar>` shadow DOM parts:
 *
 * Part name             | Description
 * ----------------------|--------------------
 * `month-header`        | Month title
 * `weekdays`            | Weekday container
 * `weekday`             | Weekday element
 * `week-numbers`        | Week numbers container
 * `week-number`         | Week number element
 * `date`                | Date element
 * `disabled`            | Disabled date element
 * `focused`             | Focused date element
 * `selected`            | Selected date element
 * `today`               | Date element corresponding to the current day
 *
 * In order to style year scroller elements, use `<vaadin24-date-picker-year>` shadow DOM parts:
 *
 * Part name             | Description
 * ----------------------|--------------------
 * `year-number`         | Year number
 * `year-separator`      | Year separator
 *
 * Note: the `theme` attribute value set on `<vaadin24-date-picker>` is
 * propagated to the internal components listed above.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 *
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes InputControlMixin
 * @mixes DatePickerMixin
 */
class DatePicker extends DatePickerMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))) {
  static get is() {
    return 'vaadin24-date-picker';
  }

  static get template() {
    return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin24-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin24-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin24-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin24-date-picker-overlay>

      <slot name="tooltip"></slot>
    `;
  }

  /**
   * Used by `InputControlMixin` as a reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */
  get clearElement() {
    return this.$.clearButton;
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

    this._tooltipController = new TooltipController(this);
    this.addController(this._tooltipController);
    this._tooltipController.setPosition('top');
    this._tooltipController.setShouldShow((target) => !target.opened);

    const toggleButton = this.shadowRoot.querySelector('[part="toggle-button"]');
    toggleButton.addEventListener('mousedown', (e) => e.preventDefault());

    this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
  }

  /** @private */
  _onVaadinOverlayClose(e) {
    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().includes(this)) {
      e.preventDefault();
    }
  }

  /** @private */
  _toggle(e) {
    e.stopPropagation();
    if (this.$.overlay.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  // Workaround https://github.com/vaadin/web-components/issues/2855
  /** @protected */
  _openedChanged(opened) {
    super._openedChanged(opened);

    this.$.overlay.positionTarget = this.shadowRoot.querySelector('[part="input-field"]');
    this.$.overlay.noVerticalOverlap = true;
  }
}

internalCustomElements.define(DatePicker.is, DatePicker);

export { DatePicker };
