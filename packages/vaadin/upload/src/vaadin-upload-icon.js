import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * An element used internally by `<vaadin24-upload>`. Not intended to be used separately.
 *
 * @extends HTMLElement
 * @private
 */
class UploadIcon extends ThemableMixin(PolymerElement) {
  static get is() {
    return 'vaadin24-upload-icon';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `;
  }
}

internalCustomElements.define(UploadIcon.is, UploadIcon);

export { UploadIcon };