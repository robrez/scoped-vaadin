# @scoped-vaadin/dialog

This component is based on [@vaadin/dialog](https://www.npmjs.com/package/@vaadin/dialog)

A web component for presenting information and user interface elements in an overlay.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/dialog)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/dialog)](https://www.npmjs.com/package/@scoped-vaadin/dialog)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-dialog opened></vaadin24-dialog>

<script>
  const dialog = document.querySelector('vaadin24-dialog');
  dialog.renderer = function (root, dialog) {
    root.textContent = 'Sample dialog';
  };
</script>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/main/packages/dialog/screenshot.png" width="264" alt="Screenshot of vaadin-dialog">](https://vaadin.com/docs/latest/components/dialog)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/dialog
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/dialog';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/dialog/vaadin-dialog.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/dialog/theme/material/vaadin-dialog.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/dialog/theme/lumo/vaadin-dialog.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/dialog/src/vaadin-dialog.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
