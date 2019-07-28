import React, { useState } from 'react';

export const RulesOfHooks = () => {
  const [count, setCount] = useState(1);

  // Only Call Hooks at the Top Level
  // https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
  let count2, setCount2;
  if (count % 2) {
    const [count, setCount] = useState(2);    // eslint-disable-line react-hooks/rules-of-hooks

    count2 = count;
    setCount2 = setCount;
  }

  // Only Call Hooks from React Functions
  // https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions
  function getCount3() {
    const [count3] = useState(3);    // eslint-disable-line react-hooks/rules-of-hooks
    return count3;
  }

  return (
    <>
      <div>
        <label>Count #1: </label>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <div>
        <label>Count #2: </label>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      </div>
      <div>
        <label>Count #3: </label>
        <button disabled>{getCount3()}</button>
      </div>
    </>
  )
};