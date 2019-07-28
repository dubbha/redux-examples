/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

export const UseStateFunctionalUpdatesObject2 = () => {
  const [state, setState] = useState({
    x: 10,
    y: 10,
    zoom: 1,
  });

  const moveRight = () => setState(prevState => ({ ...prevState, x: prevState.x + 10 }));
  const moveLeft = () => setState(prevState => ({ ...prevState, x: prevState.x - 10 }));
  const moveUp = () => setState(prevState => ({ ...prevState, y: prevState.y - 10 }));
  const moveDown = () => setState(prevState => ({ ...prevState, y: prevState.y + 10 }));

  const zoomIn = () => setState(prevState => ({ ...prevState, zoom: prevState.zoom * 1.05 }));
  const zoomOut = () => setState(prevState => ({ ...prevState, zoom: prevState.zoom * 0.95 }));

  return (
    <>
      <span style={{ top: state.y, left: state.x, fontSize: `${4 * state.zoom}em` }}>
        🐠
      </span>
      <aside>
        {`State: ${JSON.stringify(state)}`}
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
