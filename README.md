# [use-tools](https://www.npmjs.com/package/@vincecao/use-tools)

```bash
npm i @vincecao/use-tools
```

## Demo Site
https://vince-amazing.com/use-tools/

## Demo Code
https://github.com/vincecao/use-tools/tree/master/example

## usePromiseState

A hook that allows you to fetch data from remote source by passing a promise.

### Example usage

```tsx

function getGithubPromise(user: string): Promise<GithubResponse> {
  return fetch(`https://api.github.com/users/${user}`).then(data =>
    data.json()
  );
}

const memorizedPromise = React.useCallback(() => {
    return !!current && getGithubPromise(current);
}, [current]);

const memorizedDeps = React.useMemo(() => {
    return [current];
}, [current]);

const { data, error, status, refetch, update } = usePromiseState<string>({
    promise: // return a Promise that get data from remote. Changes from promise will trigger fetch/refetch
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
    deps: memorizedDeps // optional dependency list, need to make all deps true in order to trigger the fetch. Changes from deps will trigger fetch/refetch
})


// manually refetch
refetch();

// update current data outside the hook
update(newData);

```

## Running example

```bash
yarn
yarn start

cd example
yarn
yarn start
```
