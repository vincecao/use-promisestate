import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import Anchor from './Anchor';

type CodeBlockProps = {
  codeString: string;
  sourceHref?: string;
  language?: string;
  type?: 'typescript' | 'result' | 'installation';
  children?: React.ReactNode;
};

export default function CodeBlock({
  codeString,
  sourceHref,
  language = 'typescript',
  type,
  children,
}: CodeBlockProps) {
  return (
    <div className="text-xs my-3">
      <span className="flex justify-between">
        {type && <pre className="font-mono">{type}</pre>}
        {sourceHref && (
          <Anchor
            href={`//github.com/vincecao/use-tools/blob/master${sourceHref}`}
          >
            <pre className="font-mono text-blue-600 hover:text-red-600">
              source
            </pre>
          </Anchor>
        )}
      </span>

      <div className="max-h-64 overflow-x-auto">
        <SyntaxHighlighter language={language}>{codeString}</SyntaxHighlighter>
      </div>
      {children}
    </div>
  );
}
