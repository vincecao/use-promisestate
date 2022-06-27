import * as React from 'react';

type AnchorProps = {
  href?: string | null;
  children: React.ReactNode;
};

export default function Anchor({ href, children }: AnchorProps) {
  return (
    <a href={href || undefined} className="underline font-semibold mx-1">
      {children}
    </a>
  );
}
