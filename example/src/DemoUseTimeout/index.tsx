import * as React from 'react';

import Anchor from '../components/Anchor';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import DemoTimeout from './DemoTimeout';

export default function DemoUseTimeout(): React.ReactElement {
  return (
    <>
      <CodeBlock
        codeString={`useTimeout<T>(func, delay, disabled, disableDelay)`}
      >
        <p className="italic text-base">
          <Code>func</Code>needs to be wrapped with
          <Anchor href="https://reactjs.org/docs/hooks-reference.html#usecallback">
            useCallback
          </Anchor>
        </p>
      </CodeBlock>
      <DemoTimeout />
    </>
  );
}
