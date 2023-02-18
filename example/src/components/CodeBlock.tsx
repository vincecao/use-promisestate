import * as React from 'react';
import { useAppearance } from '../../../';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { vscDarkPlus, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const { appearance } = useAppearance();

  return (
    <div className="text-xs my-3">
      <span className="flex justify-between">
        {type && <pre className="font-mono capitalize">{type}</pre>}
        {sourceHref && (
          <Anchor
            href={`//github.com/vincecao/use-tools/blob/master${sourceHref}`}
          >
            <pre className="font-mono text-blue-400 dark:text-blue-500 hover:text-red-600 dark:hover:text-red-900">
              source
            </pre>
          </Anchor>
        )}
      </span>

      <div className="max-h-64 overflow-x-auto">
        <SyntaxHighlighter language={language} style={appearance === 'light' ? oneLight: vscDarkPlus}>{codeString}</SyntaxHighlighter>
      </div>
      {children}
    </div>
  );
}
