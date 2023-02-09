import { color, typography } from "@vaadin/vaadin-lumo-styles/all-imports.js";

const style = document.createElement("style");
style.innerHTML = `${color.toString()} ${typography.toString()}`;
document.head.appendChild(style);

export * from "@vaadin/vaadin-lumo-styles/all-imports.js";
