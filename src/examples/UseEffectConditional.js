import React, { useState, useEffect } from 'react';

export const UseEffectConditional = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count changed: ${count}`);
  }, [count]);   // dependency array: only fire when count changes

  const [text, setText] = useState('change me to trigger re-render');

  return (
    <>
      <div>
        <label>Count: </label>
        <button onClick={() => setCount(count+1)} className="fullInput">
          {count}
        </button>
      </div>
      <div className="nolabel">
        <input value={text} onChange={e => setText(e.target.value)} />
      </div>
    </>
  )
};