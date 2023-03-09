import '@scoped-vaadin/vaadin-lumo-styles/sizing.js';
import '@scoped-vaadin/vaadin-lumo-styles/spacing.js';
import { contextMenuItem } from '@scoped-vaadin/context-menu/theme/lumo/vaadin-context-menu-item-styles.js';
import { item } from '@scoped-vaadin/item/theme/lumo/vaadin-item-styles.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const menuBarItem = css`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;

registerStyles('vaadin24-menu-bar-item', [item, contextMenuItem, menuBarItem], { moduleId: 'lumo-menu-bar-item' });
