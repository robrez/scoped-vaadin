/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { Constructor } from '@open-wc/dedupe-mixin';
import type { ControllerMixinClass } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import type { DelegateFocusMixinClass } from '@scoped-vaadin/component-base/src/delegate-focus-mixin.js';
import type { DelegateStateMixinClass } from '@scoped-vaadin/component-base/src/delegate-state-mixin.js';
import type { DisabledMixinClass } from '@scoped-vaadin/component-base/src/disabled-mixin.js';
import type { FocusMixinClass } from '@scoped-vaadin/component-base/src/focus-mixin.js';
import type { KeyboardMixinClass } from '@scoped-vaadin/component-base/src/keyboard-mixin.js';
import type { FieldMixinClass } from '@scoped-vaadin/field-base/src/field-mixin.js';
import type { InputConstraintsMixinClass } from '@scoped-vaadin/field-base/src/input-constraints-mixin.js';
import type { InputControlMixinClass } from '@scoped-vaadin/field-base/src/input-control-mixin.js';
import type { InputFieldMixinClass } from '@scoped-vaadin/field-base/src/input-field-mixin.js';
import type { InputMixinClass } from '@scoped-vaadin/field-base/src/input-mixin.js';
import type { LabelMixinClass } from '@scoped-vaadin/field-base/src/label-mixin.js';
import type { SlotStylesMixinClass } from '@scoped-vaadin/field-base/src/slot-styles-mixin.js';
import type { ValidateMixinClass } from '@scoped-vaadin/field-base/src/validate-mixin.js';

/**
 * A mixin providing common text field functionality.
 */
export declare function TextFieldMixin<T extends Constructor<HTMLElement>>(
  base: T,
): Constructor<ControllerMixinClass> &
  Constructor<DelegateFocusMixinClass> &
  Constructor<DelegateStateMixinClass> &
  Constructor<DisabledMixinClass> &
  Constructor<FieldMixinClass> &
  Constructor<FocusMixinClass> &
  Constructor<InputConstraintsMixinClass> &
  Constructor<InputControlMixinClass> &
  Constructor<InputFieldMixinClass> &
  Constructor<InputMixinClass> &
  Constructor<KeyboardMixinClass> &
  Constructor<LabelMixinClass> &
  Constructor<SlotStylesMixinClass> &
  Constructor<TexFieldMixinClass> &
  Constructor<ValidateMixinClass> &
  T;

export declare class TexFieldMixinClass {
  /**
   * Maximum number of characters (in Unicode code points) that the user can enter.
   */
  maxlength: number | null | undefined;

  /**
   * Minimum number of characters (in Unicode code points) that the user can enter.
   */
  minlength: number | null | undefined;

  /**
   * A regular expression that the value is checked against.
   * The pattern must match the entire value, not just some subset.
   */
  pattern: string;
}
