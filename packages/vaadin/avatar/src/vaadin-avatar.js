/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-avatar-icons.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { defineCustomElement } from '@scoped-vaadin/component-base/src/define.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { TooltipController } from '@scoped-vaadin/component-base/src/tooltip-controller.js';
import { registerStyles, ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { AvatarMixin } from './vaadin-avatar-mixin.js';
import { avatarStyles } from './vaadin-avatar-styles.js';

registerStyles('vaadin24-avatar', avatarStyles, { moduleId: 'vaadin-avatar-styles' });

/**
 * `<vaadin24-avatar>` is a Web Component providing avatar displaying functionality.
 *
 * ```html
 * <vaadin24-avatar img="avatars/avatar-1.jpg"></vaadin24-avatar>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * --------- | ---------------
 * `abbr`    | The abbreviation element
 * `icon`    | The icon element
 *
 * The following state attributes are available for styling:
 *
 * Attribute         | Description
 * ------------------|-------------
 * `focus-ring`      | Set when the avatar is focused using the keyboard.
 * `focused`         | Set when the avatar is focused.
 * `has-color-index` | Set when the avatar has `colorIndex` and the corresponding custom CSS property exists.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/styling-components) documentation.
 *
 * @customElement
 * @extends HTMLElement
 * @mixes AvatarMixin
 * @mixes ControllerMixin
 * @mixes ElementMixin
 * @mixes ThemableMixin
 */
class Avatar extends AvatarMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))) {
  static get template() {
    return html`
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `;
  }

  static get is() {
    return 'vaadin24-avatar';
  }

  /** @protected */
  ready() {
    super.ready();

    this._tooltipController = new TooltipController(this);
    this.addController(this._tooltipController);
  }
}

defineCustomElement(Avatar);

export { Avatar };
