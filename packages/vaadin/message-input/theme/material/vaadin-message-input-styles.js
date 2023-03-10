import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/typography.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-message-input',
  css`
    :host {
      padding: 0.5em 1em;
    }
  `,
  { moduleId: 'material-message-input' },
);
