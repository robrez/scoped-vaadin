# @scoped-vaadin/tabs

This component is based on [@vaadin/tabs](https://www.npmjs.com/package/@vaadin/tabs)

A web component for organizing and grouping content into sections.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/tabs)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/tabs)](https://www.npmjs.com/package/@scoped-vaadin/tabs)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin23-tabs selected="3">
  <vaadin23-tab>Page 1</vaadin23-tab>
  <vaadin23-tab>Page 2</vaadin23-tab>
  <vaadin23-tab>Page 3</vaadin23-tab>
  <vaadin23-tab>Page 4</vaadin23-tab>
</vaadin23-tabs>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/tabs/screenshot.png" width="355" alt="Screenshot of vaadin-tabs">](https://vaadin.com/docs/latest/components/tabs)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/tabs
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/tabs';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/tabs/vaadin-tabs.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/tabs/theme/material/vaadin-tabs.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/tabs/theme/lumo/vaadin-tabs.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/tabs/src/vaadin-tabs.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
