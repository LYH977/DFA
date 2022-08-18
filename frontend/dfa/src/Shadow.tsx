import { useCallback, useRef, useState } from 'react';

const useShadowState = (init: string) => {
  const [state, setstate] = useState(init);
  const shadow = useRef(state);
  const setshadowandstate = useCallback((nextval) => {
    if (typeof nextval === 'function') {
      setstate((s) => {
        shadow.current = nextval(s);
        return shadow.current;
      });
    } else {
      shadow.current = nextval;
      setstate(nextval);
    }
  }, []);

  return { setshadowandstate, shadow };
};

const Hi = ({ submit }: any) => {
  const [first, setfirst] = useState(1);
  console.log('hi');
  return <button onClick={() => setfirst((f) => f + 1)}>2323</button>;
};

export const Shadow = () => {
  const { setshadowandstate, shadow } = useShadowState('');
  const submit = useCallback(() => {
    console.log(shadow.current);
  }, []);

  return (
    <>
      {console.log(1234)}
      <input
        type='text'
        // value={state as string}
        onChange={(e) => setshadowandstate(e.target.value) as any}
      />
      <Hi submit={submit} />
    </>
  );
};
