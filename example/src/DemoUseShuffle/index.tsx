import * as React from 'react';

import CodeBlock from '../components/CodeBlock';
import DemoShuffle from './DemoShuffle';

export default function DemoUseShuffle(): React.ReactElement {
  return (
    <>
      <CodeBlock codeString={`const shuffled = useShuffle<T>(array)`} />
      <DemoShuffle />
    </>
  );
}
