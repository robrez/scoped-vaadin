import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/input-container/src/vaadin-input-container.js';
import './vaadin-select-item.js';
import './vaadin-select-list-box.js';
import './vaadin-select-overlay.js';
import './vaadin-select-value-button.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { addValueToAttribute } from '@scoped-vaadin/component-base/src/dom-utils.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { MediaQueryController } from '@scoped-vaadin/component-base/src/media-query-controller.js';
import { SlotController } from '@scoped-vaadin/component-base/src/slot-controller.js';
import { processTemplates } from '@scoped-vaadin/component-base/src/templates.js';
import { TooltipController } from '@scoped-vaadin/component-base/src/tooltip-controller.js';
import { generateUniqueId } from '@scoped-vaadin/component-base/src/unique-id-utils.js';
import { DelegateFocusMixin } from '@scoped-vaadin/field-base/src/delegate-focus-mixin.js';
import { DelegateStateMixin } from '@scoped-vaadin/field-base/src/delegate-state-mixin.js';
import { FieldMixin } from '@scoped-vaadin/field-base/src/field-mixin.js';
import { fieldShared } from '@scoped-vaadin/field-base/src/styles/field-shared-styles.js';
import { inputFieldContainer } from '@scoped-vaadin/field-base/src/styles/input-field-container-styles.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin23-select', [fieldShared, inputFieldContainer], { moduleId: 'vaadin-select-styles' });

/**
 * `<vaadin23-select>` is a Web Component for selecting values from a list of items.
 *
 * ### Items
 *
 * Use the `items` property to define possible options for the select:
 *
 * ```html
 * <vaadin23-select id="select"></vaadin23-select>
 * ```
 * ```js
 * const select = document.querySelector('#select');
 * select.items = [
 *   { label: 'Most recent first', value: 'recent' },
 *   { component: 'hr' },
 *   { label: 'Rating: low to high', value: 'rating-asc' },
 *   { label: 'Rating: high to low', value: 'rating-desc' },
 *   { component: 'hr' },
 *   { label: 'Price: low to high', value: 'price-asc', disabled: true },
 *   { label: 'Price: high to low', value: 'price-desc', disabled: true }
 * ];
 * ```
 *
 * ### Rendering
 *
 * Alternatively, the content of the select can be populated by using the renderer callback function.
 *
 * The renderer function provides `root`, `select` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `select`.
 *
 * ```js
 * const select = document.querySelector('#select');
 * select.renderer = function(root, select) {
 *   const listBox = document.createElement('vaadin23-list-box');
 *   // append 3 <vaadin23-item> elements
 *   ['Jose', 'Manolo', 'Pedro'].forEach(function(name) {
 *     const item = document.createElement('vaadin23-item');
 *     item.textContent = name;
 *     item.setAttribute('label', name)
 *     listBox.appendChild(item);
 *   });
 *
 *   // update the content
 *   root.appendChild(listBox);
 * };
 * ```
 *
 * Renderer is called on initialization of new select and on its opening.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * * Hint: By setting the `label` property of inner vaadin-items you will
 * be able to change the visual representation of the selected value in the input part.
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property                    | Description                  | Target element          | Default
 * -----------------------------------|------------------------------|----------------------------------
 * `--vaadin-field-default-width`     | Default width of the field   | :host                   | `12em`
 * `--vaadin-select-text-field-width` | Effective width of the field | `vaadin23-select-overlay` |
 *
 * `<vaadin23-select>` provides mostly the same set of shadow DOM parts and state attributes as `<vaadin23-text-field>`.
 * See [`<vaadin23-text-field>`](#/elements/vaadin-text-field) for the styling documentation.
 *
 *
 * In addition to `<vaadin23-text-field>` parts, the following parts are available for theming:
 *
 * Part name       | Description
 * ----------------|----------------
 * `toggle-button` | The toggle button
 *
 * In addition to `<vaadin23-text-field>` state attributes, the following state attributes are available for theming:
 *
 * Attribute | Description                 | Part name
 * ----------|-----------------------------|-----------
 * `opened`  | Set when the select is open | :host
 *
 * There are two exceptions in terms of styling compared to `<vaadin23-text-field>`:
 * - the `clear-button` shadow DOM part does not exist in `<vaadin23-select>`.
 * - the `input-prevented` state attribute is not supported by `<vaadin23-select>`.
 *
 * ### Internal components
 *
 * In addition to `<vaadin23-select>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin23-select-overlay>` - has the same API as [`<vaadin23-overlay>`](#/elements/vaadin-overlay).
 * - `<vaadin23-select-value-button>` - has the same API as [`<vaadin23-button>`](#/elements/vaadin-button).
 * - [`<vaadin23-input-container>`](#/elements/vaadin-input-container) - an internal element wrapping the button.
 *
 * Note: the `theme` attribute value set on `<vaadin23-select>` is
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
 * @mixes FieldMixin
 * @mixes DelegateFocusMixin
 * @mixes DelegateStateMixin
 */
class Select extends DelegateFocusMixin(DelegateStateMixin(FieldMixin(ElementMixin(ThemableMixin(PolymerElement))))) {
  static get is() {
    return 'vaadin23-select';
  }

  static get template() {
    return html`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin23-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin23-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin23-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin23-select-overlay>

      <slot name="tooltip"></slot>
    `;
  }

  static get properties() {
    return {
      /**
       * An array containing items that will be rendered as the options of the select.
       *
       * #### Example
       * ```js
       * select.items = [
       *   { label: 'Most recent first', value: 'recent' },
       *   { component: 'hr' },
       *   { label: 'Rating: low to high', value: 'rating-asc' },
       *   { label: 'Rating: high to low', value: 'rating-desc' },
       *   { component: 'hr' },
       *   { label: 'Price: low to high', value: 'price-asc', disabled: true },
       *   { label: 'Price: high to low', value: 'price-desc', disabled: true }
       * ];
       * ```
       *
       * Note: each item is rendered by default as the internal `<vaadin23-select-item>` that is an extension of `<vaadin23-item>`.
       * To render the item with a custom component, provide a tag name by the `component` property.
       *
       * @type {!Array<!SelectItem>}
       */
      items: {
        type: Array,
        observer: '__itemsChanged',
      },

      /**
       * Set when the select is open
       * @type {boolean}
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_openedChanged',
      },

      /**
       * Custom function for rendering the content of the `<vaadin23-select>`.
       * Receives two arguments:
       *
       * - `root` The `<vaadin23-select-overlay>` internal container
       *   DOM element. Append your content to it.
       * - `select` The reference to the `<vaadin23-select>` element.
       * @type {!SelectRenderer | undefined}
       */
      renderer: Function,

      /**
       * It stores the the `value` property of the selected item, providing the
       * value for iron-form.
       * When there???s an item selected, it's the value of that item, otherwise
       * it's an empty string.
       * On change or initialization, the component finds the item which matches the
       * value and displays it.
       * If no value is provided to the component, it selects the first item without
       * value or empty value.
       * Hint: If you do not want to select any item by default, you can either set all
       * the values of inner vaadin-items, or set the vaadin-select value to
       * an inexistent value in the items list.
       * @type {string}
       */
      value: {
        type: String,
        value: '',
        notify: true,
        observer: '_valueChanged',
      },

      /**
       * The name of this element.
       */
      name: {
        type: String,
      },

      /**
       * A hint to the user of what can be entered in the control.
       * The placeholder will be displayed in the case that there
       * is no item selected, or the selected item has an empty
       * string label, or the selected item has no label and it's
       * DOM content is empty.
       */
      placeholder: {
        type: String,
      },

      /**
       * When present, it specifies that the element is read-only.
       * @type {boolean}
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },

      /** @private */
      _phone: Boolean,

      /** @private */
      _phoneMediaQuery: {
        value: '(max-width: 420px), (max-height: 420px)',
      },

      /** @private */
      _overlayElement: Object,

      /** @private */
      _inputContainer: Object,

      /** @private */
      _items: Object,
    };
  }

  static get delegateAttrs() {
    return [...super.delegateAttrs, 'invalid'];
  }

  static get observers() {
    return [
      '_updateAriaExpanded(opened)',
      '_updateSelectedItem(value, _items, placeholder)',
      '_rendererChanged(renderer, _overlayElement)',
    ];
  }

  /** @protected */
  get _valueButton() {
    return this._valueButtonController && this._valueButtonController.node;
  }

  constructor() {
    super();

    this._fieldId = `${this.localName}-${generateUniqueId()}`;

    this._boundOnKeyDown = this._onKeyDown.bind(this);
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();

    // Making sure the select is closed and removed from DOM after detaching the select.
    this.opened = false;
  }

  /** @protected */
  ready() {
    super.ready();

    this._overlayElement = this.shadowRoot.querySelector('vaadin23-select-overlay');
    this._inputContainer = this.shadowRoot.querySelector('[part~="input-field"]');

    this._valueButtonController = new SlotController(
      this,
      'value',
      () => document.createElement('vaadin23-select-value-button'),
      (host, btn) => {
        this._setFocusElement(btn);
        this.ariaTarget = btn;
        this.stateTarget = btn;

        btn.setAttribute('aria-haspopup', 'listbox');
        addValueToAttribute(btn, 'aria-labelledby', this._fieldId);

        this._updateAriaExpanded(host.opened);

        btn.addEventListener('keydown', this._boundOnKeyDown);
      },
    );
    this.addController(this._valueButtonController);

    this.addController(
      new MediaQueryController(this._phoneMediaQuery, (matches) => {
        this._phone = matches;
      }),
    );

    processTemplates(this);

    this._tooltipController = new TooltipController(this);
    this._tooltipController.setPosition('top');
    this.addController(this._tooltipController);
  }

  /**
   * Requests an update for the content of the select.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    if (!this._overlayElement) {
      return;
    }

    this._overlayElement.requestContentUpdate();

    if (this._menuElement && this._menuElement.items) {
      this._updateSelectedItem(this.value, this._menuElement.items);
    }
  }

  /**
   * Override an observer from `FieldMixin`
   * to validate when required is removed.
   *
   * @protected
   * @override
   */
  _requiredChanged(required) {
    super._requiredChanged(required);

    if (required === false) {
      this.validate();
    }
  }

  /**
   * @param {SelectRenderer | undefined | null} renderer
   * @param {SelectOverlay | undefined} overlay
   * @private
   */
  _rendererChanged(renderer, overlay) {
    if (!overlay) {
      return;
    }

    overlay.setProperties({ owner: this, renderer: renderer || this.__defaultRenderer });

    this.requestContentUpdate();
  }

  /**
   * @param {SelectItem[] | undefined | null} newItems
   * @param {SelectItem[] | undefined | null} oldItems
   * @private
   */
  __itemsChanged(newItems, oldItems) {
    if (newItems || oldItems) {
      this.requestContentUpdate();
    }
  }

  /**
   * @param {HTMLElement} menuElement
   * @protected
   */
  _assignMenuElement(menuElement) {
    if (menuElement && menuElement !== this.__lastMenuElement) {
      this._menuElement = menuElement;

      // Ensure items are initialized
      this.__initMenuItems(menuElement);

      menuElement.addEventListener('items-changed', () => {
        this.__initMenuItems(menuElement);
      });

      menuElement.addEventListener('selected-changed', () => this.__updateValueButton());
      // Use capture phase to make it possible for `<vaadin23-grid-pro-edit-select>`
      // to override and handle the keydown event before the value change happens.
      menuElement.addEventListener('keydown', (e) => this._onKeyDownInside(e), true);
      menuElement.addEventListener(
        'click',
        () => {
          this.__userInteraction = true;
          this.opened = false;
        },
        true,
      );

      // Store the menu element reference
      this.__lastMenuElement = menuElement;
    }
  }

  /** @private */
  __initMenuItems(menuElement) {
    if (menuElement.items) {
      this._items = menuElement.items;
    }
  }

  /** @private */
  _valueChanged(value, oldValue) {
    this.toggleAttribute('has-value', Boolean(value));

    // Validate only if `value` changes after initialization.
    if (oldValue !== undefined) {
      this.validate();
    }
  }

  /**
   * Opens the overlay if the field is not read-only.
   *
   * @private
   */
  _onClick(event) {
    // Prevent parent components such as `vaadin23-grid`
    // from handling the click event after it bubbles.
    event.preventDefault();

    this.opened = !this.readonly;
  }

  /** @private */
  _onToggleMouseDown(event) {
    // Prevent mousedown event to avoid blur and preserve focused state
    // while opening, and to restore focus-ring attribute on closing.
    event.preventDefault();
  }

  /**
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDown(e) {
    if (!this.readonly && !this.opened) {
      if (/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key)) {
        e.preventDefault();
        this.opened = true;
      } else if (/[\p{L}\p{Nd}]/u.test(e.key) && e.key.length === 1) {
        const selected = this._menuElement.selected;
        const currentIdx = selected !== undefined ? selected : -1;
        const newIdx = this._menuElement._searchKey(currentIdx, e.key);
        if (newIdx >= 0) {
          this.__userInteraction = true;

          // Announce the value selected with the first letter shortcut
          this._updateAriaLive(true);
          this._menuElement.selected = newIdx;
        }
      }
    }
  }

  /**
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDownInside(e) {
    if (/^(Tab)$/.test(e.key)) {
      this.opened = false;
    }
  }

  /** @private */
  _openedChanged(opened, wasOpened) {
    if (opened) {
      // Avoid multiple announcements when a value gets selected from the dropdown
      this._updateAriaLive(false);

      if (!this._overlayElement || !this._menuElement || !this.focusElement || this.disabled || this.readonly) {
        this.opened = false;
        return;
      }

      this._overlayElement.style.setProperty(
        '--vaadin-select-text-field-width',
        `${this._inputContainer.offsetWidth}px`,
      );

      // Preserve focus-ring to restore it later
      const hasFocusRing = this.hasAttribute('focus-ring');
      this._openedWithFocusRing = hasFocusRing;

      // Opened select should not keep focus-ring
      if (hasFocusRing) {
        this.removeAttribute('focus-ring');
      }

      this._menuElement.focus();
    } else if (wasOpened) {
      this.focus();
      if (this._openedWithFocusRing) {
        this.setAttribute('focus-ring', '');
      }
      this.validate();
    }
  }

  /** @private */
  _updateAriaExpanded(opened) {
    if (this._valueButton) {
      this._valueButton.setAttribute('aria-expanded', opened ? 'true' : 'false');
    }
  }

  /** @private */
  _updateAriaLive(ariaLive) {
    if (this._valueButton) {
      if (ariaLive) {
        this._valueButton.setAttribute('aria-live', 'polite');
      } else {
        this._valueButton.removeAttribute('aria-live');
      }
    }
  }

  /** @private */
  __attachSelectedItem(selected) {
    let labelItem;

    const label = selected.getAttribute('label');
    if (label) {
      labelItem = this.__createItemElement({ label });
    } else {
      labelItem = selected.cloneNode(true);
    }

    // Store reference to the original item
    labelItem._sourceItem = selected;

    this.__appendValueItemElement(labelItem);

    // Ensure the item gets proper styles
    labelItem.selected = true;
  }

  /**
   * @param {!SelectItem} item
   * @private
   */
  __createItemElement(item) {
    const itemElement = document.createElement(item.component || 'vaadin23-select-item');
    if (item.label) {
      itemElement.textContent = item.label;
    }
    if (item.value) {
      itemElement.value = item.value;
    }
    if (item.disabled) {
      itemElement.disabled = item.disabled;
    }
    return itemElement;
  }

  /**
   * @param {!HTMLElement} itemElement
   * @param {!HTMLElement} parent
   * @private
   */
  __appendValueItemElement(itemElement) {
    this._valueButton.appendChild(itemElement);

    itemElement.removeAttribute('tabindex');
    itemElement.removeAttribute('aria-selected');
    itemElement.removeAttribute('role');
    itemElement.setAttribute('id', this._fieldId);
  }

  /** @private */
  __updateValueButton() {
    if (!this._valueButton) {
      return;
    }

    this._valueButton.innerHTML = '';

    const selected = this._items[this._menuElement.selected];

    this._valueButton.removeAttribute('placeholder');

    if (!selected) {
      if (this.placeholder) {
        const item = this.__createItemElement({ label: this.placeholder });
        this.__appendValueItemElement(item);
        this._valueButton.setAttribute('placeholder', '');
      }
    } else {
      this.__attachSelectedItem(selected);

      if (!this._valueChanging) {
        this._selectedChanging = true;
        this.value = selected.value || '';
        if (this.__userInteraction) {
          this.opened = false;
          this.dispatchEvent(new CustomEvent('change', { bubbles: true }));
          this.__userInteraction = false;
        }
        delete this._selectedChanging;
      }
    }
  }

  /** @private */
  _updateSelectedItem(value, items) {
    if (items) {
      const valueAsString = value == null ? value : value.toString();
      this._menuElement.selected = items.reduce((prev, item, idx) => {
        return prev === undefined && item.value === valueAsString ? idx : prev;
      }, undefined);
      if (!this._selectedChanging) {
        this._valueChanging = true;
        this.__updateValueButton();
        delete this._valueChanging;
      }
    }
  }

  /**
   * Override method inherited from `FocusMixin` to not remove focused
   * state when select is opened and focus moves to list-box.
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldRemoveFocus() {
    return !this.opened;
  }

  /**
   * Override method inherited from `FocusMixin` to validate on blur.
   * @param {boolean} focused
   * @protected
   * @override
   */
  _setFocused(focused) {
    super._setFocused(focused);

    if (!focused) {
      this.validate();
    }
  }

  /**
   * Returns true if the current value satisfies all constraints (if any)
   *
   * @return {boolean}
   */
  checkValidity() {
    return !this.required || this.readonly || !!this.value;
  }

  /**
   * Renders items when they are provided by the `items` property and clears the content otherwise.
   * @param {!HTMLElement} root
   * @param {!Select} _select
   * @private
   */
  __defaultRenderer(root, _select) {
    if (!this.items || this.items.length === 0) {
      root.textContent = '';
      return;
    }

    let listBox = root.firstElementChild;
    if (!listBox) {
      listBox = document.createElement('vaadin23-select-list-box');
      root.appendChild(listBox);
    }

    listBox.textContent = '';
    this.items.forEach((item) => {
      listBox.appendChild(this.__createItemElement(item));
    });
  }

  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */
}

internalCustomElements.define(Select.is, Select);

export { Select };
