/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import type { Icon } from './vaadin-icon.js';
import type { IconSvgLiteral } from './vaadin-icon-svg.js';

/**
 * `<vaadin24-iconset>` is a Web Component for creating SVG icon collections.
 */
declare class Iconset extends ElementMixin(HTMLElement) {
  /**
   * Set of the `vaadin24-icon` instances in the DOM.
   */
  static attachedIcons(): Set<Icon>;

  /**
   * Returns an instance of the iconset by its name.
   */
  static getIconset(name: string): Iconset;

  /**
   * Register an iconset without adding to the DOM.
   */
  static register(name: string, size: number, template: HTMLTemplateElement): void;

  /**
   * Returns SVGTemplateResult for the `icon` ID matching `name` of the
   * iconset, or `nothing` literal if there is no matching icon found.
   */
  static getIconSvg(
    icon: string,
    name?: string,
  ): {
    preserveAspectRatio?: string | null;
    svg: IconSvgLiteral;
    size?: number;
    viewBox?: string | null;
  };

  /**
   * The name of the iconset. Every iconset is required to have its own unique name.
   * All the SVG icons in the iconset must have IDs conforming to its name.
   *
   * See also [`name`](#/elements/vaadin-icon#property-name) property of `vaadin24-icon`.
   */
  name: string;

  /**
   * The size of an individual icon. Note that icons must be square.
   *
   * When using `vaadin24-icon`, the size of the iconset will take precedence
   * over the size defined by the user to ensure correct appearance.
   */
  size: number;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-iconset': Iconset;
  }
}

export { Iconset };
