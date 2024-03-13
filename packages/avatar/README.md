# @scoped-vaadin/avatar

This component is based on [@vaadin/avatar](https://www.npmjs.com/package/@vaadin/avatar)

A web component for graphical representation of an object or entity, for example a person or an organization.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/avatar)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/avatar)](https://www.npmjs.com/package/@scoped-vaadin/avatar)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin23-avatar></vaadin23-avatar>
<vaadin23-avatar name="Jens Jansson"></vaadin23-avatar>
<vaadin23-avatar abbr="SK"></vaadin23-avatar>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/avatar/screenshot.png" width="132" alt="Screenshot of vaadin-avatar">](https://vaadin.com/docs/latest/components/avatar)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/avatar
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/avatar';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/avatar/vaadin-avatar.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/avatar/theme/material/vaadin-avatar.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/avatar/theme/lumo/vaadin-avatar.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/avatar/src/vaadin-avatar.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
