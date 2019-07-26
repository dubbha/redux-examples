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
      <div>
        <span style={{ position: 'absolute', top: state.y, left: state.x, transform: 'scale(-1, 1)', fontSize: `${2*state.zoom}em` }} role="img" aria-label="ghost">
          👻
        </span>
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        {JSON.stringify(state)}
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <button onClick={moveRight}> {'>'} </button>
        <button onClick={moveLeft}> {'<'} </button>
        <button onClick={moveDown}> {'v'} </button>
        <button onClick={moveUp}> {'^'} </button>

        <button onClick={zoomIn}> + </button>
        <button onClick={zoomOut}> - </button>
      </div>
    </>
  )
};
