import React, { useState, useEffect } from 'react';

export const ExhaustiveDeps = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);    // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <label>Count #1: </label>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
};