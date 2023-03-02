# Problems and Decisions

Keeping track of some problems and decisions made to resolve them

## Optimization

Currently, the code transformation goes through numerous search-and-replace operations. I'm not going to get too bent-out-of-shape about tryng to optimize the build process because it runs pretty quickly

## Style module ids?

Style module IDs are not currently being rewritten

```js
registerStyles("vaadin23-combo-box", [], { moduleId: "lumo-combo-box" });

registerStyles("vaadin23-combo-box-overlay", [], {
  moduleId: "vaadin-combo-box-overlay-styles",
});
```

This should probably change

It seems that this this could be bad in the event that official vaadin elements are on the same page as the components vended here. I havent scrutinized the styles very closely to know whether there may be catastrophic conflicts. Need to diff styles to learn more. Idealistically, I'd like for the styles to dedupe but that may not be possible.

## Non-custom-elements

Some code creates unregistered elements, for exmample:

```js
const cellContent = document.createElement("vaadin-grid-cell-content");
this._placeholder = document.createComment("vaadin-overlay-placeholder");
```

This code is not modified, and I'm thinking should _not_ be modified

## Dynamic slots / ids

Some code generates IDs and dynamic slot names, for exampe:

```js
this._uniqueId = `vaadin-tooltip-${generateUniqueId()}`;

const contentId = (this._contentIndex = this._contentIndex + 1 || 0);
const slotName = `vaadin-grid-cell-content-${contentId}`;
```

This code is not modified, and I'm thinking should _not_ be modified

## CSS Property Names

Some CSS propertyNames, like eventNames, may contain element tag names. The goal is to preserve CSS property names and to not pollute them w/ version numbers

- No: `--_vaadin23-time-picker-overlay-default-width`
- Yes: `--_vaadin-time-picker-overlay-default-width`

## JS querySelector

Some code tries to search for items by tagName... this is done in conjunction w/ other possible selectors. For example, in date-picker-light:

```js
const cssSelector =
  "vaadin-text-field,iron-input,paper-input,.paper-input-input,.input";
```

Currently, this will be replace to:

```js
const cssSelector =
  "vaadin23-text-field,iron-input,paper-input,.paper-input-input,.input";
```

But maybe this would be better:

```js
const cssSelector =
  "vaadin-text-field,vaadin23-text-field,iron-input,paper-input,.paper-input-input,.input";
```

## Package Exclusions

Decided that some packages ought to be excluded from transpilation and _not_ vended via `@scoped-vaadin`

- vaadin-development-mode-detector
- vaadin-usage-statistics

## Other sneaky items

Got lucky here but something like this could easily break

```js
    _findHostGrid() {
      let el = this;
      // Custom elements extending grid must have a specific localName
      while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
        el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
      }
      return el || undefined;
    }
```
