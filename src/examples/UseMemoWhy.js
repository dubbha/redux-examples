import React, { useState, useEffect } from 'react';
import { someExpensiveComputation } from './utils';

export const UseMemoWhy = () => {
  const [n, setN] = useState(1);
  const [res, setRes] = useState(1);

  const value = someExpensiveComputation(n);

  useEffect(() => { console.log(`value changed: ${value}`) }, [value]);

  const [text, setText] = useState('change me to trigger re-render');

  return (
    <>
      <label>n: </label>
      <input value={n} onChange={e => { setN(Number(e.target.value)); setRes('?'); }} type="number" min={0} />

      <div className="nolabel">
        <button onClick={() => setRes(value)} className="heavy fullInput">
          {`fib(n) = ${res}`}
        </button>
      </div>
      <div className="nolabel">
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </div>
    </>
  );
};