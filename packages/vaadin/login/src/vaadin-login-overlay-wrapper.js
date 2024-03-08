/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { OverlayMixin } from '@scoped-vaadin/overlay/src/vaadin-overlay-mixin.js';
import { overlayStyles } from '@scoped-vaadin/overlay/src/vaadin-overlay-styles.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { loginOverlayWrapperStyles } from './vaadin-login-overlay-wrapper-styles.js';

registerStyles('vaadin24-login-overlay-wrapper', [overlayStyles, loginOverlayWrapperStyles], {
  moduleId: 'vaadin-login-overlay-wrapper-styles',
});

/**
 * An element used internally by `<vaadin24-login-overlay>`. Not intended to be used separately.
 *
 * @extends HTMLElement
 * @mixes DirMixin
 * @mixes OverlayMixin
 * @mixes ThemableMixin
 * @private
 */
class LoginOverlayWrapper extends OverlayMixin(DirMixin(ThemableMixin(PolymerElement))) {
  static get is() {
    return 'vaadin24-login-overlay-wrapper';
  }

  static get properties() {
    return {
      /**
       * Title of the application.
       */
      title: {
        type: String,
      },

      /**
       * Application description. Displayed under the title.
       */
      description: {
        type: String,
      },
    };
  }

  static get template() {
    return html`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <section part="card">
            <div part="brand">
              <slot name="title">
                <h1 part="title">[[title]]</h1>
              </slot>
              <p part="description">[[description]]</p>
            </div>
            <div part="form">
              <slot></slot>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

defineCustomElement(LoginOverlayWrapper);
