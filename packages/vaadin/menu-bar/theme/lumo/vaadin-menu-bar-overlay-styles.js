import { contextMenuOverlay } from '@scoped-vaadin/context-menu/theme/lumo/vaadin-context-menu-overlay-styles.js';
import { menuOverlay } from '@scoped-vaadin/vaadin-lumo-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const menuBarOverlay = css`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;

registerStyles('vaadin24-menu-bar-overlay', [menuOverlay, contextMenuOverlay, menuBarOverlay], {
  moduleId: 'lumo-menu-bar-overlay',
});
