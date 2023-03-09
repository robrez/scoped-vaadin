import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { MenuOverlayMixin } from '@scoped-vaadin/context-menu/src/vaadin-menu-overlay-mixin.js';
import { styles } from '@scoped-vaadin/context-menu/src/vaadin-menu-overlay-styles.js';
import { Overlay } from '@scoped-vaadin/overlay/src/vaadin-overlay.js';
import { registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-menu-bar-overlay', styles, { moduleId: 'vaadin-menu-bar-overlay-styles' });

/**
 * An element used internally by `<vaadin24-menu-bar>`. Not intended to be used separately.
 *
 * @extends Overlay
 * @mixes MenuOverlayMixin
 * @private
 */
class MenuBarOverlay extends MenuOverlayMixin(Overlay) {
  static get is() {
    return 'vaadin24-menu-bar-overlay';
  }
}

internalCustomElements.define(MenuBarOverlay.is, MenuBarOverlay);
