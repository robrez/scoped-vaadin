/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ResizeMixin } from '@scoped-vaadin/component-base/src/resize-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export type FormLayoutLabelsPosition = 'aside' | 'top';

export type FormLayoutResponsiveStep = {
  minWidth?: string | 0;
  columns: number;
  labelsPosition?: FormLayoutLabelsPosition;
};

/**
 * `<vaadin23-form-layout>` is a Web Component providing configurable responsive
 * layout for form elements.
 *
 * ```html
 * <vaadin23-form-layout>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </vaadin23-form-item>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </vaadin23-form-item>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">Email</label>
 *     <input class="full-width" value="jane.doe@example.com">
 *   </vaadin23-form-item>
 *
 * </vaadin23-form-layout>
 * ```
 *
 * It supports any child elements as layout items.
 *
 * By default, it makes a layout of two columns if the element width is equal or
 * wider than 40em, and a single column layout otherwise.
 *
 * The number of columns and the responsive behavior are customizable with
 * the `responsiveSteps` property.
 *
 * ### Spanning Items on Multiple Columns
 *
 * You can use `colspan` attribute on the items.
 * In the example below, the first text field spans on two columns:
 *
 * ```html
 * <vaadin23-form-layout>
 *
 *   <vaadin23-form-item colspan="2">
 *     <label slot="label">Address</label>
 *     <input class="full-width">
 *   </vaadin23-form-item>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </vaadin23-form-item>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </vaadin23-form-item>
 *
 * </vaadin23-form-layout>
 * ```
 *
 * ### Explicit New Row
 *
 * Use the `<br>` line break element to wrap the items on a new row:
 *
 * ```html
 * <vaadin23-form-layout>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">Email</label>
 *     <input class="full-width">
 *   </vaadin23-form-item>
 *
 *   <br>
 *
 *   <vaadin23-form-item>
 *     <label slot="label">Confirm Email</label>
 *     <input class="full-width">
 *   </vaadin23-form-item>
 *
 * </vaadin23-form-layout>
 * ```
 *
 * ### CSS Properties Reference
 *
 * The following custom CSS properties are available on the `<vaadin23-form-layout>`
 * element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-form-layout-column-spacing` | Length of the spacing between columns | `2em`
 */
declare class FormLayout extends ResizeMixin(ElementMixin(ThemableMixin(HTMLElement))) {
  /**
   * Allows specifying a responsive behavior with the number of columns
   * and the label position depending on the layout width.
   *
   * Format: array of objects, each object defines one responsive step
   * with `minWidth` CSS length, `columns` number, and optional
   * `labelsPosition` string of `"aside"` or `"top"`. At least one item is required.
   *
   * #### Examples
   *
   * ```javascript
   * formLayout.responsiveSteps = [{columns: 1}];
   * // The layout is always a single column, labels aside.
   * ```
   *
   * ```javascript
   * formLayout.responsiveSteps = [
   *   {minWidth: 0, columns: 1},
   *   {minWidth: '40em', columns: 2}
   * ];
   * // Sets two responsive steps:
   * // 1. When the layout width is < 40em, one column, labels aside.
   * // 2. Width >= 40em, two columns, labels aside.
   * ```
   *
   * ```javascript
   * formLayout.responsiveSteps = [
   *   {minWidth: 0, columns: 1, labelsPosition: 'top'},
   *   {minWidth: '20em', columns: 1},
   *   {minWidth: '40em', columns: 2}
   * ];
   * // Default value. Three responsive steps:
   * // 1. Width < 20em, one column, labels on top.
   * // 2. 20em <= width < 40em, one column, labels aside.
   * // 3. Width >= 40em, two columns, labels aside.
   * ```
   */
  responsiveSteps: FormLayoutResponsiveStep[];

  /**
   * Set custom CSS property values and update the layout.
   *
   * @deprecated Since Vaadin 23, `updateStyles()` is deprecated.
   * Use the native element.style.setProperty API to set custom CSS property values.
   */
  updateStyles(properties?: { [key: string]: string }): void;

  /**
   * Update the layout.
   */
  protected _updateLayout(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-form-layout': FormLayout;
  }
}

export { FormLayout };
