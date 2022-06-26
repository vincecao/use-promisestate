# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)

[![npm version](https://badge.fury.io/js/@vincecao%2Fuse-tools.svg)](https://badge.fury.io/js/@vincecao%2Fuse-tools)

## Installation

```bash
npm i @vincecao/use-tools
```

## Demo

- [Demo Site](https://vince-amazing.com/use-tools/)
- [Code Sample](https://github.com/vincecao/use-tools/tree/master/example)

## Hooks
### usePromiseState

A hook that allows user to retrieve data from a remote by a promise function by taking a required promise and optional options.

```tsx
const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})
```
_The `promise` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) and `options` needs to be wrapped with [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) if it is not undefined_
## useTimeout

A simple implementation of `useTimeout` hook. The changes of promise will reset timeout

```tsx
useTimeout<T>(func, delay, disabled)
```

_The `func` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)_

### Running live example

```bash
yarn
yarn start

cd example
yarn
yarn start
```
