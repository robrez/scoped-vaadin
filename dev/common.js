import {
  color,
  typography,
} from "@scoped-vaadin/vaadin-lumo-styles/all-imports.js";

const style = document.createElement("style");
style.innerHTML = `${color.toString()} ${typography.toString()}`;
document.head.appendChild(style);

export * from "@scoped-vaadin/vaadin-lumo-styles/all-imports.js";
