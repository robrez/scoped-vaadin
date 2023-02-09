import { AccordionPanel } from "./src/vaadin-accordion-panel.js";

if (!customElements.get(AccordionPanel.is)) {
  customElements.define(AccordionPanel.is, AccordionPanel);
}
