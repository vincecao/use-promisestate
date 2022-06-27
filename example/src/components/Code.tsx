import * as React from 'react';

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-red-100 px-1 font-mono text-sm rounded-sm mx-1">
      {children}
    </code>
  );
}
