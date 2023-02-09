# @scoped-vaadin/web-components

We love [@vaadin/web-components](https://github.com/vaadin/web-components), but have some challenges within a large enterprise. Different teams, invitably, are using different versions of these components and these cannot be deduplicated.

The [Scoped Custom Element Registry](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md) proposal aims to solve this problem. The community has created some functional user-land solutions which are based on this proposal:

- [lit](https://www.npmjs.com/package/@lit-labs/scoped-registry-mixin)
- [open-wc](https://www.npmjs.com/package/@open-wc/scoped-elements)

These solutions will not currently work for Vaadin components because:

- They are still Polymer-based. A Polymer-based mixin could probably be formulated; however,
- Some Vaadin components teleport to document.body. For example,
  - `vaadin-combobox-overlay`
  - `vaadin-dialog-overlay`

For these reasons, the repository has the following goals:

- Introduce `index.js` as the bare module entry-point
- Separate [side-effects](https://open-wc.org/guides/developing-components/publishing/#do-export-side-effects-separately) from exports
- Register alternative tag names which contain Vaadin's _major_ version identifier
  - Registrations are performed _conditionally_, with the intent of _not_ crashing the app
  - This still allows multiple versions of a given component to exist, but they should at least be compatible
