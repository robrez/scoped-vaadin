# Building

The vaadin components targeted by the build are specified via [vendor/vaadin-all](../packages/vendor/vaadin-all/README.md)

A build script will process `node_modules/@vaadin/**` and transpile the output to `packages/vaadin/**`

```bash
npm run build
```

After building, it is possible that the local npm workspaces must be reinitialized... especially if local version numbers were changed. I've been doing this:

```bash
npm run build
rimraf node_modules
rimraf package-lock.json
npm i
```

## Build meta data

The build process above uses some meta data that results from analysis conducted via

```bash
npm run build-meta-data
```

## Ignored packages

See [ignore-package.js](../scripts/ignore-packages.js)
