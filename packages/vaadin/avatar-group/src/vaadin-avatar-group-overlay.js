import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Overlay } from '@scoped-vaadin/overlay/src/vaadin-overlay.js';
import { PositionMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-position-mixin.js';

/**
 * An element used internally by `<vaadin24-avatar-group>`. Not intended to be used separately.
 *
 * @extends Overlay
 * @private
 */
class AvatarGroupOverlay extends PositionMixin(Overlay) {
  static get is() {
    return 'vaadin24-avatar-group-overlay';
  }
}

internalCustomElements.define(AvatarGroupOverlay.is, AvatarGroupOverlay);
