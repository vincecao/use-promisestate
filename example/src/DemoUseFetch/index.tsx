import * as React from 'react';

import Anchor from '../components/Anchor';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import DemoIPFetch from './DemoIPFetch';

export default function DemoUsePromiseState(): React.ReactElement {
  return (
    <>
      <CodeBlock
        codeString={`const {data, pending, refresh, error } = useFetch<T = unknown>(url, {
  method,
  params,
  body,
  headers,
  baseURL
})`}
      >
        <p className='text-base'>
          React mimic implementation of <Code>useLazyFetch</Code> from{' '}
          <Anchor href="https://v3.nuxtjs.org/api/composables/use-lazy-fetch">
            Nuxt3
          </Anchor>
          . It provides a convenient wrapper for <Anchor href="https://github.com/unjs/ohmyfetch">ohmyfetch</Anchor> with a given URL and
          options.
        </p>
        <p>Since <Code>options</Code> change will cause the hook re-fetch again, options need to be wrapped with <Code>useMemo</Code></p>
      </CodeBlock>
      <DemoIPFetch />
    </>
  );
}
