/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { TextArea } from '@scoped-vaadin/text-area/src/vaadin-text-area.js';

/**
 * An element used internally by `<vaadin23-message-input>`. Not intended to be used separately.
 *
 * @protected
 */
declare class MessageInputTextArea extends TextArea {
  ariaLabel: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-message-input-text-area': MessageInputTextArea;
  }
}
