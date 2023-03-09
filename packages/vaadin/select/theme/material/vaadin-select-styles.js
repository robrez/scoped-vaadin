/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import { item } from '@scoped-vaadin/item/theme/material/vaadin-item-styles.js';
import { listBox } from '@scoped-vaadin/list-box/theme/material/vaadin-list-box-styles.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { menuOverlay } from '@scoped-vaadin/vaadin-material-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-select-item', item, { moduleId: 'material-select-item' });

registerStyles('vaadin24-select-list-box', listBox, { moduleId: 'material-select-list-box' });

const select = css`
  :host {
    display: inline-flex;
    -webkit-tap-highlight-color: transparent;
  }

  /* placeholder styles */
  :host [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--material-disabled-text-color);
    transition: opacity 0.175s 0.1s;
    opacity: 1;
  }

  :host([has-label]:not([focused]):not([invalid]):not([theme='always-float-label']))
    ::slotted([slot='value'][placeholder]) {
    opacity: 0;
    /* Avoid a flash of the placeholder text on init */
    transition: none;
  }

  :host [part='input-field'] ::slotted([slot='value']) {
    color: var(--material-body-text-color);
  }

  [part='toggle-button']::before {
    content: var(--material-icons-dropdown);
  }

  :host([opened]) [part='toggle-button'] {
    transform: rotate(180deg);
  }

  :host([disabled]) {
    pointer-events: none;
  }
`;

registerStyles('vaadin24-select', [inputFieldShared, select], { moduleId: 'material-select' });

registerStyles(
  'vaadin24-select-value-button',
  css`
    :host {
      font: inherit;
      letter-spacing: normal;
      text-transform: none;
    }

    ::slotted(*) {
      font: inherit;
      padding: 4px 0;
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,
  { moduleId: 'material-select-value-button' },
);

const selectOverlay = css`
  [part='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }
`;

registerStyles('vaadin24-select-overlay', [menuOverlay, selectOverlay], { moduleId: 'material-select-overlay' });
