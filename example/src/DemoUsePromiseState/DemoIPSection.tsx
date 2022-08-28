import { $fetch } from 'ohmyfetch';
import * as React from 'react';

import { usePromiseState } from '../../../';
import Button from '../components/Button';
import CodeBlock from '../components/CodeBlock';
import SampleSection from '../components/SampleSection';

function getIpAddressPromise() {
  return $fetch('https://api.ipify.org?format=json');
}

export default function DemoIPSection(): React.ReactElement {
  const [ip, { error, status, refetch }] = usePromiseState<string>(
    React.useCallback(getIpAddressPromise, [])
  );
  return (
    <SampleSection
      title="Promise will be triggered automatically"
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUsePromiseState/DemoIPSection.tsx"
          codeString={`const promise = useCallback(getIpAddressPromise, []);

const [ip, { error, status, refetch }] = usePromiseState<string>(promise);`}
        />
      }
      sampleControls={
        <>
          <p>
            Getting IP address will start automatically and will do a re-fetch
            action when press below button.
          </p>
          <span className="flex justify-end">
            <Button text="Refetch" onClick={refetch} />
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify({ status, ip, error }, null, 4)}
        />
      }
    />
  );
}
