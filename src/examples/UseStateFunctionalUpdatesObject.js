/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

export const UseStateFunctionalUpdatesObject = () => {
  const [pos, setPos] = useState({
    top: 10,
    left: 10,
  });

  return (
    <>
      <span className="emoji" style={{ top: pos.top, left: pos.left }}> 🐠 </span>
      <aside>{`Position: ${JSON.stringify(pos, null, 2)}`}</aside>
      <footer>
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
      </footer>
    </>
  )
};
