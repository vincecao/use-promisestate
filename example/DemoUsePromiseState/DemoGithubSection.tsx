import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { usePromiseState } from '../../src';
import Button from '../components/Button';
import InputGroup from '../components/InputGroup';

type GithubResponse = {
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

function getGithubPromise(user: string): Promise<GithubResponse> {
  return fetch(`https://api.github.com/users/${user}`).then(data =>
    data.json()
  );
}

export default function DemoGithubSection(): React.ReactElement {
  const [user, setUser] = React.useState<{
    current: string | undefined;
    input: string | undefined;
  }>({ current: undefined, input: 'vincecao' });

  const memorizedPromise = React.useCallback(() => {
    return !!user.current && getGithubPromise(user.current);
  }, [user.current]);

  const memorizedDeps = React.useMemo(() => {
    return [user.current];
  }, [user.current]);

  const { data, error, status, refetch } = usePromiseState<GithubResponse>({
    promise: memorizedPromise,
    deps: memorizedDeps,
  });

  return (
    <>
      <h2 className="text-2xl">
        Promise will be triggered once all deps are valid
      </h2>
      <p>
        In this example <code>user.current</code> will be the trigger variable,
        try press `search` to see the change
      </p>
      <span className="flex justify-between">
        <label>
          Github usename
          <InputGroup
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
            text="Refetch Current"
            disabled={!user.current}
            onClick={refetch}
          />
        </span>
      </span>

      <div className="text-xs h-64 overflow-x-auto">
        <SyntaxHighlighter language="javascript">
          {JSON.stringify({ user, status, data, error }, null, 4)}
        </SyntaxHighlighter>
      </div>

      {data && (
        <div className="flex p-3 space-x-2 items-center">
          <a href={data.html_url || undefined}>
            <img src={data.avatar_url || undefined} className="w-20 h-20" />
          </a>
          <div>
            {[
              ['name', data.login],
              ['blog', data.blog],
              ['location', data.location],
            ].map(([label, value]) => (
              <div key={label}>
                <b>{label}</b>: {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
