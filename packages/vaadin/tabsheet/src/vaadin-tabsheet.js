import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import './vaadin-tabsheet-scroller.js';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ControllerMixin } from '@scoped-vaadin/component-base/src/controller-mixin.js';
import { ElementMixin } from '@scoped-vaadin/component-base/src/element-mixin.js';
import { OverflowController } from '@scoped-vaadin/component-base/src/overflow-controller.js';
import { SlotController } from '@scoped-vaadin/component-base/src/slot-controller.js';
import { generateUniqueId } from '@scoped-vaadin/component-base/src/unique-id-utils.js';
import { DelegateStateMixin } from '@scoped-vaadin/field-base/src/delegate-state-mixin.js';
import { Tabs } from '@scoped-vaadin/tabs/src/vaadin-tabs.js';
import { ThemableMixin } from '@scoped-vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

/**
 * @private
 * A controller which observes the <vaadin23-tabs> slotted to the tabs slot.
 */
class TabsSlotController extends SlotController {
  constructor(host) {
    super(host, 'tabs');
    this.__tabsItemsChangedListener = this.__tabsItemsChangedListener.bind(this);
    this.__tabsSelectedChangedListener = this.__tabsSelectedChangedListener.bind(this);
  }

  /** @private */
  __tabsItemsChangedListener() {
    this.host._setItems(this.tabs.items);
  }

  /** @private */
  __tabsSelectedChangedListener() {
    this.host.selected = this.tabs.selected;
  }

  initCustomNode(tabs) {
    if (!(tabs instanceof Tabs)) {
      throw Error('The "tabs" slot of a <vaadin23-tabsheet> must only contain a <vaadin23-tabs> element!');
    }
    this.tabs = tabs;
    tabs.addEventListener('items-changed', this.__tabsItemsChangedListener);
    tabs.addEventListener('selected-changed', this.__tabsSelectedChangedListener);
    this.host.__tabs = tabs;
    this.host.stateTarget = tabs;
    this.__tabsItemsChangedListener();
  }

  teardownNode(tabs) {
    this.tabs = null;
    tabs.removeEventListener('items-changed', this.__tabsItemsChangedListener);
    tabs.removeEventListener('selected-changed', this.__tabsSelectedChangedListener);
    this.host.__tabs = null;
    this.host._setItems([]);
    this.host.stateTarget = undefined;
  }
}

/**
 * `<vaadin23-tabsheet>` is a Web Component for organizing and grouping content
 * into scrollable panels. The panels can be switched between by using tabs.
 *
 * ```
 *  <vaadin23-tabsheet>
 *    <div slot="prefix">Prefix</div>
 *    <div slot="suffix">Suffix</div>
 *
 *    <vaadin23-tabs slot="tabs">
 *      <vaadin23-tab id="tab-1">Tab 1</vaadin23-tab>
 *      <vaadin23-tab id="tab-2">Tab 2</vaadin23-tab>
 *      <vaadin23-tab id="tab-3">Tab 3</vaadin23-tab>
 *    </vaadin23-tabs>
 *
 *    <div tab="tab-1">Panel 1</div>
 *    <div tab="tab-2">Panel 2</div>
 *    <div tab="tab-3">Panel 3</div>
 *  </vaadin23-tabsheet>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * --------- | ---------------
 * `tabs-container`    | The container for the slotted prefix, tabs and suffix
 * `content`    | The container for the slotted panels
 *
 * The following state attributes are available for styling:
 *
 * Attribute         | Description
 * ------------------|-------------
 * `loading` | Set when a tab without associated content is selected
 * `overflow`   | Set to `top`, `bottom`, `start`, `end`, all of them, or none.
 *
 * See [Styling Components](hhttps://vaadin.com/docs/latest/components/ds-resources/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} items-changed - Fired when the `items` property changes.
 * @fires {CustomEvent} selected-changed - Fired when the `selected` property changes.
 *
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes ControllerMixin
 * @mises DelegateStateMixin
 */
class TabSheet extends ControllerMixin(DelegateStateMixin(ElementMixin(ThemableMixin(PolymerElement)))) {
  static get template() {
    return html`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin23-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin23-tabsheet-scroller>
    `;
  }

  static get is() {
    return 'vaadin23-tabsheet';
  }

  static get properties() {
    return {
      /**
       * The list of `<vaadin23-tab>`s from which a selection can be made.
       * It is populated from the elements passed inside the slotted
       * `<vaadin23-tabs>`, and updated dynamically when adding or removing items.
       *
       * Note: unlike `<vaadin23-combo-box>`, this property is read-only.
       * @type {!Array<!Tab> | undefined}
       */
      items: {
        type: Array,
        readOnly: true,
        notify: true,
      },

      /**
       * The index of the selected tab.
       */
      selected: {
        value: 0,
        type: Number,
        notify: true,
      },

      /**
       * The slotted <vaadin23-tabs> element.
       */
      __tabs: {
        type: Object,
      },

      /**
       * The panel elements.
       */
      __panels: {
        type: Array,
      },
    };
  }

  /** @override */
  static get delegateProps() {
    return ['selected'];
  }

  /** @override */
  static get delegateAttrs() {
    return ['theme'];
  }

  /** @protected */
  ready() {
    super.ready();

    this.__overflowController = new OverflowController(this, this.shadowRoot.querySelector('[part="content"]'));
    this.addController(this.__overflowController);

    this._tabsSlotController = new TabsSlotController(this);
    this.addController(this._tabsSlotController);

    // Observe the panels slot for nodes. Set the assigned element nodes as the __panels array.
    const panelSlot = this.shadowRoot.querySelector('#panel-slot');
    this.__panelsObserver = new FlattenedNodesObserver(panelSlot, () => {
      this.__panels = Array.from(panelSlot.assignedNodes({ flatten: true })).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE,
      );
    });
  }

  static get observers() {
    return ['__itemsOrPanelsChanged(items, __panels)', '__selectedTabItemChanged(selected, items, __panels)'];
  }

  /**
   * An observer which applies the necessary roles and ARIA attributes
   * to associate the tab elements with the panels.
   * @private
   */
  __itemsOrPanelsChanged(items, panels) {
    if (!items || !panels) {
      return;
    }

    items.forEach((tabItem) => {
      const panel = panels.find((panel) => panel.getAttribute('tab') === tabItem.id);
      if (panel) {
        panel.role = 'tabpanel';
        panel.id = panel.id || `tabsheet-panel-${generateUniqueId()}`;
        panel.setAttribute('aria-labelledby', tabItem.id);

        tabItem.setAttribute('aria-controls', panel.id);
      }
    });
  }

  /**
   * An observer which toggles the visibility of the panels based on the selected tab.
   * @private
   */
  __selectedTabItemChanged(selected, items, panels) {
    if (!items || !panels || selected === undefined) {
      return;
    }

    const content = this.shadowRoot.querySelector('[part="content"]');

    const selectedTab = items[selected];
    const selectedTabId = selectedTab ? selectedTab.id : '';
    const selectedPanel = panels.find((panel) => panel.getAttribute('tab') === selectedTabId);

    // Mark loading state if a selected panel is not found.
    this.toggleAttribute('loading', !selectedPanel);

    const hasOneVisiblePanel = panels.filter((panel) => !panel.hidden).length === 1;

    if (selectedPanel) {
      // A selected panel is found, remove the loading state fallback height.
      content.style.minHeight = '';
    } else if (hasOneVisiblePanel) {
      // Make sure the empty content has a fallback height in loading state..
      content.style.minHeight = `${content.offsetHeight}px`;
    }

    // Hide all panels and show only the selected panel.
    panels.forEach((panel) => {
      panel.hidden = panel !== selectedPanel;
    });
  }
}

internalCustomElements.define(TabSheet.is, TabSheet);

export { TabSheet };
