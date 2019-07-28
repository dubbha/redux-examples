import React, { useState, useCallback, useEffect } from 'react';

export const UseCallbackMemoization = () => {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 🚫 This is wrong
  // useCallback does nothing when called with only one argument
  // callback will be re-created on every re-render
  const memoizedCallback = useCallback( // eslint-disable-line react-hooks/exhaustive-deps
    () =>  setTodos([...todos, { text: 'Spread the News' }]),
  );

  // ❔ Only partial memoization
  // useCallback dependent on its scope
  // callback will be re-created every time todos change
  const memoizedCallback2 = useCallback(
    () =>  setTodos([...todos, { text: 'Spread the News' }]),
    [todos]
  );

  // ✅ Independent from its scope, truly memoized
  const memoizedCallback3 = useCallback(
    () => setTodos(prevTodos => [...prevTodos, { text: 'Spread the News' }]),
    []
  );

  useEffect(() => { console.log('callback #1 changed') }, [memoizedCallback]);
  useEffect(() => { console.log('callback #2 changed') }, [memoizedCallback2]);
  useEffect(() => { console.log('callback #3 changed') }, [memoizedCallback3]);

  const [text, setText] = useState('change me to trigger re-render');

  return (
    <>
      <div>
        <label>Todos: </label>
        <textarea value={todos.map(t => t.text).join('\n')} readOnly />
      </div>
      <div>
        <label>Add: </label>
        <button onClick={memoizedCallback}>Wrong</button>
        <button onClick={memoizedCallback2}>Partial</button>
        <button onClick={memoizedCallback3}>Good</button>
      </div>
      <div className="nolabel">
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </div>
    </>
  );
};