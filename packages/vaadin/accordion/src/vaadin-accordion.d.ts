/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { KeyboardDirectionMixin } from '@scoped-vaadin/component-base/src/keyboard-direction-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import type { AccordionPanel } from './vaadin-accordion-panel.js';

/**
 * Fired when the `items` property changes.
 */
export type AccordionItemsChangedEvent = CustomEvent<{ value: AccordionPanel[] }>;

/**
 * Fired when the `opened` property changes.
 */
export type AccordionOpenedChangedEvent = CustomEvent<{ value: number | null }>;

export interface AccordionCustomEventMap {
  'items-changed': AccordionItemsChangedEvent;

  'opened-changed': AccordionOpenedChangedEvent;
}

export type AccordionEventMap = AccordionCustomEventMap & HTMLElementEventMap;

/**
 * `<vaadin23-accordion>` is a Web Component implementing accordion widget —
 * a vertically stacked set of expandable panels. The component should be
 * used as a wrapper for two or more `<vaadin23-accordion-panel>` components.
 *
 * Panel headings function as controls that enable users to open (expand)
 * or hide (collapse) their associated sections of content. The user can
 * toggle panels by mouse click, Enter and Space keys.
 *
 * Only one panel can be opened at a time, opening a new one forces
 * previous panel to close and hide its content.
 *
 * ```
 * <vaadin23-accordion>
 *   <vaadin23-accordion-panel>
 *     <div slot="summary">Panel 1</div>
 *     This panel is opened, so the text is visible by default.
 *   </vaadin23-accordion-panel>
 *   <vaadin23-accordion-panel>
 *     <div slot="summary">Panel 2</div>
 *     After opening this panel, the first one becomes closed.
 *   </vaadin23-accordion-panel>
 * </vaadin23-accordion>
 * ```
 *
 * ### Styling
 *
 * See the [`<vaadin23-accordion-panel>`](#/elements/vaadin-accordion-panel)
 * documentation for the available state attributes and stylable shadow parts.
 *
 * **Note:** You can apply the theme to `<vaadin23-accordion>` component itself,
 * especially by using the following CSS selector:
 *
 * ```
 * :host ::slotted(vaadin-accordion-panel) {
 *   margin-bottom: 5px;
 * }
 * ```
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {CustomEvent} items-changed - Fired when the `items` property changes.
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 */
declare class Accordion extends KeyboardDirectionMixin(ElementMixin(ThemableMixin(HTMLElement))) {
  /**
   * The index of currently opened panel. First panel is opened by
   * default. Only one panel can be opened at the same time.
   * Setting null or undefined closes all the accordion panels.
   */
  opened: number | null;

  /**
   * The list of `<vaadin23-accordion-panel>` child elements.
   * It is populated from the elements passed to the light DOM,
   * and updated dynamically when adding or removing panels.
   */
  readonly items: AccordionPanel[];

  addEventListener<K extends keyof AccordionEventMap>(
    type: K,
    listener: (this: Accordion, ev: AccordionEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof AccordionEventMap>(
    type: K,
    listener: (this: Accordion, ev: AccordionEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-accordion': Accordion;
  }
}

export { Accordion };
