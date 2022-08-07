import { useEffect, useState } from 'react';
import { $fetch, FetchOptions } from 'ohmyfetch';

import { UseFetchOptions, UseFetch } from './type';

/**
 * This hook is a react mimic implementation for useLazyFetch in Nuxt3
 * https://v3.nuxtjs.org/api/composables/use-lazy-fetch
 *
 * This hook provides a convenient wrapper for $fetch
 * @param url fetch url
 * @param options options for method, params, body, headers and baseURL, check [ohmyfetch](https://github.com/unjs/ohmyfetch) for more.
 * @returns { data, pending, refresh, error }
 */
export default function useFetch<T = unknown>(
  url: string | undefined | null | false,
  options?: UseFetchOptions
): UseFetch<T> {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | false>(false);

  function init(){
    setData(null);
    setError(false);
    setPending(true);
  }

  async function fetch() {
    if (!url) throw new Error('Missing URL');
    init();
    try {
      const result = await $fetch(url, options as FetchOptions<"json">);
      setData(result);
    } catch (e) {
      setError(e as Error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    if (url) fetch();
  }, [url, options]);
  return { data, pending, refresh: url ? fetch : undefined, error };
}
