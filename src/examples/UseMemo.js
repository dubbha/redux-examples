import React, { useState, useEffect, useMemo } from 'react';
import { someExpensiveComputation } from './utils';

export const UseMemo = () => {
  const [n, setN] = useState(1);
  const [res, setRes] = useState(1);
  
  const memoizedValue = useMemo(
    () => someExpensiveComputation(n),
    [n],
  );

  useEffect(() => { console.log(`value changed: ${memoizedValue}`) }, [memoizedValue]);

  const [text, setText] = useState('change me to trigger re-render');

  return (
    <>
      <label>n: </label>
      <input value={n} onChange={e => { setN(Number(e.target.value)); setRes('?'); }} type="number" min={0} />

      <div>
        <label>fib(n): </label>
        <button onClick={() => setRes(memoizedValue)} className="heavy fullInput">
          {`fib(n) = ${res}`}
        </button>
      </div>
      <div className="nolabel">
        <input value={text} onChange={e => setText(e.target.value)} />
      </div>
    </>
  );
};