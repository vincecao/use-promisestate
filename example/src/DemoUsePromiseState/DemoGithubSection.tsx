import { $fetch } from 'ohmyfetch';
import * as React from 'react';

import {
  usePromiseState,
  UsePromiseStateOptions,
  UsePromiseStatePromise,
} from '@vincecao/use-tools';
import Anchor from '../components/Anchor';
import Button from '../components/Button';
import Code from '../components/Code';
import CodeBlock from '../components/CodeBlock';
import Input from '../components/Input';
import SampleSection from '../components/SampleSection';

type Response = {
  login: string | null;
  avatar_url: string | null;
  url: string | null;
  html_url: string | null;
  repos_url: string | null;
  name: string | null;
  blog: string | null;
  location: string | null;
  email: null;
  created_at: Date;
  updated_at: Date;
};

function getGithubPromise(user: string): Promise<Response> {
  return $fetch(`https://api.github.com/users/${user}`);
}

export default function DemoGithubSection(): React.ReactElement {
  const [user, setUser] = React.useState<{
    current: string | undefined;
    input: string | undefined;
  }>({ current: undefined, input: 'vincecao' });

  /* eslint-disable react-hooks/exhaustive-deps */
  const promise: UsePromiseStatePromise<Response> = React.useCallback(() => {
    return !!user.current && getGithubPromise(user.current);
  }, [user.current]);

  const options: UsePromiseStateOptions<Response> = React.useMemo(
    () => ({
      deps: [user.current],
      onSuccess: console.log,
      onError: console.error,
      onFinal: () => console.log('finally'),
      onPending: () => console.log('pending'),
    }),
    [user.current]
  );
  /* eslint-enable react-hooks/exhaustive-deps */

  const [data, { error, status, refetch }] = usePromiseState<Response>(
    promise,
    options
  );

  return (
    <SampleSection
      title="Promise will be triggered once promise and deps inside options are valid"
      sampleCodeBlock={
        <CodeBlock
          type="typescript"
          sourceHref="/example/src/DemoUsePromiseState/DemoGithubSection.tsx"
          codeString={`const promise: UsePromiseStatePromise<ResponseType> = useCallback(() => {
  return !!current && getGithubPromise(current);
}, [current]);

const options: UsePromiseStateOptions<ResponseType> = useMemo(
  () => ({
    deps: [current],
    onSuccess: console.log,
    onError: console.error,
    onFinal: () => console.log('finally'),
    onPending: () => console.log('pending'),
  }),
  [current]
);

const [data, { error, status, refetch }] = usePromiseState<ResponseType>(
  promise,
  options
);`}
        />
      }
      sampleControls={
        <>
          <p>
            Any changes for<Code>promise</Code>or<Code>options</Code>will
            re-trigger the actions. In this example<Code>user.current</Code>will
            be the trigger variable, and once it changed, the promise function
            will be fired again. Try to press<Code>search</Code>to see the
            change or change
            <Code>username</Code>for a new search.
          </p>

          <span className="flex justify-between">
            <label>
              Github Username
              <Input
                value={user.input}
                placeholder={user.current || 'Fill your username'}
                onChange={value => {
                  setUser(prevUser => ({ ...prevUser, input: value }));
                }}
              />
            </label>

            <span>
              <Button
                text="Search"
                disabled={!user.input}
                onClick={() => {
                  setUser(prevUser => ({ current: prevUser.input, input: '' }));
                }}
              />

              <Button
                text="Refetch"
                disabled={!user.current}
                onClick={refetch}
              />
            </span>
          </span>
        </>
      }
      resultCodeBlock={
        <CodeBlock
          type="result"
          codeString={JSON.stringify({ user, status, data, error }, null, 4)}
        />
      }
    >
      {data && (
        <div className="flex p-3 space-x-2 items-center">
          <Anchor href={data.html_url}>
            <img
              src={data.avatar_url || undefined}
              className="w-20 h-20 rounded-full"
            />
          </Anchor>
          <div>
            <div>
              <b>name</b>: {data.login}
            </div>
            <div>
              <b>blog</b>:<Anchor href={'//' + data.blog}>{data.blog}</Anchor>
            </div>
            <div>
              <b>location</b>: {data.location}
            </div>
          </div>
        </div>
      )}
    </SampleSection>
  );
}
