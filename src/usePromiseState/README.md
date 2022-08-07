### usePromiseState

A hook that allows user to retrieve data from a remote by a `promise` function and use it like `useState`. It takes a required `promise` function and optional `callbacks` and `dependencyList` as inputs, then return `data`, `error`, `status`, `setData` and `refetch` function.

```tsx
const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})
```
_The `promise` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) and `options` needs to be wrapped with [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) if it is not `undefined`_. Because each time they are updated, the `promise` function will be called inside a `useEffect`.
