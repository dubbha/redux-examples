import React from  'react';
import { VisibilityFilter } from './features/visibilityFilter/VisibilityFilter';
import { Keyword } from './features/keyword/Keyword';
import { Todos } from './features/todos/Todos';

export const Component = () => {
  return (
    <>
      <VisibilityFilter />
      <Keyword />
      <Todos />
    </>
  )
}
