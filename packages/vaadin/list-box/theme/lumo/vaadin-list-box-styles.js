import '@scoped-vaadin/vaadin-lumo-styles/color.js';
import '@scoped-vaadin/vaadin-lumo-styles/spacing.js';
import '@scoped-vaadin/vaadin-lumo-styles/style.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const listBox = css`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;

registerStyles('vaadin24-list-box', listBox, { moduleId: 'lumo-list-box' });

export { listBox };
