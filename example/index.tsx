import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { usePromiseState } from '../src';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
  const { data, status } = usePromiseState<string>({
    promise: () =>
      fetch('https://api.ipify.org?format=json').then(data => data.json()),
  });
  return (
    <div>
      {JSON.stringify({ status })}
      {JSON.stringify({data})}
    </div>
  );
};

root.render(<App />);
