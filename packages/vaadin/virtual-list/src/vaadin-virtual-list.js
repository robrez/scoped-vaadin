import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { OverflowController } from '@scoped-vaadin/component-base/src/overflow-controller.js';
import { processTemplates } from '@scoped-vaadin/component-base/src/templates.js';
import { Virtualizer } from '@scoped-vaadin/component-base/src/virtualizer.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * `<vaadin23-virtual-list>` is a Web Component for displaying a virtual/infinite list of items.
 *
 * ```html
 * <vaadin23-virtual-list></vaadin23-virtual-list>
 * ```
 *
 * ```js
 * const list = document.querySelector('vaadin23-virtual-list');
 * list.items = items; // An array of data items
 * list.renderer = (root, list, {item, index}) => {
 *   root.textContent = `#${index}: ${item.name}`
 * }
 * ```
 *
 * The following state attributes are available for styling:
 *
 * Attribute        | Description
 * -----------------|--------------------------------------------
 * `overflow`       | Set to `top`, `bottom`, both, or none.
 *
 * See [Virtual List](https://vaadin.com/docs/latest/components/virtual-list) documentation.
 *
 * @extends HTMLElement
 * @mixes ControllerMixin
 * @mixes ElementMixin
 * @mixes ThemableMixin
 */
class VirtualList extends ElementMixin(ControllerMixin(ThemableMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `;
  }

  static get is() {
    return 'vaadin23-virtual-list';
  }

  static get properties() {
    return {
      /**
       * An array containing items determining how many instances to render.
       * @type {Array<!VirtualListItem> | undefined}
       */
      items: { type: Array },

      /**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The render target element representing one item at a time.
       * - `virtualList` The reference to the `<vaadin23-virtual-list>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       * @type {VirtualListRenderer | undefined}
       */
      renderer: Function,

      /** @private */
      __virtualizer: Object,
    };
  }

  static get observers() {
    return ['__itemsOrRendererChanged(items, renderer, __virtualizer)'];
  }

  /** @protected */
  ready() {
    super.ready();

    this.__virtualizer = new Virtualizer({
      createElements: this.__createElements,
      updateElement: this.__updateElement.bind(this),
      elementsContainer: this,
      scrollTarget: this,
      scrollContainer: this.shadowRoot.querySelector('#items'),
    });

    this.__overflowController = new OverflowController(this);
    this.addController(this.__overflowController);

    processTemplates(this);
  }

  /**
   * Scroll to a specific index in the virtual list.
   *
   * @param {number} index Index to scroll to
   */
  scrollToIndex(index) {
    this.__virtualizer.scrollToIndex(index);
  }

  /** @private */
  __createElements(count) {
    return [...Array(count)].map(() => document.createElement('div'));
  }

  /** @private */
  __updateElement(el, index) {
    if (el.__renderer !== this.renderer) {
      el.__renderer = this.renderer;
      this.__clearRenderTargetContent(el);
    }

    if (this.renderer) {
      this.renderer(el, this, { item: this.items[index], index });
    }
  }

  /**
   * Clears the content of a render target.
   * @private
   */
  __clearRenderTargetContent(element) {
    element.innerHTML = '';
    // Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
    // When clearing the rendered content, this part needs to be manually disposed of.
    // Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
    delete element._$litPart$;
  }

  /** @private */
  __itemsOrRendererChanged(items, renderer, virtualizer) {
    // If the renderer is removed but there are elements created by
    // a previous renderer, we need to request an update from the virtualizer
    // to get the already existing elements properly cleared.
    const hasRenderedItems = this.childElementCount > 0;

    if ((renderer || hasRenderedItems) && virtualizer) {
      virtualizer.size = (items || []).length;
      virtualizer.update();
    }
  }

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @return {number}
   */
  get firstVisibleIndex() {
    return this.__virtualizer.firstVisibleIndex;
  }

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @return {number}
   */
  get lastVisibleIndex() {
    return this.__virtualizer.lastVisibleIndex;
  }

  /**
   * Requests an update for the content of the rows.
   * While performing the update, it invokes the renderer passed in the `renderer` property for each visible row.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    if (this.__virtualizer) {
      this.__virtualizer.update();
    }
  }
}

internalCustomElements.define(VirtualList.is, VirtualList);

export { VirtualList };
