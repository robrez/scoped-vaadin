import { internalCustomElements } from '@scoped-vaadin/internal-custom-elements-registry';
/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Scroller } from '@scoped-vaadin/scroller/src/vaadin-scroller.js';

/**
 * An element used internally by `<vaadin23-tabsheet>`. Not intended to be used separately.
 *
 * @extends Scroller
 * @private
 */
class TabsheetScroller extends Scroller {
  static get is() {
    return 'vaadin23-tabsheet-scroller';
  }
}

internalCustomElements.define(TabsheetScroller.is, TabsheetScroller);
