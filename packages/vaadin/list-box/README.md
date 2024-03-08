# @scoped-vaadin/list-box

This component is based on [@vaadin/list-box](https://www.npmjs.com/package/@vaadin/list-box)

A web component for selecting one or more values from a scrollable list of items.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/list-box)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/list-box)](https://www.npmjs.com/package/@scoped-vaadin/list-box)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-list-box selected="2">
  <b>Select an list-box</b>
  <vaadin24-list-box>list-box one</vaadin24-list-box>
  <vaadin24-list-box>list-box two</vaadin24-list-box>
  <hr />
  <vaadin24-list-box>list-box three</vaadin24-list-box>
  <vaadin24-list-box>list-box four</vaadin24-list-box>
</vaadin24-list-box>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/main/packages/list-box/screenshot.png" width="150" alt="Screenshot of vaadin-list-box">](https://vaadin.com/docs/latest/components/list-box)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/list-box
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/list-box';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/list-box/vaadin-list-box.js) of the package uses Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/list-box/theme/material/vaadin-list-box.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/list-box/theme/lumo/vaadin-list-box.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/list-box/src/vaadin-list-box.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
