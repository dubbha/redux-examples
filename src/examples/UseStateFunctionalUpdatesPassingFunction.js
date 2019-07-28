import React, { useState } from 'react';

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const pow = (a, b) => a ** b;

export const UseStateFunctionalUpdatesPassingFunction = () => {
  const [fn, setFn] = useState(() => sum);

  return (
    <>
      <div>{`Function: ${fn}`}</div>
      <div>{`Result: fn(2, 3) = ${fn(2, 3)}`}</div>
      <button onClick={() => setFn(() => sum)}> sum </button>
      <button onClick={() => setFn(() => mul)}> mul </button>
      <button onClick={() => setFn(() => pow)}> pow </button>
    </>
  )
};
