import React, { useRef } from 'react';

interface TEsting extends React.ComponentPropsWithRef<'input'> {}

const TestHtmlInputType = () => {
  const first = useRef<HTMLInputElement>(null);
  return (
    <>
      <button onClick={() => first.current?.focus()}>focus</button>
      <InputWrapper type='input' ref={first} />
      <input type='text' />
    </>
  );
};

const InputWrapper = React.forwardRef(
  ({ ...props }: TEsting, ref: React.LegacyRef<HTMLInputElement>) => (
    <input type='text' {...props} ref={ref} />
  )
);

export default TestHtmlInputType;
