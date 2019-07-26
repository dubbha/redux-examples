import React, { useState } from 'react';

export const UseStateManyStates = () => {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');

  const [todos, setTodos] = useState([
    { text: 'Learn Hooks' },
    { text: 'Spread the News' },
  ]);

  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, { text: todo }]);
    setTodo('');
  }

  return (
    <>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      </div>
      <div>
        <label>Fruit: </label>
        <input type="text" value={fruit} onChange={e => setFruit(e.target.value)} />
      </div>
      <div>
        <div>
          <label>Todos: </label>
          <textarea value={todos.map(t => t.text).join('\n')} readOnly />
        </div>
        <div>
          <input type="text" value={todo} onChange={e => setTodo(e.target.value)} style={{ width: '40vw', marginLeft: '20vw' }}/>
          <button onClick={handleAddTodo} style={{ width: '10vw' }}>Add</button>
        </div>
      </div>
    </>
  )
};