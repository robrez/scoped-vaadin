import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/overlay/theme/material/vaadin-overlay.js';
import { loader } from '@scoped-vaadin/vaadin-material-styles/mixins/loader.js';
import { menuOverlay } from '@scoped-vaadin/vaadin-material-styles/mixins/menu-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const comboBoxOverlay = css`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [part='content'] {
    padding: 0;
  }
`;

const comboBoxLoader = css`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    top: -2px;
    left: 0;
    right: 0;
  }
`;

registerStyles(
  'vaadin24-combo-box-overlay',
  [
    menuOverlay,
    comboBoxOverlay,
    loader,
    comboBoxLoader,
    css`
      :host {
        --_vaadin-combo-box-items-container-border-width: 8px 0;
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `,
  ],
  { moduleId: 'material-combo-box-overlay' },
);

export { comboBoxLoader, comboBoxOverlay };
