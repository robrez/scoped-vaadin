import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin24-icon',
  css`
    :host {
      width: 24px;
      height: 24px;
    }
  `,
  { moduleId: 'material-icon' },
);
