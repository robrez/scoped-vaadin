import { contextMenuListBox } from '@scoped-vaadin/context-menu/theme/lumo/vaadin-context-menu-list-box-styles.js';
import { listBox } from '@scoped-vaadin/list-box/theme/lumo/vaadin-list-box-styles.js';
import { registerStyles } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles('vaadin24-menu-bar-list-box', [listBox, contextMenuListBox], { moduleId: 'lumo-menu-bar-list-box' });
