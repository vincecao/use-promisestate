import * as React from 'react';

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-rose-100 dark:bg-rose-900 px-1 font-mono text-sm rounded-sm mx-1">
      {children}
    </code>
  );
}
