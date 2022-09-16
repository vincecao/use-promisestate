## useStickyRef

One reusable hook for returning a `sticky` boolean flag based on designated gate element window position.

It provides two sticky type options, `top-sticky` or `bottom-sticky`. With some tweaks, you can easily apply complicated sticky behaviors into our existing UI. Check more on [demo](https://vince-amazing.com/use-tools/) in `useStickyRef` section.

`stickyGateRef` currently only supports `HTMLDivElement`.

```tsx
const [stickyEnabled, stickyGateRef] = useStickyRef(type: 'top' | 'bottom', offset : number);
```
