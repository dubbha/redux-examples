import React from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter, setKeyword } from './actions';
import { getVisibilityFilter, getKeyword, getVisibleTodosFilteredByKeyword } from './selectors';

export const Component = () => {
  const visibilityFilter = useSelector(getVisibilityFilter);
  const keyword = useSelector(getKeyword);
  const visibleTodos = useSelector(getVisibleTodosFilteredByKeyword);

  const dispatch = useDispatch();

  return (
    <>
      <div>Filter: {visibilityFilter}</div>
      <div>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}>Completed</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}>Active</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}>All</button>
      </div>

      <div>Keyword:</div>
      <input value={keyword} onChange={e => dispatch(setKeyword(e.target.value))} />

      <div>Todos:</div>
      <div>
        <button onClick={() => dispatch(addTodo('First Task'))}>Add First</button>
        <button onClick={() => dispatch(addTodo('Second Task'))}>Add Second</button>
        <button onClick={() => dispatch(addTodo('Third Task'))}>Add Third</button>
      </div>
      <div>
        <button onClick={() => dispatch(toggleTodo(0))}>Toggle First</button>
        <button onClick={() => dispatch(toggleTodo(1))}>Toggle Second</button>
        <button onClick={() => dispatch(toggleTodo(2))}>Toggle Third</button>
      </div>

      {visibleTodos.map(todo =>
        <div key={todo.text}>{`${todo.text} - ${todo.completed ? 'COMPLETED' : 'ACTIVE'}`}</div>
      )}
    </>
  );
}