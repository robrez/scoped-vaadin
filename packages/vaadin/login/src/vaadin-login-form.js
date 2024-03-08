/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import '@scoped-vaadin/button/src/vaadin-button.js';
import '@scoped-vaadin/text-field/src/vaadin-text-field.js';
import '@scoped-vaadin/password-field/src/vaadin-password-field.js';
import './vaadin-login-form-wrapper.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { LoginFormMixin } from './vaadin-login-form-mixin.js';

/**
 * `<vaadin24-login-form>` is a Web Component providing an easy way to require users
 * to log in into an application. Note that component has no shadowRoot.
 *
 * ```
 * <vaadin24-login-form></vaadin24-login-form>
 * ```
 *
 * Component has to be accessible from the `document` layer in order to allow password managers to work properly with form values.
 * Using `<vaadin24-login-overlay>` allows to always attach the component to the document body.
 *
 * ### Styling
 *
 * The component doesn't have a shadowRoot, so the `<form>` and input fields can be styled from a global scope.
 * Use `<vaadin24-login-form-wrapper>` themable component to apply styles.
 *
 * The following shadow DOM parts of the `<vaadin24-login-form-wrapper>` are available for styling:
 *
 * Part name      | Description
 * ---------------|---------------------------------------------------------|
 * `form`         | Container for the entire component's content
 * `form-title`   | Title of the login form
 * `error-message`| Container for error message, contains error-message-title and error-message-description parts. Hidden by default.
 * `error-message-title`       | Container for error message title
 * `error-message-description` | Container for error message description
 * `footer`  | Container additional information text from `i18n` object
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * @fires {CustomEvent} disabled-changed - Fired when the `disabled` property changes.
 * @fires {CustomEvent} error-changed - Fired when the `error` property changes.
 * @fires {CustomEvent} forgot-password - Fired when user clicks on the "Forgot password" button.
 * @fires {CustomEvent} login - Fired when a user submits the login.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes LoginFormMixin
 */
class LoginForm extends LoginFormMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get template() {
    return html`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin24-login-form-wrapper id="vaadinLoginFormWrapper" theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" on-formdata="_onFormData" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin24-text-field
            name="username"
            label="[[i18n.form.username]]"
            error-message="[[i18n.errorMessage.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin24-text-field>

          <vaadin24-password-field
            name="password"
            label="[[i18n.form.password]]"
            error-message="[[i18n.errorMessage.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin24-password-field>
        </form>

        <vaadin24-button slot="submit" theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
          [[i18n.form.submit]]
        </vaadin24-button>

        <vaadin24-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin24-button>
      </vaadin24-login-form-wrapper>
    `;
  }

  static get is() {
    return 'vaadin24-login-form';
  }

  /**
   * @param {StampedTemplate} dom
   * @return {null}
   * @protected
   */
  _attachDom(dom) {
    this.appendChild(dom);
  }
}

defineCustomElement(LoginForm);

export { LoginForm };
