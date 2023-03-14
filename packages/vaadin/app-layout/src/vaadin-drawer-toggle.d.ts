/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Button } from '@scoped-vaadin/button/src/vaadin-button.js';

/**
 * The Drawer Toggle component controls the drawer in App Layout component.
 *
 * ```
 * <vaadin24-app-layout>
 *   <vaadin24-drawer-toggle slot="navbar">Toggle drawer</vaadin24-drawer-toggle>
 * </vaadin24-app-layout>
 * ```
 */
declare class DrawerToggle extends Button {
  ariaLabel: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin24-drawer-toggle': DrawerToggle;
  }
}

export { DrawerToggle };
