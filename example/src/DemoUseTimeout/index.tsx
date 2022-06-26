import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import Code from '../components/Code';

export default function useTimeout(): React.ReactElement {
  return (
    <div className="text-xs my-5">
      <SyntaxHighlighter language="typescript">
        {`useTimeout<T>(func, delay, disabled)`}
      </SyntaxHighlighter>
      <p className="italic text-base">
        <Code>func</Code> needs to be wrapped with
        <a
          href="https://reactjs.org/docs/hooks-reference.html#usecallback"
          className="underline font-bold mx-1"
        >
          useCallback
        </a>
      </p>
    </div>
  );
}
