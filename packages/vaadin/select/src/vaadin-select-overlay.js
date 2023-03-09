import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Overlay } from '@scoped-vaadin/overlay/src/vaadin-overlay.js';
import { PositionMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-position-mixin.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin24-select-overlay',
  css`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
  { moduleId: 'vaadin-select-overlay-styles' },
);

/**
 * An element used internally by `<vaadin24-select>`. Not intended to be used separately.
 *
 * @extends Overlay
 * @protected
 */
class SelectOverlay extends PositionMixin(Overlay) {
  static get is() {
    return 'vaadin24-select-overlay';
  }

  requestContentUpdate() {
    super.requestContentUpdate();

    if (this.owner) {
      // Ensure menuElement reference is correct.
      const menuElement = this._getMenuElement();
      this.owner._assignMenuElement(menuElement);
    }
  }

  /** @protected */
  _getMenuElement() {
    return Array.from(this.children).find((el) => el.localName !== 'style');
  }
}

internalCustomElements.define(SelectOverlay.is, SelectOverlay);
