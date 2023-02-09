/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import type { IconSvgLiteral } from './vaadin-icon-svg.js';

/**
 * `<vaadin23-iconset>` is a Web Component for creating SVG icon collections.
 */
declare class Iconset extends ElementMixin(HTMLElement) {
  /**
   * Create an instance of the iconset.
   */
  static getIconset(name: string): Iconset;

  /**
   * The name of the iconset. Every iconset is required to have its own unique name.
   * All the SVG icons in the iconset must have IDs conforming to its name.
   *
   * See also [`name`](#/elements/vaadin-icon#property-name) property of `vaadin23-icon`.
   */
  name: string;

  /**
   * The size of an individual icon. Note that icons must be square.
   *
   * When using `vaadin23-icon`, the size of the iconset will take precedence
   * over the size defined by the user to ensure correct appearance.
   */
  size: number;

  /**
   * Produce SVGTemplateResult for the element matching `name` in this
   * iconset, or `undefined` if there is no matching element.
   */
  applyIcon(name: string): { svg: IconSvgLiteral; size: number; viewBox: string | null };
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-iconset': Iconset;
  }
}

export { Iconset };
