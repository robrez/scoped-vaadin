```bash
$ npm run test

> @robrez/scoped-vaadin-web-components@24.4.2-alpha.1 test
> web-test-runner

yarn.lock has changed, testing all packages

packages\avatar\test\avatar-polymer.test.js:

 🚧 404 network requests:
    - thisisnotavalidimagesource

packages\component-base\test\virtualizer-reorder-elements.test.js:

 ❌ reorder elements > focus > should tab through the elements in order
      AssertionError: expected 'item-13' to equal 'item-11'
      + expected - actual

      -item-13
      +item-11

      at n.<anonymous> (packages\component-base\test\virtualizer-reorder-elements.test.js:163:46)

packages\details\test\details-polymer.test.js:

 ❌ vaadin24-details > unique IDs > should set unique id on the content
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at n.<anonymous> (packages\details\test\details.common.js:219:45)

packages\grid\test\column-auto-width-polymer.test.js:

 🚧 Browser logs:
      TypeError: nativeRegistry.get.wenDefined is not a function
        at InternalCustomElementsRegistry.whenDefined (vendor-packages\internal-custom-elements-registry\index.js:32:31)
        at packages\grid\src\vaadin-grid-mixin.js:487:71
        at Array.map (<anonymous>)
        at Grid.recalculateColumnWidths (packages\grid\src\vaadin-grid-mixin.js:487:35)
        at Grid._columnTreeChanged (packages\grid\src\vaadin-grid-mixin.js:844:12)
        at Object.runMethodEffect [as fn] (node_modules\@polymer\polymer\lib\mixins\property-effects.js:1038:38)
        at runEffects (node_modules\@polymer\polymer\lib\mixins\property-effects.js:140:16)
        at Grid._propertiesChanged (node_modules\@polymer\polymer\lib\mixins\property-effects.js:1922:7)
        at Grid._flushProperties (node_modules\@polymer\polymer\lib\mixins\properties-changed.js:384:14)
        at Grid._invalidateProperties (node_modules\@polymer\polymer\lib\mixins\property-effects.js:1748:14)

 ❌ column auto-width > should have correct column widths for lazily defined columns
      Error: Uncaught TypeError: nativeRegistry.get.wenDefined is not a function (http://localhost:8000/packages/component-base/src/async.js:38)
        at D.onerror (..\..\..\C:\develop\vaadn\scoped-vaadin-24x\node_modules\@web\test-runner-mocha\dist\autorun.js:1:258618)

packages\grid\test\column-auto-width-lit.test.js:

 🚧 Browser logs:
      An error was thrown in a Promise outside a test. Did you forget to await a function or assertion?
      TypeError: nativeRegistry.get.wenDefined is not a function
        at InternalCustomElementsRegistry.whenDefined (vendor-packages\internal-custom-elements-registry\index.js:32:31)
        at packages\grid\src\vaadin-grid-mixin.js:487:71
        at Array.map (<anonymous>)
        at Grid.recalculateColumnWidths (packages\grid\src\vaadin-grid-mixin.js:487:35)
        at Grid._columnTreeChanged (packages\grid\src\vaadin-grid-mixin.js:844:12)
        at packages\component-base\src\polylit-mixin.js:272:25
        at Map.forEach (<anonymous>)
        at Grid.__runComplexObservers (packages\component-base\src\polylit-mixin.js:267:17)
        at Grid.updated (packages\component-base\src\polylit-mixin.js:221:14)
        at Grid._$didUpdate (node_modules\@lit\reactive-element\development\reactive-element.js:903:14)

 ❌ column auto-width > should have correct column widths for lazily defined columns
      AssertionError: expected 100 to be close to 71 +/- 5
        at packages\grid\test\column-auto-width.common.js:25:33
        at Array.forEach (<anonymous>)
        at expectColumnWidthsToBeOk (packages\grid\test\column-auto-width.common.js:23:20)
        at Ka.<anonymous> (packages\grid\test\column-auto-width.common.js:253:5)

packages\grid\test\keyboard-navigation-lit.test.js:

 ❌ keyboard navigation > interaction mode > should tab through the elements in order
      AssertionError: expected 14 to equal 12
      + expected - actual

      -14
      +12

      at n.<anonymous> (packages\grid\test\keyboard-navigation.common.js:2032:37)

packages\grid\test\keyboard-navigation-polymer.test.js:

 ❌ keyboard navigation > interaction mode > should tab through the elements in order
      AssertionError: expected 15 to equal 13
      + expected - actual

      -15
      +13

      at n.<anonymous> (packages\grid\test\keyboard-navigation.common.js:2032:37)

packages\icon\test\icon-font-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/icon/test/icon-font-lit.test.js?wtr-session-id=THXalzTup5o5TGSkKhbsk

 🚧 404 network requests:
    - packages/icon/vaadin-lit-icon.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information. 

packages\icon\test\icon-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/icon/test/icon-lit.test.js?wtr-session-id=N0JsB9LzUZi4V9EUYBqMG

 🚧 404 network requests:
    - packages/icon/vaadin-lit-icon.js
    - packages/icon/vaadin-lit-iconset.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

packages\icon\test\iconset-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/icon/test/iconset-lit.test.js?wtr-session-id=PC3Pzo-7cvKr28L5j_HHD

 🚧 404 network requests:
    - packages/icon/vaadin-lit-iconset.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

packages\icon\test\icon-polymer.test.js:

 🚧 Browser logs:
      Error: Error loading icon
        at packages\icon\src\vaadin-icon-mixin.js:275:25
        at async Icon.__srcChanged (packages\icon\src\vaadin-icon-mixin.js:281:27)

 🚧 404 network requests:
    - icon.svg

packages\integer-field\test\integer-field-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/integer-field/test/integer-field-lit.test.js?wtr-session-id=NTkvFBnYihgfTrC4i6sxh

 🚧 404 network requests:
    - packages/integer-field/src/vaadin-lit-integer-field.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

packages\integer-field\test\validation-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/integer-field/test/validation-lit.test.js?wtr-session-id=2Vlpe9dinY3L_exGXVB32     

 🚧 404 network requests:
    - packages/integer-field/src/vaadin-lit-integer-field.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

packages\integer-field\test\value-commit-lit.test.js:

 🚧 Browser logs:
      TypeError: Failed to fetch dynamically imported module: http://localhost:8000/packages/integer-field/test/value-commit-lit.test.js?wtr-session-id=3IBnRjMctzqgEq08f2w9K

 🚧 404 network requests:
    - packages/integer-field/src/vaadin-lit-integer-field.js

 ❌ Could not import your test module. Check the browser logs or open the browser in debug mode for more information.

packages\login\test\login-submit-polymer.test.js:

 🚧 404 network requests:
    - login-action?username=username&password=password
    - login-action?username=username&password=password&foo=bar&code=1234

packages\tabs\test\scroll.test.js:

 🚧 Browser logs:
      TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect')
        at Tabs._scrollForward (packages\tabs\src\vaadin-tabs-mixin.js:117:39)
        at HTMLDivElement.handler (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:183:26)
        at n.<anonymous> (packages\tabs\test\scroll.test.js:173:27)
      TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect')
        at Tabs._scrollBack (packages\tabs\src\vaadin-tabs-mixin.js:150:39)
        at HTMLDivElement.handler (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:183:26)
        at n.<anonymous> (packages\tabs\test\scroll.test.js:194:24)
      TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect')
        at Tabs._scrollForward (packages\tabs\src\vaadin-tabs-mixin.js:117:39)
        at HTMLDivElement.handler (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:183:26)
        at n.<anonymous> (packages\tabs\test\scroll.test.js:173:27)
      TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect')
        at Tabs._scrollBack (packages\tabs\src\vaadin-tabs-mixin.js:150:39)
        at HTMLDivElement.handler (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:183:26)
        at n.<anonymous> (packages\tabs\test\scroll.test.js:194:24)

 ❌ scrollable tabs > horizontal > ltr > should have displayed all the items fully when scrolled forward to the end via button
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at expectItemsInViewport (packages\tabs\test\scroll.test.js:109:72)
      at n.<anonymous> (packages\tabs\test\scroll.test.js:126:11)

 ❌ scrollable tabs > horizontal > ltr > should have displayed all the items fully when scrolled back to the start via button
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at expectItemsInViewport (packages\tabs\test\scroll.test.js:109:72)
      at n.<anonymous> (packages\tabs\test\scroll.test.js:151:11)

 ❌ scrollable tabs > horizontal > ltr > should not get stuck with wide tabs when scrolled forward to the end via button
      Error: Uncaught TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect') (http://localhost:8000/packages/tabs/src/vaadin-tabs-mixin.js:117)       
        at n.<anonymous> (packages\tabs\test\scroll.test.js:173:27)

 ❌ scrollable tabs > horizontal > ltr > should not get stuck with wide tabs when scrolled back to the start via button
      Error: Uncaught TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect') (http://localhost:8000/packages/tabs/src/vaadin-tabs-mixin.js:150)       
        at n.<anonymous> (packages\tabs\test\scroll.test.js:194:24)

 ❌ scrollable tabs > horizontal > rtl > should have displayed all the items fully when scrolled forward to the end via button
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at expectItemsInViewport (packages\tabs\test\scroll.test.js:109:72)
      at n.<anonymous> (packages\tabs\test\scroll.test.js:126:11)

 ❌ scrollable tabs > horizontal > rtl > should have displayed all the items fully when scrolled back to the start via button
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at expectItemsInViewport (packages\tabs\test\scroll.test.js:109:72)
      at n.<anonymous> (packages\tabs\test\scroll.test.js:151:11)

 ❌ scrollable tabs > horizontal > rtl > should not get stuck with wide tabs when scrolled forward to the end via button
      Error: Uncaught TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect') (http://localhost:8000/packages/tabs/src/vaadin-tabs-mixin.js:117)       
        at n.<anonymous> (packages\tabs\test\scroll.test.js:173:27)

 ❌ scrollable tabs > horizontal > rtl > should not get stuck with wide tabs when scrolled back to the start via button
      Error: Uncaught TypeError: Cannot read properties of undefined (reading 'getBoundingClientRect') (http://localhost:8000/packages/tabs/src/vaadin-tabs-mixin.js:150)       
        at n.<anonymous> (packages\tabs\test\scroll.test.js:194:24)

packages\tabs\test\tabs.test.js:

 ❌ tabs > Overflow horizontal ltr > small viewport > should update overflow on item resize
      AssertionError: expected true to be false
      + expected - actual

      -true
      +false

      at n.<anonymous> (packages\tabs\test\tabs.test.js:189:56)

 ❌ tabs > Overflow horizontal rtl > small viewport > should update overflow on item resize
      AssertionError: expected true to be false
      + expected - actual

      -true
      +false

      at n.<anonymous> (packages\tabs\test\tabs.test.js:189:56)

 ❌ flex equal width tabs > should not cut content
      AssertionError: expected 109 to be above 124
      + expected - actual

      -109
      +124

      at n.<anonymous> (packages\tabs\test\tabs.test.js:277:45)

packages\vaadin-themable-mixin\test\post-finalize-styles-polymer.test.ts:

 ❌ TypeError: nativeRegistry.get.wenDefined is not a function
      at InternalCustomElementsRegistry.whenDefined (vendor-packages\internal-custom-elements-registry\index.js:32:31)
      at n.<anonymous> (packages\vaadin-themable-mixin\test\post-finalize-styles.common.ts:36:38)

packages\vaadin-themable-mixin\test\post-finalize-styles-lit.test.ts:

 ❌ TypeError: nativeRegistry.get.wenDefined is not a function 
      at InternalCustomElementsRegistry.whenDefined (vendor-packages\internal-custom-elements-registry\index.js:32:31)
      at n.<anonymous> (packages\vaadin-themable-mixin\test\post-finalize-styles.common.ts:36:38)

Chromium: |██████████████████████████████| 435/435 test files | 11597 passed, 45 failed, 76 skipped

```