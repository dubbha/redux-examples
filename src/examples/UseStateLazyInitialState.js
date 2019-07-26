import React, { useState } from 'react';

const someExpensiveComputation = (number) => {
  const fib = n => (n === 0 || n === 1) ? 1 : fib(n - 2) + fib(n - 1);

  console.log('computing the initial number...');
  const startTime = performance.now();
  const result = fib(number);
  console.log(`done, it's ${result}, took ${Math.floor(performance.now() - startTime)} ms`);

  return result;
}

export const UseStateLazyInitialState = () => {
  const [count, setCount] = useState(() => someExpensiveComputation(36));

  return (
    <div>
      <label>Count #1: </label>
      <button onClick={() => setCount(count+1)} >
        {count}
      </button>
    </div>
  )
};