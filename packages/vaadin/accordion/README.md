# @scoped-vaadin/accordion

This component is based on [@vaadin/accordion](https://www.npmjs.com/package/@vaadin/accordion)

A web component for displaying a vertically stacked set of expandable panels.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/accordion)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/accordion)](https://www.npmjs.com/package/@scoped-vaadin/accordion)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-accordion>
  <vaadin24-accordion-panel theme="filled">
    <vaadin24-accordion-heading slot="summary">Accordion Panel 1</vaadin24-accordion-heading>
    <div>Accordion is a set of expandable sections.</div>
  </vaadin24-accordion-panel>
  <vaadin24-accordion-panel theme="filled">
    <vaadin24-accordion-heading slot="summary">Accordion Panel 2</vaadin24-accordion-heading>
    <div>Only one accordion panel can be opened.</div>
  </vaadin24-accordion-panel>
</vaadin24-accordion>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/main/packages/accordion/screenshot.png" alt="Screenshot of vaadin-accordion" width="900">](https://vaadin.com/docs/latest/components/accordion)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/accordion
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/accordion';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/accordion/vaadin-accordion.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/accordion/theme/material/vaadin-accordion.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/accordion/theme/lumo/vaadin-accordion.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/accordion/src/vaadin-accordion.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
