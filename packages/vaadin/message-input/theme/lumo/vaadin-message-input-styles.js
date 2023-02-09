import '@scoped-vaadin/vaadin-lumo-styles/color.js';
import '@scoped-vaadin/vaadin-lumo-styles/sizing.js';
import '@scoped-vaadin/vaadin-lumo-styles/spacing.js';
import '@scoped-vaadin/vaadin-lumo-styles/style.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-message-input',
  css`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,
  { moduleId: 'lumo-message-input' },
);
