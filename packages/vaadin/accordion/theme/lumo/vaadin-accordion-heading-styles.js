import { detailsSummary } from '@scoped-vaadin/details/theme/lumo/vaadin-details-summary-styles.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const accordionHeading = css`
  :host {
    padding: 0;
  }

  [part='content'] {
    padding: var(--lumo-space-s) 0;
  }

  :host([theme~='filled']) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

registerStyles('vaadin24-accordion-heading', [detailsSummary, accordionHeading], { moduleId: 'lumo-accordion-heading' });
