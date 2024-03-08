# @scoped-vaadin/checkbox

This component is based on [@vaadin/checkbox](https://www.npmjs.com/package/@vaadin/checkbox)

An input field representing a binary choice.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/checkbox)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/checkbox)](https://www.npmjs.com/package/@scoped-vaadin/checkbox)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-checkbox label="Checked" checked></vaadin24-checkbox>
<vaadin24-checkbox label="Unchecked"></vaadin24-checkbox>
<vaadin24-checkbox label="Indeterminate" indeterminate></vaadin24-checkbox>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/main/packages/checkbox/screenshot.png" width="400" alt="Screenshot of vaadin-checkbox">](https://vaadin.com/docs/latest/components/checkbox)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/checkbox
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/checkbox';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/checkbox/vaadin-checkbox.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/checkbox/theme/material/vaadin-checkbox.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/checkbox/theme/lumo/vaadin-checkbox.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/checkbox/src/vaadin-checkbox.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
