import "./vaadin-accordion-panel.js";
import { Accordion } from "./src/vaadin-accordion";

if (!customElements.get(Accordion.is)) {
  customElements.define(Accordion.is, Accordion);
}
