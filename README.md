# @scoped-vaadin/web-components

We love [@vaadin/web-components](https://github.com/vaadin/web-components), but have some challenges within a large enterprise. Different teams, invitably, are using different versions of these components and these cannot be deduplicated.

## Challenges

The [Scoped Custom Element Registry](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md) proposal aims to solve this problem. The community has created some functional user-land solutions which are based on this proposal:

- [lit](https://www.npmjs.com/package/@lit-labs/scoped-registry-mixin)
- [open-wc](https://www.npmjs.com/package/@open-wc/scoped-elements)

An expirimental Polymer-based mixin has been created here: [robrez/scoped-registry-polymer](https://github.com/robrez/scoped-registry-polymer)

However, there are a few finer details within vaadin-components which may elude scoped-registries.

- Some Vaadin components teleport to a different `DocumentOrShadowRoot`, for example to document.body
  - `vaadin-combobox-overlay`
  - `vaadin-dialog-overlay`
- Some Vaadin components dynamically create elements, for example
  - `document.createElement('vaadin-text-field')`
  - This would need to be created via the shadowRoot containing a scoped registry
- Would need to come up with some meta-data around which elements should be scoped on a per-package-level
  - This could be done relatively easily, but would need to happen

## Goals

For these reasons note above, the repository has the following goals:

### Immediate

- Register alternative tag names which contain Vaadin's _major_ version identifier
  - Registrations are performed _conditionally_, with the intent of _not_ crashing the app
  - This still allows multiple versions of a given component to exist, but they should at least be compatible

### Near term

- Introduce `index.js` as the bare module entry-point
- Separate [side-effects](https://open-wc.org/guides/developing-components/publishing/#do-export-side-effects-separately) from exports

### Long term

- Create scoped registries in each shadow root

## Usage

A typical vaadin usage would look like this:

```js
npm i @vaadin/button
```

```js
import '@vaadin/button';

render() {
  return html`<vaadin-button></vaadin-button>`;
}
```

`@scoped-vaadin` elements, instead, have this pattern:

```js
npm i @scoped-vaadin/button
```

```js
import '@scoped-vaadin/button';

render() {
  return html`<vaadin24-button></vaadin24-button>`;
}
```

## Version Matrix

This repository is not mature. Ideally, versions here would align 1:1 w/ the underlying vaadin versions. There are unfilfilled goals herein; It is likely that changes need to take place when there may not be any underlying vaadin changes.

Below, you can find which underlying vaadin version is used

| local version     | vaadin version |
| ----------------- | -------------- |
| `v24.8.6-alpha.1` | `24.8.6`       |
| `v24.3.7-alpha.1` | `24.3.7`       |
| `v24.0.0-alpha.1` | `24.0.0`       |
| `v23.0.1`         | `~23.3.8`      |
| `v23.0.0`         | `~23.3.8`      |
| `v0.2.0`          | `~23.3.8`      |
| `v0.1.0`          | `^23.3.7`      |
