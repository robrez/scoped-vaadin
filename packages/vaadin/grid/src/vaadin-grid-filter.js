import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/text-field/src/vaadin-text-field.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { timeOut } from '@scoped-vaadin/component-base/src/async.js';
import { Debouncer } from '@scoped-vaadin/component-base/src/debounce.js';

/**
 * `<vaadin23-grid-filter>` is a helper element for the `<vaadin23-grid>` that provides out-of-the-box UI controls,
 * and handlers for filtering the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin23-grid-column id="column"></vaadin23-grid-column>
 * ```
 * ```js
 * const column = document.querySelector('#column');
 * column.headerRenderer = (root, column) => {
 *   let filter = root.firstElementChild;
 *   if (!filter) {
 *     filter = document.createElement('vaadin23-grid-filter');
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
class GridFilter extends class extends PolymerElement {} {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          max-width: 100%;
        }

        #filter {
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <slot name="filter">
        <vaadin23-text-field id="filter" value="{{value}}"></vaadin23-text-field>
      </slot>
    `;
  }

  static get is() {
    return 'vaadin23-grid-filter';
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
      _connected: Boolean,
    };
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
  }

  static get observers() {
    return ['_filterChanged(path, value, _connected)'];
  }

  /** @protected */
  ready() {
    super.ready();

    const child = this.firstElementChild;
    if (child && child.getAttribute('slot') !== 'filter') {
      console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin23-grid-filter>');
      child.setAttribute('slot', 'filter');
    }
  }

  /** @private */
  _filterChanged(path, value, connected) {
    if (path === undefined || value === undefined || !connected) {
      return;
    }
    if (this._previousValue === undefined && value === '') {
      return;
    }
    this._previousValue = value;

    this._debouncerFilterChanged = Debouncer.debounce(this._debouncerFilterChanged, timeOut.after(200), () => {
      this.dispatchEvent(new CustomEvent('filter-changed', { bubbles: true }));
    });
  }

  focus() {
    this.$.filter.focus();
  }
}

internalCustomElements.define(GridFilter.is, GridFilter);

export { GridFilter };
