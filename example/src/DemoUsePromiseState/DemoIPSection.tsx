import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import { usePromiseState } from '../../../src';
import Button from '../components/Button';

function getIpAddressPromise() {
  return new Promise<string>((resolve, reject) =>
    setTimeout(
      () =>
        fetch('https://api.ipify.org?format=json')
          .then(data => resolve(data.json()))
          .catch(reject),
      5000
    )
  );
}

export default function DemoIPSection(): React.ReactElement {
  const [ip, { error, status, refetch }] = usePromiseState<string>(
    React.useCallback(getIpAddressPromise, [])
  );
  return (
    <div className="py-5">
      <p className="text-xl">Promise will be triggered automatically</p>
      <p>IP address API will called in 5 sec as a timeout promise</p>
      <span className="flex justify-end">
        <Button text="Refetch" onClick={refetch} />
      </span>
      <div className="text-xs">
        <pre className="font-mono">typescript</pre>
        <SyntaxHighlighter language="typescript">
          {`const [ip, { error, status, refetch }] = usePromiseState<string>(useCallback(getIpAddressPromise, []))`}
        </SyntaxHighlighter>
      </div>
      <div className="text-xs">
        <pre className="font-mono">result</pre>
        <SyntaxHighlighter language="typescript">
          {JSON.stringify({ status, data: ip, error }, null, 4)}
        </SyntaxHighlighter>
      </div>

      <br />
    </div>
  );
}
