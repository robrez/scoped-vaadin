import { Accordion as VaadinAccordion } from "@vaadin/accordion/src/vaadin-accordion.js";

class Accordion extends VaadinAccordion {
  static get is() {
    return "vaadin-23-accordion";
  }
}

export { Accordion };
