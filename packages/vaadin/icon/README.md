# @scoped-vaadin/icon

This component is based on [@vaadin/icon](https://www.npmjs.com/package/@vaadin/icon)

A web component for displaying SVG icons.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/ds/foundation/icons)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/icon)](https://www.npmjs.com/package/@scoped-vaadin/icon)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-icon name="vaadin:user"></vaadin24-icon>
```

## Installation

Install the component:

```sh
npm i @scoped-vaadin/icon
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/icon';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/icon/vaadin-icon.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/icon/theme/material/vaadin-icon.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/icon/theme/lumo/vaadin-icon.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/icon/src/vaadin-icon.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
