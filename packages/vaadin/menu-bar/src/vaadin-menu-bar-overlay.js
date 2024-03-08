/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { MenuOverlayMixin } from '@scoped-vaadin/context-menu/src/vaadin-menu-overlay-mixin.js';
import { styles } from '@scoped-vaadin/context-menu/src/vaadin-menu-overlay-styles.js';
import { OverlayMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-mixin.js';
import { overlayStyles } from '@scoped-vaadin/overlay/src/vaadin-overlay-styles.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-menu-bar-overlay', [overlayStyles, styles], {
  moduleId: 'vaadin-menu-bar-overlay-styles',
});

/**
 * An element used internally by `<vaadin24-menu-bar>`. Not intended to be used separately.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes DirMixin
 * @mixes MenuOverlayMixin
 * @mixes OverlayMixin
 * @mixes ThemableMixin
 * @protected
 */
export class MenuBarOverlay extends MenuOverlayMixin(OverlayMixin(DirMixin(ThemableMixin(PolymerElement)))) {
  static get is() {
    return 'vaadin24-menu-bar-overlay';
  }

  static get template() {
    return html`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

defineCustomElement(MenuBarOverlay);
