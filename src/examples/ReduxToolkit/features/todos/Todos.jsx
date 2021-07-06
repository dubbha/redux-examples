import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggle, selectVisibleTodosFilteredByKeyword } from './todosSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const visibleTodos = useSelector(selectVisibleTodosFilteredByKeyword);

  return (
    <>
      <div>Todos:</div>
      <div>
        <button onClick={() => dispatch(add('First Task'))}>Add First</button>
        <button onClick={() => dispatch(add('Second Task'))}>Add Second</button>
        <button onClick={() => dispatch(add('Third Task'))}>Add Third</button>
      </div>
      <div>
        <button onClick={() => dispatch(toggle(0))}>Toggle First</button>
        <button onClick={() => dispatch(toggle(1))}>Toggle Second</button>
        <button onClick={() => dispatch(toggle(2))}>Toggle Third</button>
      </div>

      {visibleTodos.map(todo =>
        <div key={todo.text}>{`${todo.text} - ${todo.completed ? 'COMPLETED' : 'ACTIVE'}`}</div>
      )}
    </>
  );
}


