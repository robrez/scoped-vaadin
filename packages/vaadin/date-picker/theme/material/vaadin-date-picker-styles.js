import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const datePicker = css`
  :host {
    display: inline-flex;
    -webkit-tap-highlight-color: transparent;
  }

  [part='clear-button']::before {
    content: var(--material-icons-clear);
  }

  [part='toggle-button']::before {
    content: var(--material-icons-calendar);
  }
`;

registerStyles('vaadin23-date-picker', [inputFieldShared, datePicker], { moduleId: 'material-date-picker' });
