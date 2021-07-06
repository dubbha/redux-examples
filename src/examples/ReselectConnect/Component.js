import React from  'react';

export const Component = ({
  visibilityFilter,
  keyword,
  visibleTodos,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  setKeyword,
}) => (
  <>
    <div>Filter: {visibilityFilter}</div>
    <div>
      <button onClick={() => setVisibilityFilter('SHOW_COMPLETED')}>Completed</button>
      <button onClick={() => setVisibilityFilter('SHOW_ACTIVE')}>Active</button>
      <button onClick={() => setVisibilityFilter('SHOW_ALL')}>All</button>
    </div>

    <div>Keyword:</div>
    <input value={keyword} onChange={e => setKeyword(e.target.value)} />

    <div>Todos:</div>
    <div>
      <button onClick={() => addTodo('First Task')}>Add First</button>
      <button onClick={() => addTodo('Second Task')}>Add Second</button>
      <button onClick={() => addTodo('Third Task')}>Add Third</button>
    </div>
    <div>
      <button onClick={() => toggleTodo(0)}>Toggle First</button>
      <button onClick={() => toggleTodo(1)}>Toggle Second</button>
      <button onClick={() => toggleTodo(2)}>Toggle Third</button>
    </div>

    {visibleTodos.map(todo =>
      <div key={todo.text}>{`${todo.text} - ${todo.completed ? 'COMPLETED' : 'ACTIVE'}`}</div>
    )}
  </>
)