A group of reusable custom hooks for making react developer life easier.

# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)

[![npm version](https://badge.fury.io/js/@vincecao%2Fuse-tools.svg)](https://badge.fury.io/js/@vincecao%2Fuse-tools)
[![npm checks](https://badgen.net/github/checks/vincecao/use-tools)](https://github.com/vincecao/use-tools/actions)

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

TThis package is automatically published in [NPMJS](https://www.npmjs.com/package/@vincecao/use-tools) and [GITHUB](https://github.com/vincecao/use-tools/packages/1555582) npm registry.

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

## Demo

Please check more samples at below
- [**Demo Site**](https://vince-amazing.com/use-tools/)
- [Code Sample](https://github.com/vincecao/use-tools/tree/master/example)

## Hooks
### usePromiseState

A hook that allows user to retrieve data from a `promise`. It takes a required `promise` function and optional `callbacks` and `dependencyList` as inputs, then return `data`, `error`, `status`, `setData` and `refetch` function.

```tsx
const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})
```
_The `promise` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) and `options` needs to be wrapped with [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) if it is not `undefined`, Because each time they are updated, the `promise` function will be called inside a `useEffect`.
## useTimeout

A simple implementation of `useTimeout` hook. The changes of `promise` will reset timeout delay. The `disable` option will pause entire hook, `disableDelay` will remove `setTimeout` behavior so function be called immediately.

```tsx
useTimeout<T>(func, delay, disabled, disableDelay)
```

_The `func` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)._

## useShuttle

A hook returns a new shuttled list for each unique given array. The changes of array will trigger re-generating a new shuttled list.

```tsx
const shuttled = useShuttle<T>(array)
```

### Running live example

```bash
yarn
yarn start

cd example
yarn
yarn start
```
