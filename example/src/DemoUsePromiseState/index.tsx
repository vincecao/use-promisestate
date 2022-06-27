import * as React from 'react';

import Anchor from '../components/Anchor';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import DemoGithubSection from './DemoGithubSection';
import DemoIPSection from './DemoIPSection';

export default function DemoUsePromiseState(): React.ReactElement {
  return (
    <>
      <CodeBlock
        codeString={`const [remoteData, { error, status, refetch }, setRemoteData] = usePromiseState<T>(promise, {
  deps,
  onPending,
  onSuccess,
  onError,
  onFinal
})`}
      >
        <p className="italic text-base">
          <Code>promise</Code>needs to be wrapped with
          <Anchor href="https://reactjs.org/docs/hooks-reference.html#usecallback">
            useCallback
          </Anchor>
          and<Code>options</Code>needs to be wrapped with
          <Anchor href="https://reactjs.org/docs/hooks-reference.html#usememo">
            useMemo
          </Anchor>
          if it is not<Code>undefined</Code>.
        </p>
      </CodeBlock>

      <DemoIPSection />
      <DemoGithubSection />
    </>
  );
}
