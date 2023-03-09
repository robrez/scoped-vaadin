import '@scoped-vaadin/vaadin-lumo-styles/sizing.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin24-icon',
  css`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,
  { moduleId: 'lumo-icon' },
);
