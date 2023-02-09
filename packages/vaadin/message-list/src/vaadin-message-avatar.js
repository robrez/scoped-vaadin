import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Avatar } from '@scoped-vaadin/avatar/src/vaadin-avatar.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-message-avatar',
  css`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,
  { moduleId: 'vaadin-message-avatar-styles' },
);

/**
 * An element used internally by `<vaadin23-message>`. Not intended to be used separately.
 *
 * @extends Avatar
 * @private
 */
class MessageAvatar extends Avatar {
  static get is() {
    return 'vaadin23-message-avatar';
  }
}

internalCustomElements.define(MessageAvatar.is, MessageAvatar);
