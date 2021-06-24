import React, { useState } from 'react';

export const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <label>Count: </label>
      <button onClick={() => setCount(count + 1)} >
        {count}
      </button>
    </div>
  )
};