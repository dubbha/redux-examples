import React, { useRef, useEffect } from 'react';
import ChildInput from './ChildInput';

export const UseImperativeHandle = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}