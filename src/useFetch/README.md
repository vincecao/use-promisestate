## useFetch

A convenient wrapper hook for `$fetch` function from [ohmyfetch](https://github.com/unjs/ohmyfetch). The fetch will be triggered by a given URL and options.

This is a React mimic implementation of `useLazyFetch` from [Nuxt3](https://v3.nuxtjs.org/api/composables/use-lazy-fetch) API.

```tsx
const {data, pending, refresh, error } = useFetch<T = unknown>(url, {
  method,
  params,
  body,
  headers,
  baseURL
})
```
