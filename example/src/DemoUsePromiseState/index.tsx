import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import Code from '../components/Code';
import DemoGithubSection from './DemoGithubSection';
import DemoIPSection from './DemoIPSection';

export default function DemoUsePromiseState(): React.ReactElement {
  return (
    <>
      <div className="text-xs my-5">
        <SyntaxHighlighter language="typescript">
          {`const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})`}
        </SyntaxHighlighter>
        <p className="italic text-base">
          <Code>promise</Code> needs to be wrapped with
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usecallback"
            className="underline font-bold mx-1"
          >
            useCallback
          </a>
          and <Code>options</Code> needs to be wrapped with
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usememo"
            className="underline font-bold mx-1"
          >
            useMemo
          </a>
          if it is not undefined
        </p>
      </div>
      <DemoIPSection />
      <DemoGithubSection />
    </>
  );
}
