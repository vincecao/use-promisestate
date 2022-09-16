import classNames from 'classnames';
import type { ReactElement } from 'react';
import * as React from 'react';
import { useState } from 'react';

import Button from '../components/Button';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import SampleSection from '../components/SampleSection';
import DemoUseStickyRef from './DemoStickyRef';

export default function Index(): ReactElement {

  const [demoView, SetDemoView] = useState<boolean>(false);


  return (
    <>
      <CodeBlock codeString={`const [stickyEnabled, stickyGateRef] = useStickyRef(type: 'top' | 'bottom', offset : number);`}>
        <p className='text-base'>
          One reusable hook for returning a <Code>sticky</Code> boolean flag based on designated gate element window position.
        </p>
      </CodeBlock>

      <SampleSection
        title="You can quickly add top/bottom sticky style for existing components with useStickyRef"
        sampleCodeBlock={
          <CodeBlock
            type="typescript"
            sourceHref="/example/src/DemoUseStickyRef/DemoStickyRef.tsx"
            codeString={`// Create a top sticky hook for first example
const [topStickyEnabled, topStickyGateRef] = useStickyRef('top', 256);

// Create a bottom sticky hook for second example
const [bottomStickyEnabled, bottomStickyGateRef] = useStickyRef('bottom', 256 + 64);`}
          />
        }
        sampleControls={
          <>
            <div className={classNames({ 'fixed right-10 top-10 drop-shadow backdrop-blur': demoView })}>
              <Button text={`${demoView ? 'End' : 'Start'} Sticky Demo View`} onClick={() => SetDemoView(!demoView)} />
            </div>

            <div className={classNames({ 'hidden': !demoView })}>
              <DemoUseStickyRef />
            </div>
          </>
        }
      />
    </>
  );
}
