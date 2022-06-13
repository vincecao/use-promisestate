import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePromiseState } from '../src';

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

ReactDOM.render(<App />, document.getElementById('root'));
