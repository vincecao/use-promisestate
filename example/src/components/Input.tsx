import classNames from 'classnames';
import * as React from 'react';

type InputParams = {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

function Input(
  {
    type = 'text',
    value,
    defaultValue,
    disabled,
    placeholder,
    onChange,
  }: InputParams,
  ref: React.Ref<HTMLInputElement>
): React.ReactElement {
  return (
    <input
      className={classNames(
        'm-1 p-1 px-2 border rounded bg-white dark:bg-stone-900 border-stone-500 focus:outline-none focus:ring focus:ring-cyan-300/20',
        {
          'cursor-not-allowed opacity-50': disabled,
        }
      )}
      ref={ref}
      type={type}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => {
        onChange && onChange(target.value);
      }}
    />
  );
}

export default React.forwardRef(Input);
