import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Button } from '@scoped-vaadin/button/src/vaadin-button.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-message-input-button',
  css`
    :host {
      flex-shrink: 0;
    }
  `,
  { moduleId: 'vaadin-message-input-button-styles' },
);

/**
 * An element used internally by `<vaadin23-message-input>`. Not intended to be used separately.
 *
 * @extends Button
 * @protected
 */
class MessageInputButton extends Button {
  static get is() {
    return 'vaadin23-message-input-button';
  }
}

internalCustomElements.define(MessageInputButton.is, MessageInputButton);
