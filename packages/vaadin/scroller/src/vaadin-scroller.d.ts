/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { FocusMixin } from '@scoped-vaadin/component-base/src/focus-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * `<vaadin24-scroller>` provides a simple way to enable scrolling when its content is overflowing.
 *
 * ```
 * <vaadin24-scroller>
 *   <div>Content</div>
 * </vaadin24-scroller>
 * ```
 * The following attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------| -----------
 * `focus-ring` | Set when the element is focused using the keyboard.
 * `focused`    | Set when the element is focused.
 * `overflow`   | Set to `top`, `bottom`, `start`, `end`, all of them, or none.
 */
declare class Scroller extends FocusMixin(ThemableMixin(ElementMixin(ControllerMixin(HTMLElement)))) {
  /**
   * This property indicates the scroll direction. Supported values are `vertical`, `horizontal`, `none`.
   * When `scrollDirection` is undefined scrollbars will be shown in both directions.
   * @attr {string} scroll-direction
   */
  scrollDirection: 'horizontal' | 'none' | 'vertical' | undefined;

  /**
   * Indicates whether the element can be focused and where it participates in sequential keyboard navigation.
   */
  tabindex: number;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-scroller': Scroller;
  }
}

export { Scroller };
