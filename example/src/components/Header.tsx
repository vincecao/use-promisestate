import * as React from 'react';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop-blur text-sm fixed top-0 left-0 w-full py-1 px-5 flex justify-between">
      {children}
    </div>
  );
}
