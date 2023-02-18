import type { ReactElement } from 'react';
import * as React from 'react';
import { useAppearance } from '../../../';
import Button from '../components/Button';
import CodeBlock from '../components/CodeBlock';
import SampleSection from '../components/SampleSection';

export default function DemoAppearance(): ReactElement {
  const { appearance, toggleAppearance, resetAppearance } = useAppearance();
  const osAppearance = React.useMemo(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light', [])
  return <SampleSection
    title="A hook read and adjust current app appearance setting with localStorage ('@@appearance@@') changes"
    sampleCodeBlock={
      <CodeBlock
        type="typescript"
        sourceHref="/example/src/DemoUseAppearance/DemoAppearance.tsx"
        codeString={`const { appearance, toggleAppearance, resetAppearance } = useAppearance();`}
      />
    }
    sampleControls={
      <>
        <div data-testid='demo-appearance-div'>
          <Button onClick={toggleAppearance}>Toggle Appearance</Button>
          <Button onClick={resetAppearance}>Reset to OS Appearance</Button>
        </div>
      </>
    }
    resultCodeBlock={
      <CodeBlock language='json' type='result' codeString={JSON.stringify({appearance, osAppearance,  ["localStorage('@@appearance@@')"]: localStorage.getItem('@@appearance@@')}, null, 4)} />
    }
  />
}