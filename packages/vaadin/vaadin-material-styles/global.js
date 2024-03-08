import { addGlobalThemeStyles } from '@scoped-vaadin/vaadin-themable-mixin/register-styles.js';

export const addMaterialGlobalStyles = (id, ...styles) => {
  addGlobalThemeStyles(`material-${id}`, styles);
};
