import * as React from 'react';

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-red-100 p-1 font-mono text-sm rounded-md">
      {children}
    </code>
  );
}
