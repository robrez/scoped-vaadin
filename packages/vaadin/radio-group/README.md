# @scoped-vaadin/radio-group

This component is based on [@vaadin/radio-group](https://www.npmjs.com/package/@vaadin/radio-group)

A web component that allows the user to choose one item from a group of choices.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/radio-button)

```html
<vaadin24-radio-group label="Travel class">
  <vaadin24-radio-button value="economy" label="Economy"></vaadin24-radio-button>
  <vaadin24-radio-button value="business" label="Business"></vaadin24-radio-button>
  <vaadin24-radio-button value="firstClass" label="First Class"></vaadin24-radio-button>
</vaadin24-radio-group>
```

[<img src="https://raw.githubusercontent.com/vaadin/web-components/main/packages/radio-group/screenshot.png" width="370" alt="Screenshot of vaadin-radio-group">](https://vaadin.com/docs/latest/components/radio-button)

## Installation

Install the component:

```sh
npm i @scoped-vaadin/radio-group
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/radio-group';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/main/packages/radio-group/vaadin-radio-group.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/radio-group/theme/material/vaadin-radio-group.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/radio-group/theme/lumo/vaadin-radio-group.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/radio-group/src/vaadin-radio-group.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
