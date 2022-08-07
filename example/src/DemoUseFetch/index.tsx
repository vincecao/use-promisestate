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
      </CodeBlock>
      <DemoIPFetch />
    </>
  );
}
