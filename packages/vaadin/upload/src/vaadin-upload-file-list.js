/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-upload-file.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { UploadFileListMixin } from './vaadin-upload-file-list-mixin.js';

/**
 * An element used internally by `<vaadin24-upload>`. Not intended to be used separately.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes UploadFileListMixin
 * @private
 */
class UploadFileList extends UploadFileListMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return 'vaadin24-upload-file-list';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `;
  }
}

defineCustomElement(UploadFileList);

export { UploadFileList };
