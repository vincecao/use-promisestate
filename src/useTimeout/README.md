## useTimeout

A simple implementation for connecting `setTimeout` into React state world. The changes of `promise` will reset timeout delay. The `disable` option will pause entire hook, `disableDelay` will remove `setTimeout` behavior so function be called immediately.

```tsx
useTimeout<T>(func, delay, disabled, disableDelay)
```

_The `func` needs to be wrapped with [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)._
