# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)

[![npm version](https://badge.fury.io/js/@vincecao%2Fuse-tools.svg)](https://badge.fury.io/js/@vincecao%2Fuse-tools)
[![](https://badgen.net/github/checks/vincecao/use-tools)](https://github.com/vincecao/use-tools/actions)

## Installation

```bash
# npm
npm i @vincecao/use-tools

# yarn
yarn add @vincecao/use-tools
```

## Demo

Please check more samples at below
- [Demo Site](https://vince-amazing.com/use-tools/)
- [Code Sample](https://github.com/vincecao/use-tools/tree/master/example)

## Hooks
### usePromiseState

A hook that allows user to retrieve data from a remote by a `promise` function. It takes a required promise and optional options as inputs, return `data`, `error` `status` and useful `callbacks`.

```tsx
const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})
```
_The `promise` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) and `options` needs to be wrapped with [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) if it is not `undefined`_.
## useTimeout

A simple implementation of `useTimeout` hook. The changes of `promise` will reset timeout delay. The `disable` option pause entire hook, `disableDelay` remove `setTimeout` behavior.

```tsx
useTimeout<T>(func, delay, disabled, disableDelay)
```

_The `func` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)._

## useShuttle

A hook returns a shuttled list for each unique given array. The changes of array will also trigger re-generate a new shuttled list.

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
