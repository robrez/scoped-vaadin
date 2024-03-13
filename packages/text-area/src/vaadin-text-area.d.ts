/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ResizeMixin } from '@scoped-vaadin/component-base/src/resize-mixin.js';
import { InputFieldMixin } from '@scoped-vaadin/field-base/src/input-field-mixin.js';
import { PatternMixin } from '@scoped-vaadin/field-base/src/pattern-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * Fired when the user commits a value change.
 */
export type TextAreaChangeEvent = Event & {
  target: TextArea;
};

/**
 * Fired when the `invalid` property changes.
 */
export type TextAreaInvalidChangedEvent = CustomEvent<{ value: boolean }>;

/**
 * Fired when the `value` property changes.
 */
export type TextAreaValueChangedEvent = CustomEvent<{ value: string }>;

/**
 * Fired whenever the field is validated.
 */
export type TextAreaValidatedEvent = CustomEvent<{ valid: boolean }>;

export interface TextAreaCustomEventMap {
  'invalid-changed': TextAreaInvalidChangedEvent;

  'value-changed': TextAreaValueChangedEvent;

  validated: TextAreaValidatedEvent;
}

export interface TextAreaEventMap extends HTMLElementEventMap, TextAreaCustomEventMap {
  change: TextAreaChangeEvent;
}

/**
 * `<vaadin23-text-area>` is a web component for multi-line text input.
 *
 * ```html
 * <vaadin23-text-area label="Comment"></vaadin23-text-area>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin23-text-area>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin23-text-area label="Description">
 *   <div slot="prefix">Details:</div>
 *   <div slot="suffix">The end!</div>
 * </vaadin23-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property                | Description                | Default
 * -------------------------------|----------------------------|---------
 * `--vaadin-field-default-width` | Default width of the field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * `<vaadin23-text-area>` provides the same set of shadow DOM parts and state attributes as `<vaadin23-text-field>`.
 * See [`<vaadin23-text-field>`](#/elements/vaadin-text-field) for the styling documentation.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {Event} input - Fired when the value is changed by the user: on every typing keystroke, and the value is cleared using the clear button.
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 */
declare class TextArea extends ResizeMixin(PatternMixin(InputFieldMixin(ThemableMixin(ElementMixin(HTMLElement))))) {
  /**
   * Maximum number of characters (in Unicode code points) that the user can enter.
   */
  maxlength: number | null | undefined;

  /**
   * Minimum number of characters (in Unicode code points) that the user can enter.
   */
  minlength: number | null | undefined;

  addEventListener<K extends keyof TextAreaEventMap>(
    type: K,
    listener: (this: TextArea, ev: TextAreaEventMap[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;

  removeEventListener<K extends keyof TextAreaEventMap>(
    type: K,
    listener: (this: TextArea, ev: TextAreaEventMap[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-text-area': TextArea;
  }
}

export { TextArea };
