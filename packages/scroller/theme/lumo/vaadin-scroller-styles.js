import '@scoped-vaadin/vaadin-lumo-styles/color.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const scroller = css`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;

registerStyles('vaadin23-scroller', scroller, { moduleId: 'lumo-scroller' });

export { scroller };
