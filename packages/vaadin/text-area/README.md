# @scoped-vaadin/text-area

This component is based on [@vaadin/text-area](https://www.npmjs.com/package/@vaadin/text-area)

An input field component for multi-line text input.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/text-area)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/text-area)](https://www.npmjs.com/package/@scoped-vaadin/text-area)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin23-text-area label="Comment"></vaadin23-text-area>
```

## Installation

Install the component:

```sh
npm i @scoped-vaadin/text-area
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/text-area';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/text-area/vaadin-text-area.js) of the package uses Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/text-area/theme/material/vaadin-text-area.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/text-area/theme/lumo/vaadin-text-area.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/text-area/src/vaadin-text-area.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
