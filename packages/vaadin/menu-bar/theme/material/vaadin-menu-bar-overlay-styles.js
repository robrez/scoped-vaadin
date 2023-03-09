import { contextMenuOverlay } from '@scoped-vaadin/context-menu/theme/material/vaadin-context-menu-overlay-styles.js';
import { menuOverlay } from '@scoped-vaadin/vaadin-material-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const menuBarOverlay = css`
  :host(:first-of-type) {
    padding-top: 5px;
  }
`;

registerStyles('vaadin24-menu-bar-overlay', [menuOverlay, contextMenuOverlay, menuBarOverlay], {
  moduleId: 'material-menu-bar-overlay',
});
