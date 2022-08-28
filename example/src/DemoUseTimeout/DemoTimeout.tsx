import * as React from 'react';

import { useTimeout } from '../../../';
import Button from '../components/Button';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import Input from '../components/Input';
import SampleSection from '../components/SampleSection';

export default function DemoTimeout(): React.ReactElement {
  const [value, setValue] = React.useState<{
    current: string | undefined;
    input: string | undefined;
  }>({ current: undefined, input: 'Hello World!' });

  const [disabled, setDisabled] = React.useState(false);
  const [disableDelay, setDisableDelay] = React.useState(false);
  const [result, setResult] = React.useState<string>();

  useTimeout(
    React.useCallback(() => {
      setResult(value.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value.current]),
    2000,
    disabled,
    disableDelay
  );

  return (
    <SampleSection
      title="Create a Timeout to show the given current"
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUseTimeout/DemoTimeout.tsx"
          codeString={`useTimeout(
  React.useCallback(() => {
    setResult(current);
  }, [current]),
  2000,
  disabled,
  disableDelay
)`}
        />
      }
      sampleControls={
        <>
          <p>
            Timeout result will be updated in 2 seconds after pressing the check
            button. Check<Code>disabled</Code>option will disable the entire
            hook. Check
            <Code>disable delay</Code>option will remove setTimeout behavior
            make function call instant.
          </p>
          <span className="flex justify-between">
            <label>
              Enter a value
              <Input
                value={value.input}
                placeholder={value.current || 'Fill your username'}
                onChange={value => {
                  setValue(prevUser => ({ ...prevUser, input: value }));
                }}
              />
            </label>

            <span>
              <label>
                disabled
                <Input
                  type="checkbox"
                  onChange={() => setDisabled(!disabled)}
                />
              </label>
              <label>
                disable delay
                <Input
                  type="checkbox"
                  onChange={() => setDisableDelay(!disableDelay)}
                />
              </label>
              <Button
                text="Check Timeout Result"
                disabled={!value.input}
                onClick={() => {
                  setValue(prevUser => ({
                    current: prevUser.input,
                    input: '',
                  }));
                }}
              />
            </span>
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify(
            { user: value, delayedCurrent: result },
            null,
            4
          )}
        />
      }
    />
  );
}
