/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { OverlayClassMixin } from '@scoped-vaadin/component-base/src/overlay-class-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { LoginMixin } from './vaadin-login-mixin.js';
export { LoginI18n } from './vaadin-login-mixin.js';

/**
 * Fired when the `description` property changes.
 */
export type LoginOverlayDescriptionChangedEvent = CustomEvent<{ value: string }>;

/**
 * Fired when the `disabled` property changes.
 */
export type LoginOverlayDisabledChangedEvent = CustomEvent<{ value: boolean }>;

/**
 * Fired when the `error` property changes.
 */
export type LoginOverlayErrorChangedEvent = CustomEvent<{ value: boolean }>;

/**
 * Fired when a user submits the login.
 */
export type LoginOverlayLoginEvent = CustomEvent<{ username: string; password: string }>;

export interface LoginOverlayCustomEventMap {
  'description-changed': LoginOverlayDescriptionChangedEvent;

  'disabled-changed': LoginOverlayDisabledChangedEvent;

  'error-changed': LoginOverlayErrorChangedEvent;

  'forgot-password': Event;

  login: LoginOverlayLoginEvent;
}

export interface LoginOverlayEventMap extends HTMLElementEventMap, LoginOverlayCustomEventMap {}

/**
 * `<vaadin24-login-overlay>` is a wrapper of the `<vaadin24-login-form>` which opens a login form in an overlay and
 * having an additional `brand` part for application title and description. Using `<vaadin24-login-overlay>` allows
 * password managers to work with login form.
 *
 * ```
 * <vaadin24-login-overlay opened></vaadin24-login-overlay>
 * ```
 *
 * ### Styling
 *
 * The component doesn't have a shadowRoot, so the `<form>` and input fields can be styled from a global scope.
 * Use `<vaadin24-login-overlay-wrapper>` and `<vaadin24-login-form-wrapper>` to apply styles.
 *
 * The following Shadow DOM parts of the `<vaadin24-login-overlay-wrapper>` are available for styling:
 *
 * Part name       | Description
 * ----------------|---------------------------------------------------------|
 * `card`          | Container for the entire component's content
 * `brand`         | Container for application title and description
 * `form`          | Container for the `<vaadin24-login-form>` component
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * See [`<vaadin24-login-form>`](#/elements/vaadin-login-form)
 * documentation for  `<vaadin24-login-form-wrapper>` stylable parts.
 *
 * @fires {CustomEvent} description-changed - Fired when the `description` property changes.
 * @fires {CustomEvent} disabled-changed - Fired when the `disabled` property changes.
 * @fires {CustomEvent} error-changed - Fired when the `error` property changes.
 * @fires {CustomEvent} forgot-password - Fired when user clicks on the "Forgot password" button.
 * @fires {CustomEvent} login - Fired when a user submits the login.
 */
declare class LoginOverlay extends LoginMixin(OverlayClassMixin(ElementMixin(ThemableMixin(HTMLElement)))) {
  /**
   * Defines the application description
   */
  description: string;

  /**
   * True if the overlay is currently displayed.
   */
  opened: boolean;

  /**
   * Defines the application title
   */
  title: string;

  addEventListener<K extends keyof LoginOverlayEventMap>(
    type: K,
    listener: (this: LoginOverlay, ev: LoginOverlayEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof LoginOverlayEventMap>(
    type: K,
    listener: (this: LoginOverlay, ev: LoginOverlayEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-login-overlay': LoginOverlay;
  }
}

export { LoginOverlay };
