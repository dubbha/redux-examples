/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useCallback } from 'react';

export const UseCallbackRef = () => {
  const [zoom, setZoom] = useState(1);
  const [size, setSize] = useState();
  const [show, setShow] = useState(true);

  const zoomIn = () => setZoom(prev => prev * 1.05);
  const zoomOut = () => setZoom(prev => prev * 0.95);

  const refCallback = useCallback(node => {
    if (node !== null) {
      console.log('element mounted');
      const rect = node.getBoundingClientRect();
      setSize({
        height: rect.height.toFixed(),
        width: rect.width.toFixed(),
      });
    } else {
      console.log('element unmounted')
    }
  }, []);

  return (
    <>
      {show && 
        <span
          ref={refCallback}
          className="emoji"
          style={{ fontSize: `${4 * zoom}em` }}
        >
          🎣
        </span>
      }
      <aside>
        {`Size: ${JSON.stringify(size)}`}
      </aside>
      <footer>
        <button onClick={zoomIn}> + </button>
        <button onClick={zoomOut}> - </button>
        <button onClick={() => setShow(false)}> Unmount </button>
        <button onClick={() => setShow(true)}> Mount </button>
      </footer>
    </>
  )
};
