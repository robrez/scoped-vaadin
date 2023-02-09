import '@scoped-vaadin/vaadin-lumo-styles/font-icons.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-lumo-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const comboBox = css`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;

registerStyles('vaadin23-combo-box', [inputFieldShared, comboBox], { moduleId: 'lumo-combo-box' });
