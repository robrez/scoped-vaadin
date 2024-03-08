import { addGlobalThemeStyles } from '@scoped-vaadin/vaadin-themable-mixin/register-styles.js';

export const addLumoGlobalStyles = (id, ...styles) => {
  addGlobalThemeStyles(`lumo-${id}`, styles);
};
