import * as React from 'react';

import { useFetch } from '../../../';
import Button from '../components/Button';
import CodeBlock from '../components/CodeBlock';
import Input from '../components/Input';
import SampleSection from '../components/SampleSection';

export default function DemoIPFetch(): React.ReactElement {
  const [ipSearch, setIpSearch] = React.useState<{
    input?: string;
    current?: string;
  }>({ input: undefined, current: undefined });
  const { data: ipDefault } = useFetch<string>(
    'https://api.ipify.org?format=json'
  );

  const options = React.useMemo(
    () => ({
      baseURL: 'https://ipapi.co/',
    }),
    []
  );

  const { data, pending, error, refresh } = useFetch<string>(
    `${ipDefault?.['ip'] && (ipSearch.current || ipDefault?.['ip'])}/json/`,
    options
  );
  return (
    <SampleSection
      title="A fetch will be called when URL or options get update."
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUseFetch/DemoIPFetch.tsx"
          codeString={`const options = useMemo(() => ({ baseURL: 'https://ipapi.co/', headers: { 'mock-header-key': 'mock-header-value' } }), []);

const { data, pending, error, refresh } = useFetch<string>(
  '${ipSearch.current || ipDefault?.['ip']}' + '/json/',
  options
);`}
        />
      }
      sampleControls={
        <>
          <label>
            IP
            <Input
              value={ipSearch.input}
              placeholder={ipSearch.current || 'Type a new IP address to search. e.g. 8.8.8.8'}
              onChange={value => {
                setIpSearch(prev => ({ ...prev, input: value }));
              }}
            />
          </label>

          <span>
            <Button
              text="Search"
              disabled={!ipSearch.input}
              onClick={() => {
                setIpSearch(prev => ({
                  current: prev.input,
                  input: undefined,
                }));
              }}
            />

            <Button
              text="Refetch"
              disabled={!ipSearch.current}
              onClick={refresh}
            />
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify(
            { data, pending, error: String(error) },
            null,
            4
          )}
        />
      }
    />
  );
}
