import { menuOverlay } from '@scoped-vaadin/vaadin-material-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const contextMenuOverlay = css`
  [part='overlay'] {
    outline: none;
    will-change: transform, opacity;
  }
`;

registerStyles('vaadin24-context-menu-overlay', [menuOverlay, contextMenuOverlay], {
  moduleId: 'material-context-menu-overlay',
});

export { contextMenuOverlay };
