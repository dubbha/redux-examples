import React, { useState } from 'react';
import { someExpensiveComputation } from './utils';

export const UseStateHeavyInitialState = () => {
  const [count, setCount] = useState(someExpensiveComputation(36));

  return (
    <div>
      <label>Count #1: </label>
      <button onClick={() => setCount(count + 1)} className="heavy">
        {count}
      </button>
    </div>
  )
};