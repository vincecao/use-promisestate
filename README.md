# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)

A group of reusable custom hooks for making react developer life easier.

[![npm version](https://badge.fury.io/js/@vincecao%2Fuse-tools.svg)](https://badge.fury.io/js/@vincecao%2Fuse-tools)
[![npm checks](https://badgen.net/github/checks/vincecao/use-tools)](https://github.com/vincecao/use-tools/actions)

| Hooks      | Description |
| ----------- | ----------- |
| [usePromiseState][usePromiseState-link] | Retrieving data from a remote by a `promise` function and use it like `useState`. |
| [useTimeout][useTimeout-link] | Connecting `setTimeout` into React state world. |
| [useShuttle][useShuttle-link] | A hook returns a new shuttled list for each unique given array. |
| [useFetch][useFetch-link] | A convenient wrapper for `$fetch` function. React implementation of `useLazyFetch` from [Nuxt3](https://v3.nuxtjs.org/api/composables/use-lazy-fetch) API. |
| [useAppearance][useAppearance-link] | Detect current system appearance setting |

## Example

Please check more examples at below links
- [**Demo Site**](https://vince-amazing.com/use-tools/)
- [Code Sample](https://github.com/vincecao/use-tools/tree/master/example)

## Installation

```bash
# latest
# npm
npm i @vincecao/use-tools
# yarn
yarn add @vincecao/use-tools

# beta
# npm
npm i @vincecao/use-tools@beta
# yarn
yarn add @vincecao/use-tools@beta
```

This package is automatically published in [NPMJS](https://www.npmjs.com/package/@vincecao/use-tools) and [GITHUB](https://github.com/vincecao/use-tools/packages/1555582) npm registry.

_To install package from Github npm registry, add below file in your repo before run `npm i` or `yarn add`_.

```bash
# .npmrc
@vincecao:registry=https://npm.pkg.github.com
```

You can also install directly from current repo master
```bash
# npm
npm i vincecao/use-tools
npm i github:vincecao/use-tools

# yarn
yarn add vincecao/use-tools
yarn add github:vincecao/use-tools
```

### Release Method
- When a Pull Request is merged to the master, Github Actions will create and publish a beta version.
- When a Release is created with a new tag version, Github Actions will create and publish a stable version.

### Running live example

```bash
yarn
yarn start

cd example
yarn
yarn start
```

[usePromiseState-link]: https://github.com/vincecao/use-tools/tree/master/src/usePromiseState
[useTimeout-link]: https://github.com/vincecao/use-tools/tree/master/src/useTimeout
[useShuttle-link]: https://github.com/vincecao/use-tools/tree/master/src/useShuttle
[useFetch-link]: https://github.com/vincecao/use-tools/tree/master/src/useFetch
[useAppearance-link]: https://github.com/vincecao/use-tools/tree/master/src/useAppearance