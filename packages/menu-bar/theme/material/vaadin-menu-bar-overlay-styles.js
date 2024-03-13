import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-context-menu-overlay',
  css`
    :host(:first-of-type) {
      padding-top: 5px;
    }
  `,
  { moduleId: 'material-menu-bar-overlay' },
);
