import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/typography.js';
import './vaadin-message-styles.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin24-message-list',
  css`
    [part='list'] {
      padding: 8px 0;
    }
  `,
  { moduleId: 'material-message-list' },
);
