import '@scoped-vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@scoped-vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import { customField } from '@scoped-vaadin/custom-field/theme/lumo/vaadin-custom-field-styles.js';
import { helper } from '@scoped-vaadin/vaadin-lumo-styles/mixins/helper.js';
import { requiredField } from '@scoped-vaadin/vaadin-lumo-styles/mixins/required-field.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const dateTimePicker = css`
  ::slotted([slot='date-picker']) {
    margin-inline-end: 2px;
    --vaadin-input-field-top-end-radius: 0;
    --vaadin-input-field-bottom-end-radius: 0;
  }

  ::slotted([slot='time-picker']) {
    --vaadin-input-field-top-start-radius: 0;
    --vaadin-input-field-bottom-start-radius: 0;
  }
`;

registerStyles('vaadin24-date-time-picker', [dateTimePicker, requiredField, helper, customField], {
  moduleId: 'lumo-date-time-picker',
});
