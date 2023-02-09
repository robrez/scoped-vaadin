import '@scoped-vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@scoped-vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import { customField } from '@scoped-vaadin/custom-field/theme/lumo/vaadin-custom-field-styles.js';
import { helper } from '@scoped-vaadin/vaadin-lumo-styles/mixins/helper.js';
import { requiredField } from '@scoped-vaadin/vaadin-lumo-styles/mixins/required-field.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin23-date-time-picker', [requiredField, helper, customField], {
  moduleId: 'lumo-date-time-picker',
});

registerStyles(
  'vaadin23-date-time-picker-date-picker',
  css`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,
  { moduleId: 'lumo-date-time-picker-date-picker' },
);

registerStyles(
  'vaadin23-date-time-picker-time-picker',
  css`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,
  { moduleId: 'lumo-date-time-picker-time-picker' },
);
