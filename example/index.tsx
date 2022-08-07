import 'react-app-polyfill/ie11';

import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Anchor from './src/components/Anchor';
import CodeBlock from './src/components/CodeBlock';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import HookSection from './src/components/HookSection';
import DemoUsePromiseState from './src/DemoUsePromiseState';
import DemoUseShuttle from './src/DemoUseShuttle';
import DemoUseTimeout from './src/DemoUseTimeout';
import DemoUseFetch from './src/DemoUseFetch';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

function App() {
  return (
    <div className='text-gray-800 container max-w-6xl mx-auto'>
      <Header>
        <Anchor href="//github.com/vincecao/use-tools">
          use-tools
        </Anchor>
        <span className='flex space-x-2'>
          <Anchor href="//www.npmjs.com/package/@vincecao/use-tools">
            <img src="//badge.fury.io/js/@vincecao%2Fuse-tools.svg" />
          </Anchor>
          <Anchor href="//github.com/vincecao/use-tools">
            <img src="//badgen.net/github/checks/vincecao/use-tools" />
          </Anchor>
        </span>
      </Header>
      
      <div className="p-5 space-y-5 font-serif py-10">

        <CodeBlock type='installation' codeString='yarn add @vincecao/use-tools' language='bash'/>

        <HookSection title="usePromiseState">
          <DemoUsePromiseState />
        </HookSection>

        <HookSection title="useTimeout">
          <DemoUseTimeout />
        </HookSection>

        <HookSection title="useShuttle">
          <DemoUseShuttle />
        </HookSection>

        <HookSection title="useFetch">
          <DemoUseFetch />
        </HookSection>
      </div>
      <Footer>
        <span>
          copyright<Anchor href="//vince-amazing.com">@Vince</Anchor>
        </span>
      </Footer>
    </div>
  );
}

root.render(<App />);
