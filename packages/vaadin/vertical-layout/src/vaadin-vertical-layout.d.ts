/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * `<vaadin23-vertical-layout>` provides a simple way to vertically align your HTML elements.
 *
 * ```
 * <vaadin23-vertical-layout>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </vaadin23-vertical-layout>
 * ```
 *
 * ### Built-in Theme Variations
 *
 * `<vaadin23-vertical-layout>` supports the following theme variations:
 *
 * Theme variation | Description
 * ---|---
 * `theme="margin"` | Applies the default amount of CSS margin for the host element (specified by the theme)
 * `theme="padding"` | Applies the default amount of CSS padding for the host element (specified by the theme)
 * `theme="spacing"` | Applies the default amount of CSS margin between items (specified by the theme)
 */
declare class VerticalLayout extends ThemableMixin(ElementMixin(HTMLElement)) {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-vertical-layout': VerticalLayout;
  }
}

export { VerticalLayout };
