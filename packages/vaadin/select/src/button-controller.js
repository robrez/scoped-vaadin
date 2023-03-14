/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { SlotController } from '@scoped-vaadin/component-base/src/slot-controller.js';

/**
 * A controller to manage the value button element.
 */
export class ButtonController extends SlotController {
  constructor(host) {
    super(host, 'value', 'vaadin24-select-value-button', {
      initializer: (button, host) => {
        host._setFocusElement(button);
        host.ariaTarget = button;
        host.stateTarget = button;

        button.setAttribute('aria-haspopup', 'listbox');
      },
    });
  }
}
