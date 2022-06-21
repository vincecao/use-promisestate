import * as React from 'react';

export default function Button({
  children,
  onClick,
  disabled,
  text,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
}): React.ReactElement {
  return (
    <button
      type="button"
      className="m-1 p-1 rounded hover:opacity-50 border"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
}
