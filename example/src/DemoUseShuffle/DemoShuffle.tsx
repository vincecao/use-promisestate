import * as React from 'react';

import { useShuffle } from '../../../dist';
import Button from '../components/Button';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import SampleSection from '../components/SampleSection';

const DEMO_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export default function DemoShuffle(): React.ReactElement {
  const [original, setOriginal] = React.useState(DEMO_ARRAY);
  const shuffled = useShuffle(original);

  return (
    <SampleSection
      title="Shuffle an array each time it changed"
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUseShuffle/DemoShuffle.tsx"
          codeString={`const shuffled = useShuffle(original)`}
        />
      }
      sampleControls={
        <>
          <p>
            The shuffle function will be triggered once <Code>original</Code> is
            updated.
          </p>
          <span className="flex justify-end">
            <Button
              text="Force shuffle again (shadow copy original)"
              onClick={() => setOriginal([...DEMO_ARRAY])}
            />
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify({ array: DEMO_ARRAY, shuffled })}
        />
      }
    />
  );
}
