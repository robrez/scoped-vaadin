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
