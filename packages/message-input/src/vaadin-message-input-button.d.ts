/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Button } from '@scoped-vaadin/button/src/vaadin-button.js';

/**
 * An element used internally by `<vaadin23-message-input>`. Not intended to be used separately.
 *
 * @extends Button
 * @protected
 */
declare class MessageInputButton extends Button {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-message-input-button': MessageInputButton;
  }
}
