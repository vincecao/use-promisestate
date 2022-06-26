import 'react-app-polyfill/ie11';

import * as React from 'react';
import { createRoot } from 'react-dom/client';

import DemoUsePromiseState from './src/DemoUsePromiseState/index';
import DemoUseTimeout from './src/DemoUseTimeout/index';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

function App() {
  return (
    <div className="p-5 font-serif">
      <div>
        <p className="text-3xl">usePromiseState</p>
        <DemoUsePromiseState />
      </div>

      <div>
        <p className="text-3xl">useTimeout</p>
        <DemoUseTimeout />
      </div>

      <div className="fixed bottom-0 space-x-5 w-full flex justify-center">
        <a
          href="https://www.npmjs.com/package/@vincecao/use-tools"
          className="underline"
        >
          NPM: use-tools
        </a>
        <span>
          CopyRight @
          <a href="https://vince-amazing.com" className="underline">
            Vince
          </a>
        </span>
        <a
          href="https://github.com/vincecao/use-tools/tree/master/example"
          className="underline"
        >
          Example code with this Demo
        </a>
      </div>
    </div>
  );
}

root.render(<App />);
