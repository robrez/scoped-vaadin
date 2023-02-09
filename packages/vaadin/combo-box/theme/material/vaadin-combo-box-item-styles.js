import '@scoped-vaadin/vaadin-material-styles/color.js';
import '@scoped-vaadin/vaadin-material-styles/font-icons.js';
import '@scoped-vaadin/vaadin-material-styles/typography.js';
import { item } from '@scoped-vaadin/item/theme/material/vaadin-item-styles.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const comboBoxItem = css`
  :host {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 4px 10px;
    --_material-item-selected-icon-display: block;
  }
`;

registerStyles('vaadin23-combo-box-item', [item, comboBoxItem], {
  moduleId: 'material-combo-box-item',
});
