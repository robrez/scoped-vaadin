import { AccordionPanel as VaadinAccordionPanel } from "@vaadin/accordion/src/vaadin-accordion-panel.js";

class AccordionPanel extends VaadinAccordionPanel {
  static get is() {
    return "vaadin-23-accordion-panel";
  }
}

export { AccordionPanel };
