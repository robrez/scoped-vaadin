import '@scoped-vaadin/input-container/theme/material/vaadin-input-container-styles.js';
import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const comboBox = css`
  :host {
    display: inline-flex;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='toggle-button']::before {
    content: var(--material-icons-dropdown);
  }

  :host([opened]) [part='toggle-button'] {
    transform: rotate(180deg);
  }
`;

registerStyles('vaadin24-combo-box', [inputFieldShared, comboBox], { moduleId: 'material-combo-box' });
