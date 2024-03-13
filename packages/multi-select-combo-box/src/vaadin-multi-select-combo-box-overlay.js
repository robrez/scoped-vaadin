import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ComboBoxOverlay } from '@scoped-vaadin/combo-box/src/vaadin-combo-box-overlay.js';
import { css, registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vaadin23-multi-select-combo-box-overlay',
  css`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }
  `,
  { moduleId: 'vaadin-multi-select-combo-box-overlay-styles' },
);

/**
 * An element used internally by `<vaadin23-multi-select-combo-box>`. Not intended to be used separately.
 *
 * @extends ComboBoxOverlay
 * @private
 */
class MultiSelectComboBoxOverlay extends ComboBoxOverlay {
  static get is() {
    return 'vaadin23-multi-select-combo-box-overlay';
  }
}

internalCustomElements.define(MultiSelectComboBoxOverlay.is, MultiSelectComboBoxOverlay);
