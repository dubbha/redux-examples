/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useRef, useEffect } from 'react';

export const UseRefMeasureResize = () => {
  const [zoom, setZoom] = useState(1);
  const [size, setSize] = useState();

  const zoomIn = () => setZoom(prev => prev * 1.05);
  const zoomOut = () => setZoom(prev => prev * 0.95);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect();
      setSize({
        width: rect.width.toFixed(),
        height: rect.height.toFixed(),
      });
    }
  }, [zoom]);

  return (
    <>
      <span ref={ref} className="emoji" style={{ fontSize: `${4 * zoom}em` }} >
        🎣 
      </span>
      <aside>
        {`Size: ${JSON.stringify(size, null, 2)}`}
      </aside>
      <footer>
        <button onClick={zoomIn}> + </button>
        <button onClick={zoomOut}> - </button>
      </footer>
    </>
  )
};
