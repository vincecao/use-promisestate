import * as React from 'react';

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm fixed bottom-0 left-0 space-x-5 w-full py-1 flex justify-center bg-white border-t shadow">
      {children}
    </div>
  );
}
