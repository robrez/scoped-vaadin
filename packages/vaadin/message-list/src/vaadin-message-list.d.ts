/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { KeyboardDirectionMixin } from '@scoped-vaadin/a11y-base/src/keyboard-direction-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export interface MessageListItem {
  text?: string;
  time?: string;
  userName?: string;
  userAbbr?: string;
  userImg?: string;
  userColorIndex?: number;
  theme?: string;
  className?: string;
}

/**
 * `<vaadin24-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin24-message>
 *
 * ### Example
 *
 * To create a new message list, add the component to the page:
 *
 * ```html
 * <vaadin24-message-list></vaadin24-message-list>
 * ```
 *
 * Provide the messages to the message list with the [`items`](#/elements/vaadin-message-list#property-items) property.
 *
 * ```js
 * document.querySelector('vaadin24-message-list').items = [
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
 * See the [`<vaadin24-message>`](#/elements/vaadin-message) documentation for the available
 * state attributes and stylable shadow parts of message elements.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 */
declare class MessageList extends KeyboardDirectionMixin(ThemableMixin(ElementMixin(HTMLElement))) {
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
   *   className: string,
   *   theme: string
   * }>
   * ```
   *
   * @type {!Array<!MessageListItem>}
   */
  items: MessageListItem[] | null | undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-message-list': MessageList;
  }
}

export { MessageList };
