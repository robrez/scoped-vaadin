import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/button/src/vaadin-button.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { LoginMixin } from './vaadin-login-mixin.js';

/**
 * An element used internally by `<vaadin23-login-form>`. Not intended to be used separately.
 *
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes LoginMixin
 * @private
 */
class LoginFormWrapper extends LoginMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin23-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin23-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `;
  }

  static get is() {
    return 'vaadin23-login-form-wrapper';
  }

  _forgotPassword() {
    this.dispatchEvent(new CustomEvent('forgot-password'));
  }
}

internalCustomElements.define(LoginFormWrapper.is, LoginFormWrapper);

export { LoginFormWrapper };
