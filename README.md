# nk-design-system

A react component library by following Atlassian design language(https://www.atlassian.design/)

## Installation and usage

Before installing add `"postinstall": "node node_modules/nk-design-system/build.js"` inside script tag in package.json.

```bash
yarn add nk-design-system
```

or

```bash
npm i nk-design-system
```

Add `import "../node_modules/nk-design-system/build/index.es.css"` in your root component for styles. (refer example folder)

## Contribute to the library

### Install packages

```bash
yarn
```

### Starting storybook

```bash
yarn storybook
```

### Building components

```bash
yarn build
```

### Building storybook UI

```bash
yarn build-storybook
```
