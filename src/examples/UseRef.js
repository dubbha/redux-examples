import React, { useRef } from 'react';


export const UseRef = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();     // `current` points to the mounted text input element
  };

  return (
    <>
      <input ref={ref}/>
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
