# @scoped-vaadin/app-layout

This component is based on [@vaadin/app-layout](https://www.npmjs.com/package/@vaadin/app-layout)

A web component for building common application layouts.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/app-layout)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/app-layout)](https://www.npmjs.com/package/@scoped-vaadin/app-layout)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin23-app-layout>
  <vaadin23-drawer-toggle slot="navbar touch-optimized"></vaadin23-drawer-toggle>
  <h3 slot="navbar touch-optimized">Application Name</h3>
  <vaadin23-tabs orientation="vertical" slot="drawer">
    <vaadin23-tab>
      <a href="/profile">
        <vaadin23-icon icon="lumo:user"></vaadin23-icon>
        Profile
      </a>
    </vaadin23-tab>
    <vaadin23-tab>
      <a href="/contact">
        <vaadin23-icon icon="lumo:phone"></vaadin23-icon>
        Contact
      </a>
    </vaadin23-tab>
  </vaadin23-tabs>
  <div>Page content</div>
</vaadin23-app-layout>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/app-layout/screenshot.png" width="900" alt="Screenshot of vaadin-app-layout">](https://vaadin.com/docs/latest/components/app-layout)

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/app-layout/screenshot-mobile.png" width="350" alt="Screenshot of vaadin-app-layout on mobile">](https://vaadin.com/docs/latest/components/app-layout)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/app-layout
```

Once installed, import the components in your application:

```js
import '@scoped-vaadin/app-layout';
import '@scoped-vaadin/app-layout/vaadin-drawer-toggle.js';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/app-layout/vaadin-app-layout.js) of the package uses the Lumo theme.

To use the Material theme, import the components from the `theme/material` folder:

```js
import '@scoped-vaadin/app-layout/theme/material/vaadin-app-layout.js';
import '@scoped-vaadin/app-layout/theme/material/vaadin-drawer-toggle.js';
```

You can also import the Lumo version of the components explicitly:

```js
import '@scoped-vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@scoped-vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
```

Finally, you can import the un-themed components from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/app-layout/src/vaadin-app-layout.js';
import '@scoped-vaadin/app-layout/src/vaadin-drawer-toggle.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
