import React from  'react';

export const Component = ({
  todos,
  visibilityFilter,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
}) => (
  <>
    <div>Filter: {visibilityFilter}</div>
    <div>
      <button onClick={() => setVisibilityFilter('SHOW_COMPLETED')}>Completed</button>
      <button onClick={() => setVisibilityFilter('SHOW_ACTIVE')}>Active</button>
      <button onClick={() => setVisibilityFilter('SHOW_ALL')}>All</button>
    </div>

    <div>Todos:</div>
    <div>
      <button onClick={() => addTodo('First Task')}>Add First</button>
      <button onClick={() => addTodo('First Second')}>Add Second</button>

      <button onClick={() => toggleTodo(0)}>Toggle First</button>
      <button onClick={() => toggleTodo(1)}>Toggle Second</button>
    </div>

    {todos
      .filter(todo =>
        visibilityFilter === 'SHOW_ALL'
        || (visibilityFilter === 'SHOW_COMPLETED' && todo.completed)
        || (visibilityFilter === 'SHOW_ACTIVE' && !todo.completed))
      .map(todo => <div key={todo.text}>{`${todo.text} - ${todo.completed ? 'COMPLETED' : 'ACTIVE'}`}</div>)
    }
  </>
)