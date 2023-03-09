import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/text-field/src/vaadin-text-field.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { timeOut } from '@scoped-vaadin/component-base/src/async.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { Debouncer } from '@scoped-vaadin/component-base/src/debounce.js';
import { SlotController } from '@scoped-vaadin/component-base/src/slot-controller.js';

/**
 * `<vaadin24-grid-filter>` is a helper element for the `<vaadin24-grid>` that provides out-of-the-box UI controls,
 * and handlers for filtering the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin24-grid-column id="column"></vaadin24-grid-column>
 * ```
 * ```js
 * const column = document.querySelector('#column');
 * column.headerRenderer = (root, column) => {
 *   let filter = root.firstElementChild;
 *   if (!filter) {
 *     filter = document.createElement('vaadin24-grid-filter');
 *     root.appendChild(filter);
 *   }
 *   filter.path = 'name.first';
 * };
 * column.renderer = (root, column, model) => {
 *   root.textContent = model.item.name.first;
 * };
 * ```
 *
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 *
 * @extends HTMLElement
 */
class GridFilter extends ControllerMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          max-width: 100%;
        }

        ::slotted(*) {
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <slot></slot>
    `;
  }

  static get is() {
    return 'vaadin24-grid-filter';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: String,

      /**
       * Current filter value.
       */
      value: {
        type: String,
        notify: true,
      },

      /** @private */
      _textField: {
        type: Object,
      },
    };
  }

  static get observers() {
    return ['_filterChanged(path, value, _textField)'];
  }

  /** @protected */
  ready() {
    super.ready();

    this._filterController = new SlotController(this, '', 'vaadin24-text-field', {
      initializer: (field) => {
        field.addEventListener('value-changed', (e) => {
          this.value = e.detail.value;
        });

        this._textField = field;
      },
    });
    this.addController(this._filterController);
  }

  /** @private */
  _filterChanged(path, value, textField) {
    if (path === undefined || value === undefined || !textField) {
      return;
    }
    if (this._previousValue === undefined && value === '') {
      return;
    }

    textField.value = value;
    this._previousValue = value;

    this._debouncerFilterChanged = Debouncer.debounce(this._debouncerFilterChanged, timeOut.after(200), () => {
      this.dispatchEvent(new CustomEvent('filter-changed', { bubbles: true }));
    });
  }

  focus() {
    if (this._textField) {
      this._textField.focus();
    }
  }
}

internalCustomElements.define(GridFilter.is, GridFilter);

export { GridFilter };
