/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import type { IconSvgLiteral } from './vaadin-icon-svg.js';

/**
 * `<vaadin23-icon>` is a Web Component for displaying SVG icons.
 *
 * ### Icon property
 *
 * The `<vaadin23-icon>` component is designed to be used as a drop-in replacement for `<iron-icon>`.
 * For example, you can use it with `vaadin-icons` like this:
 *
 * ```html
 * <vaadin23-icon icon="vaadin:angle-down"></vaadin23-icon>
 * ```
 *
 * Alternatively, you can also pick one of the Lumo icons:
 *
 * ```html
 * <vaadin23-icon icon="lumo:user"></vaadin23-icon>
 * ```
 *
 * ### Custom SVG icon
 *
 * Alternatively, instead of selecting an icon from an iconset by name, you can pass any custom `svg`
 * literal using the [`svg`](#/elements/vaadin-icon#property-svg) property. In this case you can also
 * define the size of the SVG `viewBox` using the [`size`](#/elements/vaadin-icon#property-size) property:
 *
 * ```js
 * import { html, svg } from 'lit';
 *
 * // in your component
 * render() {
 *   const svgIcon = svg`<path d="M13 4v2l-5 5-5-5v-2l5 5z"></path>`;
 *   return html`
 *     <vaadin23-icon
 *       .svg="${svgIcon}"
 *       size="16"
 *     ></vaadin23-icon>
 *   `;
 * }
 * ```
 */
declare class Icon extends ThemableMixin(ElementMixin(ControllerMixin(HTMLElement))) {
  /**
   * The name of the icon to use. The name should be of the form:
   * `iconset_name:icon_name`. When using `vaadin-icons` it is possible
   * to omit the first part and only use `icon_name` as a value.
   *
   * Setting the `icon` property updates the `svg` and `size` based on the
   * values provided by the corresponding `vaadin23-iconset` element.
   *
   * See also [`name`](#/elements/vaadin-iconset#property-name) property of `vaadin23-iconset`.
   */
  icon: string | null;

  /**
   * The SVG icon wrapped in a Lit template literal.
   */
  svg: IconSvgLiteral | null;

  /**
   * The size of an icon, used to set the `viewBox` attribute.
   */
  size: number;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-icon': Icon;
  }
}

export { Icon };
