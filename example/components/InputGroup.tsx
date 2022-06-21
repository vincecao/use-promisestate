import * as React from 'react';

export default function InputGroup({
  onChange,
  value,
  placeholder,
}: {
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
}): React.ReactElement {
  return (
    <input
      className="m-1 p-1 border rounded bg-white"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => {
        onChange && onChange(target.value);
      }}
    />
  );
}
