import React, { useState, useEffect } from 'react';

export const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);  // subscribe

    return () => {  // cleanup: run this callback before unmount
      window.removeEventListener('resize', handleResize);  // unsubscribe
    };
  }, []);  // empty dependency array: only fire once on mount

  useEffect(() => {
    console.log(`width: ${width}`);
  }, [width]);  // log when width changes, i.e. 

  return (
    <div>Width: {width}</div>
  )
};