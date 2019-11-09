import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
  todos: [
    { text: 'Learn Hooks' },
    { text: 'Spread the News' },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          { text: action.text }
        ]
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const ReactReduxApiHooks = () => (
  <Provider store={store}>
    <DeepTree />
  </Provider>
);

  
const DeepTree = () => (
  <div className="deepTree">
    <div>DeepTree</div>
    <Deep />
  </div>
);

const Deep = () => {
  const todos = useSelector(store => store.todos);

  return (
    <div className="deep">
      <div>Deep</div>
      <div>
        <label>Todos: </label>
        <textarea value={todos.map(t => t.text).join('\n')} readOnly />
      </div>
      <Deeper />
    </div>
  )
};

const Deeper = () => (
  <div className="deeper">
    <div>Deeper</div>
    <EvenDeeper />
  </div>
);

const EvenDeeper = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch({ type: 'add', text: newTodo });
    setNewTodo('');
  }

  return (
    <div className="evenDeeper">
      <div>Even Deeper</div>
      <div className="nolabel add">
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo} disabled={!newTodo}> Add </button>
      </div>
    </div>
  );
};

