/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/vaadin-lumo-styles/font-icons.js';
import { comboBoxItem } from '@scoped-vaadin/combo-box/theme/lumo/vaadin-combo-box-item-styles.js';
import { comboBoxOverlay } from '@scoped-vaadin/combo-box/theme/lumo/vaadin-combo-box-overlay-styles.js';
import { item } from '@scoped-vaadin/item/theme/lumo/vaadin-item-styles.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-lumo-styles/mixins/input-field-shared.js';
import { menuOverlayCore } from '@scoped-vaadin/vaadin-lumo-styles/mixins/menu-overlay.js';
import { overlay } from '@scoped-vaadin/vaadin-lumo-styles/mixins/overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-time-picker-item', [item, comboBoxItem], {
  moduleId: 'lumo-time-picker-item',
});

registerStyles(
  'vaadin24-time-picker-overlay',
  [
    overlay,
    menuOverlayCore,
    comboBoxOverlay,
    css`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `,
  ],
  {
    moduleId: 'lumo-time-picker-overlay',
  },
);

const timePicker = css`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;

registerStyles('vaadin24-time-picker', [inputFieldShared, timePicker], { moduleId: 'lumo-time-picker' });
