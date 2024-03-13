import '@scoped-vaadin/vaadin-lumo-styles/spacing.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-form-layout',
  css`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,
  { moduleId: 'lumo-form-layout' },
);
