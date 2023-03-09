/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const textArea = css`
  [part='input-field'] {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] ::slotted(textarea) {
    padding-top: 0;
    margin-top: 4px;
  }

  [part='input-field']::before,
  [part='input-field']::after {
    bottom: calc(var(--_text-area-vertical-scroll-position) * -1);
  }
`;

registerStyles('vaadin24-text-area', [inputFieldShared, textArea], { moduleId: 'material-text-area' });
