```bash
$ npm run test

> @robrez/scoped-vaadin-web-components@24.4.2-alpha.1 test
> web-test-runner

yarn.lock has changed, testing all packages


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