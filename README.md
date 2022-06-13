# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)
``` bash
npm i @vincecao/use-tools
```

## PromiseState

A hook that allows you to fetch data from remote source by passing a promise.

### Example usage
``` tsx
const { data, status, refetch, update } = usePromiseState<string>({
    promise: getPhotoSetsPromise,
    onError: (e) => {
        console.error(e);
        // on error
    },
    onSuccess: (data: string) => {
        // on success
    },
    onFinal: () => {
        // on finally
    },
    deps: [...] // optinoal depenency list, need to make all deps true in order to trigger the fetch,
    disableInitialFetch: true // optional setting to disable initial fetch and force to call refetch manualy
})


// manually refetch
refetch();

// update current data outside the hook
update(newData);

```