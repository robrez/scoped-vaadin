import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Overlay } from '@scoped-vaadin/overlay/src/vaadin-overlay.js';
import { PositionMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-position-mixin.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin24-date-picker-overlay',
  css`
    [part='overlay'] {
      display: flex;
      flex: auto;
    }

    [part~='content'] {
      flex: auto;
    }
  `,
  {
    moduleId: 'vaadin-date-picker-overlay-styles',
  },
);

let memoizedTemplate;

/**
 * An element used internally by `<vaadin24-date-picker>`. Not intended to be used separately.
 *
 * @extends Overlay
 * @private
 */
class DatePickerOverlay extends PositionMixin(Overlay) {
  static get is() {
    return 'vaadin24-date-picker-overlay';
  }

  static get template() {
    if (!memoizedTemplate) {
      memoizedTemplate = super.template.cloneNode(true);
      memoizedTemplate.content.querySelector('[part~="overlay"]').removeAttribute('tabindex');
    }

    return memoizedTemplate;
  }
}

internalCustomElements.define(DatePickerOverlay.is, DatePickerOverlay);
