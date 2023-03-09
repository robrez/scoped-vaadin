# @scoped-vaadin/grid

This component is based on [@vaadin/grid](https://www.npmjs.com/package/@vaadin/grid)

A web component for showing tabular data.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/grid)

[![npm version](https://badgen.net/npm/v/@scoped-vaadin/grid)](https://www.npmjs.com/package/@scoped-vaadin/grid)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

```html
<vaadin24-grid theme="row-dividers" column-reordering-allowed multi-sort>
  <vaadin24-grid-selection-column auto-select frozen></vaadin24-grid-selection-column>
  <vaadin24-grid-sort-column width="9em" path="firstName"></vaadin24-grid-sort-column>
  <vaadin24-grid-sort-column width="9em" path="lastName"></vaadin24-grid-sort-column>
  <vaadin24-grid-column id="address" width="15em" flex-grow="2" header="Address"></vaadin24-grid-column>
</vaadin24-grid>

<script>
  // Customize the "Address" column's renderer
  document.querySelector('#address').renderer = (root, grid, model) => {
    root.textContent = `${model.item.address.street}, ${model.item.address.city}`;
  };

  // Populate the grid with data
  const grid = document.querySelector('vaadin24-grid');
  fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
    .then((res) => res.json())
    .then((json) => (grid.items = json.result));
</script>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/master/packages/grid/screenshot.png" alt="Screenshot of vaadin-grid">](https://vaadin.com/docs/latest/components/grid)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/grid
```

Once installed, import the components in your application:

```js
import '@scoped-vaadin/grid';
import '@scoped-vaadin/grid/vaadin-grid-column-group.js';
import '@scoped-vaadin/grid/vaadin-grid-filter-column.js';
import '@scoped-vaadin/grid/vaadin-grid-selection-column.js';
import '@scoped-vaadin/grid/vaadin-grid-sort-column.js';
import '@scoped-vaadin/grid/vaadin-grid-tree-column.js';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/grid/vaadin-grid.js) of the package uses the Lumo theme.

To use the Material theme, import the components from the `theme/material` folder:

```js
import '@scoped-vaadin/grid/theme/material/vaadin-grid.js';
import '@scoped-vaadin/grid/theme/material/vaadin-grid-filter-column.js';
import '@scoped-vaadin/grid/theme/material/vaadin-grid-selection-column.js';
import '@scoped-vaadin/grid/theme/material/vaadin-grid-sort-column.js';
import '@scoped-vaadin/grid/theme/material/vaadin-grid-tree-column.js';
```

You can also import the Lumo version of the components explicitly:

```js
import '@scoped-vaadin/grid/theme/lumo/vaadin-grid.js';
import '@scoped-vaadin/grid/theme/lumo/vaadin-grid-filter-column.js';
import '@scoped-vaadin/grid/theme/lumo/vaadin-grid-selection-column.js';
import '@scoped-vaadin/grid/theme/lumo/vaadin-grid-sort-column.js';
import '@scoped-vaadin/grid/theme/lumo/vaadin-grid-tree-column.js';
```

Finally, you can import the un-themed components from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/grid/src/vaadin-grid.js';
import '@scoped-vaadin/grid/src/vaadin-grid-column-group.js';
import '@scoped-vaadin/grid/src/vaadin-grid-filter-column.js';
import '@scoped-vaadin/grid/src/vaadin-grid-selection-column.js';
import '@scoped-vaadin/grid/src/vaadin-grid-sort-column.js';
import '@scoped-vaadin/grid/src/vaadin-grid-tree-column.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
