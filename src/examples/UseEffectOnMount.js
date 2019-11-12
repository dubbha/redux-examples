import React, { useState, useEffect } from 'react';

export const UseEffectOnMount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount');
  }, []);  // only fire once on mount, like componentDidMount

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