/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/vaadin-lumo-styles/font-icons.js';
import '@scoped-vaadin/vaadin-lumo-styles/sizing.js';
import '@scoped-vaadin/vaadin-lumo-styles/style.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-lumo-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const passwordField = css`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;

registerStyles('vaadin24-password-field', [inputFieldShared, passwordField], { moduleId: 'lumo-password-field' });
