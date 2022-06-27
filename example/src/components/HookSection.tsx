import * as React from 'react';

type HookSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function HookSection({ title, children }: HookSectionProps) {
  return (
    <div>
      <p className="text-3xl">{title}</p>
      {children}
    </div>
  );
}
