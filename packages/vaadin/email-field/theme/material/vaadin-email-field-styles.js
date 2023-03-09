/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { inputFieldShared } from '@scoped-vaadin/vaadin-material-styles/mixins/input-field-shared.js';
import { registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-email-field', inputFieldShared, {
  moduleId: 'material-email-field',
});
