import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { usePromiseState } from '../../src';
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
  const memorizedPromise = React.useCallback(() => {
    return getIpAddressPromise();
  }, []);
  const { data, error, status, refetch } = usePromiseState<string>({
    promise: memorizedPromise,
  });
  return (
    <>
      <h2 className="text-2xl">Promise will be triggered automatically</h2>
      <p>IP address API will called in 5 sec as a timeout promise</p>
      <span className="flex justify-end">
        <Button text="Refetch" onClick={refetch} />
      </span>
      <div className="text-xs">
        <SyntaxHighlighter language="javascript">
          {JSON.stringify({ status, data, error }, null, 4)}
        </SyntaxHighlighter>
      </div>

      <br />
    </>
  );
}
