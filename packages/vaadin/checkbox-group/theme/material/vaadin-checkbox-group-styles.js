import '@scoped-vaadin/vaadin-material-styles/color.js';
import { helper } from '@scoped-vaadin/vaadin-material-styles/mixins/helper.js';
import { requiredField } from '@scoped-vaadin/vaadin-material-styles/mixins/required-field.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const checkboxGroup = css`
  :host {
    display: inline-flex;
    position: relative;
    padding-top: 8px;
    margin-bottom: 8px;
    outline: none;
    color: var(--material-body-text-color);
    font-size: var(--material-body-font-size);
    line-height: 24px;
    font-family: var(--material-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host::before {
    line-height: 32px;
  }

  :host([has-label]) {
    padding-top: 24px;
  }

  :host([theme~='vertical']) [part='group-field'] {
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--material-disabled-text-color);
    -webkit-text-fill-color: var(--material-disabled-text-color);
  }

  :host([focused]:not([invalid])) [part='label'] {
    color: var(--material-primary-text-color);
  }
`;

registerStyles('vaadin24-checkbox-group', [requiredField, helper, checkboxGroup], {
  moduleId: 'material-checkbox-group',
});
