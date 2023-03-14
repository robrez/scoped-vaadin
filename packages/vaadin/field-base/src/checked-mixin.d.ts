/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import type { Constructor } from '@open-wc/dedupe-mixin';
import type { DelegateStateMixinClass } from '@scoped-vaadin/component-base/src/delegate-state-mixin.js';
import type { DisabledMixinClass } from '@scoped-vaadin/component-base/src/disabled-mixin.js';
import type { InputMixinClass } from './input-mixin.js';

/**
 * A mixin to manage the checked state.
 */
export declare function CheckedMixin<T extends Constructor<object>>(
  base: T,
): Constructor<CheckedMixinClass> &
  Constructor<DelegateStateMixinClass> &
  Constructor<DisabledMixinClass> &
  Constructor<InputMixinClass> &
  T;

export declare class CheckedMixinClass {
  /**
   * True if the element is checked.
   */
  checked: boolean;

  protected _toggleChecked(checked: boolean): void;
}
