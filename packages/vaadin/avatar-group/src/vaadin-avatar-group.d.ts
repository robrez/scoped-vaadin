/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { AvatarI18n } from '@scoped-vaadin/avatar/src/vaadin-avatar.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { ResizeMixin } from '@scoped-vaadin/component-base/src/resize-mixin.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

export { AvatarI18n };

export interface AvatarGroupI18n extends AvatarI18n {
  activeUsers: {
    one: string;
    many: string;
  };
  joined: string;
  left: string;
}

export interface AvatarGroupItem {
  name?: string;
  abbr?: string;
  img?: string;
  colorIndex?: number;
}

/**
 * `<vaadin23-avatar-group>` is a Web Component providing avatar group displaying functionality.
 *
 * To create the avatar group, first add the component to the page:
 *
 * ```
 * <vaadin23-avatar-group></vaadin23-avatar-group>
 * ```
 *
 * And then use [`items`](#/elements/vaadin-avatar-group#property-items) property to initialize the structure:
 *
 * ```
 * document.querySelector('vaadin23-avatar-group').items = [
 *   {name: 'John Doe'},
 *   {abbr: 'AB'}
 * ];
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name   | Description
 * ----------- | ---------------
 * `container` | The container element
 * `avatar`    | Individual avatars
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * ### Internal components
 *
 * In addition to `<vaadin23-avatar-group>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin23-avatar-group-list-box>` - has the same API as [`<vaadin23-list-box>`](#/elements/vaadin-list-box).
 * - `<vaadin23-avatar-group-overlay>` - has the same API as [`<vaadin23-overlay>`](#/elements/vaadin-overlay).
 */
declare class AvatarGroup extends ResizeMixin(ElementMixin(ThemableMixin(HTMLElement))) {
  readonly _avatars: HTMLElement[];

  /**
   * An array containing the items which will be stamped as avatars.
   *
   * The items objects allow to configure [`name`](#/elements/vaadin-avatar#property-name),
   * [`abbr`](#/elements/vaadin-avatar#property-abbr), [`img`](#/elements/vaadin-avatar#property-img)
   * and [`colorIndex`](#/elements/vaadin-avatar#property-colorIndex) properties on the
   * stamped avatars.
   *
   * #### Example
   *
   * ```js
   * group.items = [
   *   {
   *     name: 'User name',
   *     img: 'url-to-image.png'
   *   },
   *   {
   *     abbr: 'JD',
   *     colorIndex: 1
   *   },
   * ];
   * ```
   */
  items: AvatarGroupItem[] | undefined;

  /**
   * The maximum number of avatars to display. By default, all the avatars are displayed.
   * When _maxItemsVisible_ is set, the overflowing avatars are grouped into one avatar with
   * a dropdown. Setting 0 or 1 has no effect so there are always at least two avatars visible.
   * @attr {number} max-items-visible
   */
  maxItemsVisible: number | null | undefined;

  /**
   * The object used to localize this component.
   * To change the default localization, replace the entire
   * _i18n_ object or just the property you want to modify.
   *
   * The object has the following JSON structure and default values:
   * ```
   * {
   *   // Translation of the anonymous user avatar tooltip.
   *   anonymous: 'anonymous',
   *   // Translation of the avatar group accessible label.
   *   // {count} is replaced with the actual count of users.
   *   activeUsers: {
   *     one: 'Currently one active user',
   *     many: 'Currently {count} active users'
   *   },
   *   // Screen reader announcement when user joins group.
   *   // {user} is replaced with the name or abbreviation.
   *   // When neither is set, "anonymous" is used instead.
   *   joined: '{user} joined',
   *   // Screen reader announcement when user leaves group.
   *   // {user} is replaced with the name or abbreviation.
   *   // When neither is set, "anonymous" is used instead.
   *   left: '{user} left'
   * }
   * ```
   */
  i18n: AvatarGroupI18n;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin23-avatar-group': AvatarGroup;
  }
}

export { AvatarGroup };
