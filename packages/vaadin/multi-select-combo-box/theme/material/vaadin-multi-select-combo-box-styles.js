/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/input-container/theme/material/vaadin-input-container-styles.js';
import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import '@scoped-vaadin/vaadin-material-styles/typography.js';
import { comboBoxItem } from '@scoped-vaadin/combo-box/theme/material/vaadin-combo-box-item-styles.js';
import { comboBoxLoader, comboBoxOverlay } from '@scoped-vaadin/combo-box/theme/material/vaadin-combo-box-overlay-styles.js';
import { item } from '@scoped-vaadin/item/theme/material/vaadin-item-styles.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { loader } from '@scoped-vaadin/vaadin-material-styles/mixins/loader.js';
import { menuOverlay } from '@scoped-vaadin/vaadin-material-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const multiSelectComboBoxItem = css`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;

registerStyles('vaadin24-multi-select-combo-box-item', [item, comboBoxItem, multiSelectComboBoxItem], {
  moduleId: 'material-multi-select-combo-box-item',
});

registerStyles(
  'vaadin24-multi-select-combo-box-overlay',
  [
    menuOverlay,
    comboBoxOverlay,
    loader,
    comboBoxLoader,
    css`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: 8px 0;
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `,
  ],
  { moduleId: 'material-multi-select-combo-box-overlay' },
);

const multiSelectComboBox = css`
  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--material-body-text-color) !important;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    padding: 0 0.5rem;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-top: 0.25rem;
    align-self: flex-start;
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  [part='input-field'] {
    height: auto;
    min-height: 32px;
  }

  [part='input-field'] ::slotted(input) {
    padding: 6px 0;
  }

  [part='toggle-button']::before {
    content: var(--material-icons-dropdown);
  }

  :host([opened]) [part='toggle-button'] {
    transform: rotate(180deg);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--material-secondary-text-color);
  }
`;

registerStyles('vaadin24-multi-select-combo-box', [inputFieldShared, multiSelectComboBox], {
  moduleId: 'material-multi-select-combo-box',
});
