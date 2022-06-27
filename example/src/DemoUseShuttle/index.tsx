import * as React from 'react';

import CodeBlock from '../components/CodeBlock';
import DemoShuttle from './DemoShuttle';

export default function DemoUseShuttle(): React.ReactElement {
  return (
    <>
      <CodeBlock codeString={`const shuttled = useShuttle<T>(array)`} />
      <DemoShuttle />
    </>
  );
}
