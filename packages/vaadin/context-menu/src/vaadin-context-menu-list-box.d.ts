/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ListMixin } from '@scoped-vaadin/a11y-base/src/list-mixin.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { DirMixin } from '@scoped-vaadin/component-base/src/dir-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * An element used internally by `<vaadin24-context-menu>`. Not intended to be used separately.
 */
declare class ContextMenuListBox extends ListMixin(DirMixin(ThemableMixin(ControllerMixin(HTMLElement)))) {}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-context-menu-list-box': ContextMenuListBox;
  }
}

export { ContextMenuListBox };
