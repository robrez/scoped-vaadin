/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { OverlayMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-mixin.js';
import { PositionMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-position-mixin.js';
import { overlayStyles } from '@scoped-vaadin/overlay/src/vaadin-overlay-styles.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-avatar-group-overlay', [overlayStyles], {
  moduleId: 'vaadin-avatar-group-overlay-styles',
});

/**
 * An element used internally by `<vaadin24-avatar-group>`. Not intended to be used separately.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes PositionMixin
 * @mixes OverlayMixin
 * @mixes DirMixin
 * @mixes ThemableMixin
 * @private
 */
class AvatarGroupOverlay extends PositionMixin(OverlayMixin(DirMixin(ThemableMixin(PolymerElement)))) {
  static get is() {
    return 'vaadin24-avatar-group-overlay';
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

defineCustomElement(AvatarGroupOverlay);
