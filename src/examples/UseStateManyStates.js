import React, { useState } from 'react';

export const UseStateManyStates = () => {
  const [age, setAge] = useState(42);                             // number
  const [fruit, setFruit] = useState('banana');                   // string
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);  // array of objects

  const [newTodo, setNewTodo] = useState('Spread the News');      // add todo input

  const handleAddTodo = () => {
    setTodos([...todos, { text: newTodo }]);
    setNewTodo('');
  }

  return (
    <>
      <div>
        <label>Age: </label>
        <input value={age} onChange={e => setAge(e.target.value)} type="number" />
      </div>
      <div>
        <label>Fruit: </label>
        <input value={fruit} onChange={e => setFruit(e.target.value)} />
      </div>
      <div>
        <label>Todos: </label>
        <textarea value={todos.map(t => t.text).join('\n')} readOnly />
      </div>
      <div className="nolabel add">
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo} disabled={!newTodo}> Add </button>
      </div>
    </>
  )
};