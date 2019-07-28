import React, { useState } from 'react';

export const UseStateFunctionalUpdates = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <label>Count: {count}</label>
      <button onClick={() => setCount(0)} > Reset </button>
      <button onClick={() => setCount(count - 1)} > - </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)} > + </button>
    </>
  )
};
