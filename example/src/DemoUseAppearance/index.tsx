import * as React from 'react';
import Anchor from '../components/Anchor';
import Code from '../components/Code';

import CodeBlock from '../components/CodeBlock';
import DemoAppearance from './DemoAppearance';

export default function DemoUseAppearance(): React.ReactElement {
  return (
    <>
      <CodeBlock
        language='tsx'
        codeString={`import { useAppearance } from '@vincecao/use-tools';

const { appearance, toggleAppearance, resetAppearance} = useAppearance();`}
      >
        <p className='text-base'>
          A Hook allows you to read os appearance and update website class preference.
        </p>
        <p className='text-base'>
          The hook uses <Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia">Window.matchMedia() API</Anchor> to detect and modify user appearance preference setting for the project.
        </p>
        <p className='text-base'>
          A <Code>light</Code> and <Code>dark</Code> class will be added into the html tag once user appearance preference changes. A localstorage <Code>@@appearance@@</Code> key will be stored for user appearance preference, which overrides the appearance for next time this user visit.
        </p>
      </CodeBlock>
      <DemoAppearance />
    </>
  );
}
