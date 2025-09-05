# Development

```bash
npm ci

# Clones @vaadin/web-components into git_modules, necessary once
npm run git_modules

# builds meta data
npm run build:meta

# transforms node_modules/@vaaadin/** into packages/**
npm run build:packages

# removes previous build output and runs the 3 previous steps
npm run build:clean

# builds metadata and packages
npm run build

# build demos for local development
npm run build:demos

# serves demos locally
npm run start

# runs tests
npm run test
```

Note: After running "build" on a new working copy, you may need to re-run `npm i` because the build process potentially creates `packages/*` that aren't present on project checkout

## Upgrading Vaadin

TODO: make a better unified script for these steps

Update the version selector in all of the following locations:

- [vaadin-all/package.json](./vendor-packages/vaadin-all/package.json) -- in the dependencies[]
- [package.json](./package.json) -- in `scripts/git_modules`
- regenerate package-lock.json
  - `rm package-lock.json && npm i`
- run steps above for building

Similarly, search-and-replace the version used internally as appropriate. Note that the internal version aren't necessarily the same as the underlying vaadin versions