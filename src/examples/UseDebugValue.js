import React, { useState, useEffect, useDebugValue } from 'react';

// Custom Hook!
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);  // subscribe

    return () => {  // cleanup: run this callback before unmount
      window.removeEventListener('resize', handleResize);  // unsubscribe
    };
  }, []);

  useDebugValue(width > 400 ? 'wide' : 'narrow');

  return width;
}

export const UseDebugValue = () => {
  const width = useWindowWidth();  // use custom hook

  return <div>Width: {width}</div>;
};