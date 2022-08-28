import * as React from 'react';

import { useShuttle } from '../../../';
import Button from '../components/Button';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import SampleSection from '../components/SampleSection';

const DEMO_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export default function DemoShuttle(): React.ReactElement {
  const [original, setOriginal] = React.useState(DEMO_ARRAY);
  const shuttled = useShuttle(original);

  return (
    <SampleSection
      title="Shuttle an array each time it changed"
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUseShuttle/DemoShuttle.tsx"
          codeString={`const shuttled = useShuttle(original)`}
        />
      }
      sampleControls={
        <>
          <p>
            The shuttle function will be triggered once <Code>original</Code> is
            updated.
          </p>
          <span className="flex justify-end">
            <Button
              text="Force shuttle again (shadow copy original)"
              onClick={() => setOriginal([...DEMO_ARRAY])}
            />
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify({ array: DEMO_ARRAY, shuttled })}
        />
      }
    />
  );
}
