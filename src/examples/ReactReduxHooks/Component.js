import React from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

export const Component = () => {
  const todos = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);

  const dispatch = useDispatch();

  return (
    <>
      <div>Filter: {visibilityFilter}</div>
      <div>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}>Completed</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}>Active</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}>All</button>
      </div>

      <div>Todos:</div>
      <div>
        <button onClick={() => dispatch(addTodo('First Task'))}>Add First</button>
        <button onClick={() => dispatch(addTodo('First Second'))}>Add Second</button>

        <button onClick={() => dispatch(toggleTodo(0))}>Toggle First</button>
        <button onClick={() => dispatch(toggleTodo(1))}>Toggle Second</button>
      </div>

      {todos
        .filter(todo =>
          visibilityFilter === 'SHOW_ALL'
          || (visibilityFilter === 'SHOW_COMPLETED' && todo.completed)
          || (visibilityFilter === 'SHOW_ACTIVE' && !todo.completed))
        .map(todo => <div key={todo.text}>{`${todo.text} - ${todo.completed ? 'COMPLETED' : 'ACTIVE'}`}</div>)
      }
    </>
  );
}