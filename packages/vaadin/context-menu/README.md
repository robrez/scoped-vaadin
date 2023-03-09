# @scoped-vaadin/context-menu

This component is based on [@vaadin/context-menu](https://www.npmjs.com/package/@vaadin/context-menu)

A web component that can be attached to any component to display a context menu.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/context-menu)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/context-menu)](https://www.npmjs.com/package/@scoped-vaadin/context-menu)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-context-menu>
  <span>Open a context menu with <b>right click</b> or with <b>long touch.</b></span>
</vaadin24-context-menu>

<script>
  const contextMenu = document.querySelector('vaadin24-context-menu');
  contextMenu.renderer = function (root) {
    let listBox = root.firstElementChild;
    // Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
    if (listBox) {
      listBox.innerHTML = '';
    } else {
      listBox = document.createElement('vaadin24-list-box');
      root.appendChild(listBox);
    }

    ['First', 'Second', 'Third'].forEach(function (name) {
      const item = document.createElement('vaadin24-item');
      item.textContent = name + ' menu item';
      listBox.appendChild(item);
    });
  };
</script>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/context-menu/screenshot.png" width="493" alt="Screenshot of vaadin-context-menu">](https://vaadin.com/docs/latest/components/context-menu)

**Note:** [`<vaadin24-list-box>`](https://github.com/vaadin/vaadin-list-box) component used in the above example should be installed and imported separately.

## Installation

Install the component:

```sh
npm i @scoped-vaadin/context-menu
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/context-menu';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/context-menu/vaadin-context-menu.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/context-menu/theme/material/vaadin-context-menu.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/context-menu/theme/lumo/vaadin-context-menu.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/context-menu/src/vaadin-context-menu.js';
```

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
