# Notes on Failing Tests

```bash

packages\date-picker\test\keyboard-input.test.js:

 ❌ keyboard > default parser > should parse short year with a custom reference date and ambiguous year difference
      AssertionError: expected 2051 to equal 1951
      + expected - actual

      -2051
      +1951

      at checkMonthAndDayOffset (packages\date-picker\test\keyboard-input.test.js:576:39)
      at async n.<anonymous> (packages\date-picker\test\keyboard-input.test.js:561:7)

packages\date-picker\test\validation.test.js:

 ❌ validation > custom validator > should validate correctly with custom validator
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at n.<anonymous> (packages\date-picker\test\validation.test.js:435:42)

packages\email-field\test\email-field.test.js:

 ❌ email-field > default > invalid email addresses > should treat email@example as invalid
      AssertionError: expected false to be true
      + expected - actual

      -false
      +true

      at n.<anonymous> (packages\email-field\test\email-field.test.js:57:43)

packages\field-base\test\pattern-mixin.test.js:

 ❌ PatternMixin + Polymer > pattern > should fail validation when value mismatches JavaScript-specific regular expression
      AssertionError: expected true to be false
      + expected - actual

      -true
      +false

      at n.<anonymous> (packages\field-base\test\pattern-mixin.test.js:171:44)

 ❌ PatternMixin + Lit > pattern > should fail validation when value mismatches JavaScript-specific regular expression
      AssertionError: expected true to be false
      + expected - actual

      -true
      +false

      at n.<anonymous> (packages\field-base\test\pattern-mixin.test.js:171:44)

packages\login\test\login-overlay.test.js:

 🚧 Browser logs:
      TypeError: Cannot read properties of undefined (reading 'content')
        at get template (packages\login\src\vaadin-login-overlay-wrapper.js:96:33)
        at LoginOverlayWrapper._prepareTemplate (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:387:70)
        at LoginOverlayWrapper._finalizeClass (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:381:12)
        at LoginOverlayWrapper.finalize (node_modules\@polymer\polymer\lib\mixins\properties-mixin.js:145:13)
        at LoginOverlayWrapper.finalize (packages\component-base\src\dir-mixin.js:67:13)
        at LoginOverlayWrapper.finalize (packages\vaadin-themable-mixin\vaadin-themable-mixin.js:206:13)
        at LoginOverlayWrapper._initializeProperties (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:590:24)
        at new PropertiesChanged (node_modules\@polymer\polymer\lib\mixins\properties-changed.js:191:12)
        at new PropertyEffects (node_modules\@polymer\polymer\lib\mixins\property-effects.js:1327:7)
        at new PolymerElement (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:562:7)

 ❌ Error: Uncaught TypeError: Cannot read properties of undefined (reading 'content') (http://localhost:8000/packages/login/src/va
adin-login-overlay-wrapper.js:96) 
      at LoginOverlay._stampTemplate (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:556:59)
      at LoginOverlay._stampTemplate (node_modules\@polymer\polymer\lib\mixins\property-effects.js:2789:23)
      at LoginOverlay.ready (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:696:26)
      at LoginOverlay.ready (packages\login\src\vaadin-login-overlay.js:123:11)
      at LoginOverlay._enableProperties (node_modules\@polymer\polymer\lib\mixins\properties-changed.js:362:14)
      at LoginOverlay.connectedCallback (node_modules\@polymer\polymer\lib\mixins\properties-mixin.js:222:11)
      at LoginOverlay.connectedCallback (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:685:13)
      at LoginOverlay.connectedCallback (packages\component-base\src\dir-mixin.js:76:13)
      at LoginOverlay.connectedCallback (packages\login\src\vaadin-login-overlay.js:130:11)

 ❌ title and description > should display title and description set via attributes or properties
      TypeError: Cannot read properties of null (reading 'textContent')
        at n.<anonymous> (packages\login\test\login-overlay.test.js:153:26)

 ❌ title and description > should update title and description when property updated
      TypeError: Cannot read properties of null (reading 'textContent')
        at n.<anonymous> (packages\login\test\login-overlay.test.js:161:26)

 ❌ title and description > should update title and description when i18n.header updated
      TypeError: Cannot read properties of null (reading 'textContent')
        at n.<anonymous> (packages\login\test\login-overlay.test.js:169:26)

packages\login\test\login-submit.test.js:

 🚧 Browser logs:
      TypeError: Cannot read properties of undefined (reading 'content')
        at get template (packages\login\src\vaadin-login-overlay-wrapper.js:96:33)
        at LoginOverlayWrapper._prepareTemplate (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:387:70)
        at LoginOverlayWrapper._finalizeClass (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:381:12)
        at LoginOverlayWrapper.finalize (node_modules\@polymer\polymer\lib\mixins\properties-mixin.js:145:13)
        at LoginOverlayWrapper.finalize (packages\component-base\src\dir-mixin.js:67:13)
        at LoginOverlayWrapper.finalize (packages\vaadin-themable-mixin\vaadin-themable-mixin.js:206:13)
        at LoginOverlayWrapper._initializeProperties (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:590:24)
        at new PropertiesChanged (node_modules\@polymer\polymer\lib\mixins\properties-changed.js:191:12)
        at new PropertyEffects (node_modules\@polymer\polymer\lib\mixins\property-effects.js:1327:7)
        at new PolymerElement (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:562:7)

 🚧 404 network requests:
    - login-action?username=username&password=password

 ❌ Error: Uncaught TypeError: Cannot read properties of undefined (reading 'content') (http://localhost:8000/packages/login/src/va
adin-login-overlay-wrapper.js:96) 
      at LoginOverlay._stampTemplate (node_modules\@polymer\polymer\lib\mixins\template-stamp.js:556:59)
      at LoginOverlay._stampTemplate (node_modules\@polymer\polymer\lib\mixins\property-effects.js:2789:23)
      at LoginOverlay.ready (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:696:26)
      at LoginOverlay.ready (packages\login\src\vaadin-login-overlay.js:123:11)
      at LoginOverlay._enableProperties (node_modules\@polymer\polymer\lib\mixins\properties-changed.js:362:14)
      at LoginOverlay.connectedCallback (node_modules\@polymer\polymer\lib\mixins\properties-mixin.js:222:11)
      at LoginOverlay.connectedCallback (node_modules\@polymer\polymer\lib\mixins\element-mixin.js:685:13)
      at LoginOverlay.connectedCallback (packages\component-base\src\dir-mixin.js:76:13)
      at LoginOverlay.connectedCallback (packages\login\src\vaadin-login-overlay.js:130:11)

packages\menu-bar\test\menu-bar.test.js:

 ❌ item components > should set position and z-index on the item component to allow clicks
      AssertionError: expected 'static' to equal 'relative'
      + expected - actual

      -static
      +relative

      at Ka.<anonymous> (packages\menu-bar\test\menu-bar.test.js:718:31)

packages\tooltip\test\tooltip-timers.test.js:

 ❌ timers > warmup and cooldown > should not open on mouseleave during the initial warm up hover delay
      AssertionError: expected true to be falsy
        at n.<anonymous> (packages\tooltip\test\tooltip-timers.test.js:527:43)

Chromium: |██████████████████████████████| 265/265 test files | 6624 passed, 12 failed, 40 skipped

```

Re: validators -- these fail because of an underlying raised exception

```js
      /**
       * Returns true if the current input value satisfies all constraints (if any).
       * @return {boolean}
       */
      checkValidity() {
        if (this.inputElement && this._hasValidConstraints(this.constructor.constraints.map((c) => this[c]))) {
          return this.inputElement.checkValidity();  // exception here on invalid re string
        }
        return !this.invalid;
      }
```
