/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const passwordField = css`
  [part='reveal-button']::before {
    content: var(--material-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--material-icons-eye-disabled);
  }

  /* The reveal button works also in readonly mode */
  :host([readonly]) [part$='button'] {
    color: var(--material-secondary-text-color);
  }

  [part='reveal-button'] {
    position: relative;
    cursor: pointer;
  }

  [part='reveal-button']:hover {
    color: var(--material-text-color);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }

  :host([focused]) ::slotted([slot='reveal'])::before {
    background-color: var(--material-primary-text-color);
  }
`;

registerStyles('vaadin24-password-field', [inputFieldShared, passwordField], { moduleId: 'material-password-field' });
