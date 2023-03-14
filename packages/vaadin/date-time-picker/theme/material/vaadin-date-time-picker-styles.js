import '@scoped-vaadin/date-picker/theme/material/vaadin-date-picker.js';
import '@scoped-vaadin/time-picker/theme/material/vaadin-time-picker.js';
import { customField } from '@scoped-vaadin/custom-field/theme/material/vaadin-custom-field-styles.js';
import { helper } from '@scoped-vaadin/vaadin-material-styles/mixins/helper.js';
import { requiredField } from '@scoped-vaadin/vaadin-material-styles/mixins/required-field.js';
import { registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-date-time-picker', [requiredField, helper, customField], {
  moduleId: 'material-date-time-picker',
});
