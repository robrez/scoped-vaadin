# @scoped-vaadin/horizontal-layout

This component is based on [@vaadin/horizontal-layout](https://www.npmjs.com/package/@vaadin/horizontal-layout)

A web component that places its content side-by-side in a row.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/basic-layouts/#horizontal-layout)

```html
<vaadin24-horizontal-layout theme="spacing padding">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</vaadin24-horizontal-layout>
```

## Installation

Install the component:

```sh
npm i @scoped-vaadin/horizontal-layout
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/horizontal-layout';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/horizontal-layout/vaadin-horizontal-layout.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/horizontal-layout/theme/material/vaadin-horizontal-layout.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/horizontal-layout/theme/lumo/vaadin-horizontal-layout.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
