import classNames from 'classnames';
import * as React from 'react';

type ButtonParams = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

function Button(
  { type = 'button', disabled, text, children, onClick }: ButtonParams,
  ref: React.Ref<HTMLButtonElement>
): React.ReactElement {
  return (
    <button
      ref={ref}
      type={type}
      className={classNames(
        'm-1 p-1 px-2 text-sm rounded hover:opacity-50 border dark:bg-stone-900 border-stone-500',
        {
          'cursor-not-allowed opacity-50': disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
