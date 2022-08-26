import debounce from 'lodash.debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  UsePromiseState,
  UsePromiseStateOptions,
  UsePromiseStatePromise,
  UsePromiseStatus,
} from './type';

const DEFAULT_DEBOUNCE_DELAY = 300;

/**
 * This hook is allowing user to retrieve data from a remote by a promise function.
 * The hook takes a required promise and optional options. Once promise and deps inside
 * options are valid the hook will be automatically triggered. By default deps value is empty.
 *
 * Notice: To preventing keeping calling the Apis, `promise` and `options` **MUST BE** memorized by useCallback and useMemo.
 *
 * For more detail, please check
 * This demo page, @see https://vince-amazing.com/use-tools/
 *
 * @param promise A promise function returns valid promise or false | undefined
 * @param options `deps` as dependencyList, `onPending`, `onSuccess`, `onError`, and `onFinal` callbacks
 * @param debounceDelay add promise debounce for server protection, by default 300ms
 * @returns `[data, { error, status, refetch }, setData ]`
 */
export default function usePromiseState<T>(
  promise: UsePromiseStatePromise<T>,
  options?: UsePromiseStateOptions<T>
): UsePromiseState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<UsePromiseStatus>('waiting');

  const debouncedPromise = useRef(
    debounce((fetch: () => Promise<void>) => {
      if (status !== 'pending') fetch();
    }, options?.debounceDelay || DEFAULT_DEBOUNCE_DELAY)
  ).current;

  const memorizedFetch = useCallback(async () => {
    // Do not run promise until all deps and promise are valid
    const promiseFn = promise();
    if (!promiseFn) return;

    const { onFinal, onSuccess, onError, onPending, deps = [] } = options || {};
    if (!deps.every(d => d != null)) return;

    try {
      setStatus('pending');
      onPending?.();
      const result = await promiseFn;
      setStatus('resolved');
      onSuccess?.(result);
      setData(result);
    } catch (e) {
      setStatus('rejected');
      setError(e as Error);
      onError?.(e as Error);
    } finally {
      onFinal?.();
    }
  }, [promise, options]);

  // once memorizedFetch function updates, call a debounced fetch
  useEffect(() => {
    debouncedPromise(memorizedFetch);
    return () => setStatus('waiting');
  }, [debouncedPromise, memorizedFetch]);

  // Clean debouncedPromise once page leave
  useEffect(() => () => debouncedPromise.cancel(), [debouncedPromise]);

  return [
    data,
    {
      error,
      status,
      refetch: memorizedFetch,
    },
    setData,
  ];
}
