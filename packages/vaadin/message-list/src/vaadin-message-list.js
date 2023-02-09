import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@polymer/polymer/lib/elements/dom-repeat.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { microTask } from '@scoped-vaadin/component-base/src/async.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { KeyboardDirectionMixin } from '@scoped-vaadin/component-base/src/keyboard-direction-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { Message } from './vaadin-message.js';

/**
 * `<vaadin23-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin23-message>
 *
 * ### Example
 * To create a new message list, add the component to the page:
 * ```html
 * <vaadin23-message-list></vaadin23-message-list>
 * ```
 *
 * Provide the messages to the message list with the `items` property.
 * ```js
 * document.querySelector('vaadin23-message-list').items = [
 *   { text: 'Hello list', time: 'yesterday', userName: 'Matt Mambo', userAbbr: 'MM', userColorIndex: 1 },
 *   { text: 'Another message', time: 'right now', userName: 'Linsey Listy', userAbbr: 'LL', userColorIndex: 2, userImg: '/static/img/avatar.jpg' }
 * ];
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------|----------------
 * `list`    | The container wrapping messages.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 * @mixes KeyboardDirectionMixin
 */
class MessageList extends KeyboardDirectionMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get is() {
    return 'vaadin23-message-list';
  }

  static get properties() {
    return {
      /**
       * An array of objects which will be rendered as messages.
       * The message objects can have the following properties:
       * ```js
       * Array<{
       *   text: string,
       *   time: string,
       *   userName: string,
       *   userAbbr: string,
       *   userImg: string,
       *   userColorIndex: number,
       *   theme: string
       * }>
       * ```
       */
      items: {
        type: Array,
        value: () => [],
        observer: '_itemsChanged',
      },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin23-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin23-message
          >
        </template>
      </div>
    `;
  }

  /** @protected */
  ready() {
    super.ready();

    // Make screen readers announce new messages
    this.setAttribute('aria-relevant', 'additions');
    this.setAttribute('role', 'log');
  }

  /**
   * Override method inherited from `KeyboardDirectionMixin`
   * to use the list of message elements as items.
   *
   * @return {Element[]}
   * @protected
   * @override
   */
  _getItems() {
    return this._messages;
  }

  /** @protected */
  get _messages() {
    return Array.from(this.shadowRoot.querySelectorAll('vaadin23-message'));
  }

  /** @private */
  _itemsChanged(newVal, oldVal) {
    const focusedIndex = this._getIndexOfFocusableElement();
    if (newVal && newVal.length) {
      const moreItems = !oldVal || newVal.length > oldVal.length;
      const closeToBottom = this.scrollHeight < this.clientHeight + this.scrollTop + 50;
      microTask.run(() => {
        this._setTabIndexesByIndex(focusedIndex);
        if (moreItems && closeToBottom) {
          this._scrollToLastMessage();
        }
      });
    }
  }

  /** @private */
  _scrollToLastMessage() {
    if (this.items.length > 0) {
      this.scrollTop = this.scrollHeight - this.clientHeight;
    }
  }

  /** @private */
  _handleFocusEvent(e) {
    const target = e.composedPath().find((node) => node instanceof Message);
    this._setTabIndexesByMessage(target);
  }

  /**
   * @param {number} idx
   * @protected
   */
  _setTabIndexesByIndex(index) {
    const message = this._messages[index] || this._messages[0];
    this._setTabIndexesByMessage(message);
  }

  /** @private */
  _setTabIndexesByMessage(message) {
    this._messages.forEach((e) => {
      e.tabIndex = e === message ? 0 : -1;
    });
  }

  /** @private */
  _getIndexOfFocusableElement() {
    const index = this._messages.findIndex((e) => e.tabIndex === 0);
    return index !== -1 ? index : 0;
  }
}

internalCustomElements.define(MessageList.is, MessageList);

export { MessageList };
