/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { OverlayMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-mixin.js';
import { PositionMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-position-mixin.js';
import { overlayStyles } from '@scoped-vaadin/overlay/src/vaadin-overlay-styles.js';
import { css, registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

const selectOverlayStyles = css`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;

registerStyles('vaadin24-select-overlay', [overlayStyles, selectOverlayStyles], {
  moduleId: 'vaadin-select-overlay-styles',
});

/**
 * An element used internally by `<vaadin24-select>`. Not intended to be used separately.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes DirMixin
 * @mixes OverlayMixin
 * @mixes PositionMixin
 * @mixes ThemableMixin
 * @private
 */
export class SelectOverlay extends PositionMixin(OverlayMixin(DirMixin(ThemableMixin(PolymerElement)))) {
  static get is() {
    return 'vaadin24-select-overlay';
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

defineCustomElement(SelectOverlay);
