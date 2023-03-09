# @scoped-vaadin/scroller

This component is based on [@vaadin/scroller](https://www.npmjs.com/package/@vaadin/scroller)

A component container for creating scrollable areas in the UI.

[Documentation + Live Demo ↗](https://vaadin.com/docs/latest/components/scroller)

```html
<vaadin24-scroller scroll-direction="vertical">
  <section>
    <h3>Personal information</h3>
    <vaadin24-text-field label="First name"></vaadin24-text-field>
    <vaadin24-text-field label="Last name"></vaadin24-text-field>
    <vaadin24-date-picker label="Birth date"></vaadin24-date-picker>
  </section>
  <section>
    <h3>Employment information</h3>
    <vaadin24-text-field label="Position"></vaadin24-text-field>
    <vaadin24-text-area label="Additional information"></vaadin24-text-area>
  </section>
</vaadin24-scroller>
```

## Installation

Install the component:

```sh
npm i @scoped-vaadin/scroller
```

Once installed, import the component in your application:

```js
import '@scoped-vaadin/scroller';
```

## Themes

Vaadin components come with two built-in [themes](https://vaadin.com/docs/latest/styling), Lumo and Material.
The [main entrypoint](https://github.com/vaadin/web-components/blob/master/packages/scroller/vaadin-scroller.js) of the package uses the Lumo theme.

To use the Material theme, import the component from the `theme/material` folder:

```js
import '@scoped-vaadin/scroller/theme/material/vaadin-scroller.js';
```

You can also import the Lumo version of the component explicitly:

```js
import '@scoped-vaadin/scroller/theme/lumo/vaadin-scroller.js';
```

Finally, you can import the un-themed component from the `src` folder to get a minimal starting point:

```js
import '@scoped-vaadin/scroller/src/vaadin-scroller.js';
```

## Contributing

Read the [contributing guide](https://vaadin.com/docs/latest/contributing/overview) to learn about our development process, how to propose bugfixes and improvements, and how to test your changes to Vaadin components.

## License

Apache License 2.0

Vaadin collects usage statistics at development time to improve this product.
For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
