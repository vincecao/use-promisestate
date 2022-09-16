import * as React from 'react';

import Anchor from './components/Anchor';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';
import Header from './components/Header';
import HookSection from './components/HookSection';
import DemoUsePromiseState from './DemoUsePromiseState';
import DemoUseShuttle from './DemoUseShuttle';
import DemoUseTimeout from './DemoUseTimeout';
import DemoUseFetch from './DemoUseFetch';
import DemoUseAppearance from './DemoUseAppearance';
import DemoUseStickyRef from './DemoUseStickyRef'

export default function App() {
  return (
    <div className='text-stone-800 dark:text-stone-200 dark:bg-stone-800 container max-w-6xl mx-auto'>
      <Header>
        <div className='mix-blend-difference'>
          <Anchor href="//github.com/vincecao/use-tools">
            use-tools
          </Anchor>
        </div>
        <span className='flex space-x-2'>
          <Anchor href="//www.npmjs.com/package/@vincecao/use-tools">
            <img src="//badge.fury.io/js/@vincecao%2Fuse-tools.svg" />
          </Anchor>
          <Anchor href="//github.com/vincecao/use-tools">
            <img src="//badgen.net/github/checks/vincecao/use-tools" />
          </Anchor>
        </span>
      </Header>
      
      <div className="p-5 space-y-14 font-serif py-10">

        <CodeBlock type='installation' codeString='yarn add @vincecao/use-tools' language='bash'/>

        <hr/>

        <HookSection title="usePromiseState">
          <DemoUsePromiseState />
        </HookSection>

        <hr/>

        <HookSection title="useTimeout">
          <DemoUseTimeout />
        </HookSection>

        <hr/>

        <HookSection title="useShuttle">
          <DemoUseShuttle />
        </HookSection>

        <hr/>

        <HookSection title="useFetch">
          <DemoUseFetch />
        </HookSection>

        <hr/>

        <HookSection title="useAppearance">
          <DemoUseAppearance />
        </HookSection>

        <HookSection title="useStickyRef">
          <DemoUseStickyRef />
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