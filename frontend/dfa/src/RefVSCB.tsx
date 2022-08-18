import React, { memo, useCallback, useRef, useState } from 'react';

const HelloWorld = memo(({ submit }: any) => {
  console.log('hi world');
  return <div>{submit}</div>;
});

const useTest = (): { test: React.MutableRefObject<number> } => {
  const [first, setfirst] = useState('second');
  const test = useRef(1);
  console.log(new Date());
  return { test: test };
};

// const HelloWorld = ({ submit }: any) => {
//   console.log('hi world');
//   return <div>{submit}</div>;
// };
export default () => {
  // const [first1, setfirst1] = useState(1);
  const { test } = useTest();

  // const submit1 = useCallback(() => console.log('i am submit1'), []);
  // const submit2 = useRef(() => console.log('i am submit2')).current;

  return (
    <>
      {console.log(1234)}
      <button
        onClick={() => {
          test.current += 1;
          console.log(12);
          console.log(test.current);
        }}
      >
        {test.current}
      </button>
      ;
      <HelloWorld submit={[12]} />
    </>
  );
};
