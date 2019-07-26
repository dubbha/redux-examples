import React, { useState } from 'react';

export const UseStateFunctionalUpdatesObject = () => {
  const [pos, setPos] = useState({
    top: 10,
    left: 10,
  });

  return (
    <>
      <div>
        <span style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'scale(-1, 1)', fontSize: '2em' }} role="img" aria-label="ghost">
          👻
        </span>
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        {JSON.stringify(pos)}
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <button onClick={() => setPos(
          prevPos => (
            {
              ...prevPos,
              left: prevPos.left + 10,
            }
          )
        )}> {'>'} </button>

        <button onClick={() => setPos(prevPos => ({ ...prevPos, left: prevPos.left - 10  }))} > {'<'} </button>
        <button onClick={() => setPos(prevPos => ({ ...prevPos, top: prevPos.top + 10  }))} > {'v'} </button>
        <button onClick={() => setPos(prevPos => ({ ...prevPos, top: prevPos.top - 10  }))} > {'^'} </button>
      </div>
    </>
  )
};
