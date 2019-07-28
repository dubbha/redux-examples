import React, { useState, useEffect } from 'react';

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('render');
  });   // fire after every completed render

  return (
    <div>
      <label>Count: </label>
      <button onClick={() => setCount(count+1)}>
        {count}
      </button>
    </div>
  )
};