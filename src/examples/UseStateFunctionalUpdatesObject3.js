/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

export const UseStateFunctionalUpdatesObject3 = () => {
  const [pos, setPos] = useState({ x: 10, y: 10 });
  const [zoom, setZoom] = useState(1);

  const moveRight = () => setPos(prev => ({ ...prev, x: prev.x + 10 }));
  const moveLeft = () => setPos(prev => ({ ...prev, x: prev.x - 10 }));
  const moveUp = () => setPos(prev => ({ ...prev, y: prev.y - 10 }));
  const moveDown = () => setPos(prev => ({ ...prev, y: prev.y + 10 }));

  const zoomIn = () => setZoom(prev => prev * 1.05);
  const zoomOut = () => setZoom(prev => prev * 0.95);

  return (
    <>
      <span style={{ top: pos.y, left: pos.x, fontSize: `${4 * zoom}em` }}>
        🐠 
      </span>
      <aside>
        {`Position: ${JSON.stringify(pos)}`} {`Zoom: ${zoom}`}
      </aside>
      <footer>
        <button onClick={moveRight}> {'>'} </button>
        <button onClick={moveLeft}> {'<'} </button>
        <button onClick={moveDown}> {'v'} </button>
        <button onClick={moveUp}> {'^'} </button>

        <button onClick={zoomIn}> + </button>
        <button onClick={zoomOut}> - </button>
      </footer>
    </>
  )
};
