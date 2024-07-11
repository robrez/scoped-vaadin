All of the failed tests are from `tabs` and seem to pertain to life-cycle problems relating to vaadin test helpers / polymer / ResizeObserver

```bash

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

Chromium: |██████████████████████████████| 429/429 test files | 11631 passed, 11 failed, 76 skipped

Finished running tests in 515.4s with 11 failed tests.
```