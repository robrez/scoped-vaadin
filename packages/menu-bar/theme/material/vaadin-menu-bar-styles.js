import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-menu-bar',
  css`
    [part='container'] {
      /* To retain the box-shadow */
      padding-bottom: 5px;
    }

    :host([has-single-button]) [part$='button'] {
      border-radius: 4px;
    }

    :host([theme~='end-aligned']) [part$='button']:first-child,
    :host([theme~='end-aligned'][has-single-button]) [part$='button'] {
      margin-inline-start: auto;
    }
  `,
  { moduleId: 'material-menu-bar' },
);
