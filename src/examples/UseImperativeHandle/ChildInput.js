import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = (props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
}

export default forwardRef(FancyInput);
