import React, { useState } from 'react';

export const UseStateTwoStates = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div>
        <label>Count #1: </label>
        <button onClick={() => setCount(count + 1)} >{count}</button>
      </div>
      <div>
        <label>Count #2: </label>
        <button onClick={() => setCount2(count2 + 1)} >{count2}</button>
      </div>
    </>
  )
};