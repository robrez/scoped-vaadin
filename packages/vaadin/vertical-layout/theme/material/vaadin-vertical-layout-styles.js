import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const verticalLayout = css`
  [theme~='margin'] {
    margin: 16px;
  }

  [theme~='padding'] {
    padding: 16px;
  }

  :host([theme~='spacing-xs']) {
    gap: 4px;
  }

  :host([theme~='spacing-s']) {
    gap: 8px;
  }

  :host([theme~='spacing']) {
    gap: 16px;
  }

  :host([theme~='spacing-l']) {
    gap: 24px;
  }

  :host([theme~='spacing-xl']) {
    gap: 40px;
  }
`;

registerStyles('vaadin24-vertical-layout', verticalLayout, { moduleId: 'material-vertical-layout' });
