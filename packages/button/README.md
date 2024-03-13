# @scoped-vaadin/button

This component is based on [@vaadin/button](https://www.npmjs.com/package/@vaadin/button)

An accessible and customizable button that allows users to perform actions.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/button)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/button)](https://www.npmjs.com/package/@scoped-vaadin/button)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin23-button theme="primary">Primary</vaadin23-button>
<vaadin23-button theme="secondary">Secondary</vaadin23-button>
<vaadin23-button theme="tertiary">Tertiary</vaadin23-button>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/button/screenshot.png" width="296" alt="Screenshot of vaadin-button">](https://vaadin.com/docs/latest/components/button)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/button
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/button';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/button/vaadin-button.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/button/theme/material/vaadin-button.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/button/theme/lumo/vaadin-button.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/button/src/vaadin-button.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
