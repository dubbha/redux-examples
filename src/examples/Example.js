import React, { useState } from 'react';

export const Example = () => {
  const [ count, setCount ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  return (
    <>
      <div>Count #1: <button onClick={() => setCount(count+1)}>{count}</button></div>
      <div>Count #2: <button onClick={() => setCount2(count2+1)}>{count2}</button></div>
    </>
  )
};