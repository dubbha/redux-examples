import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set, selectVisibilityFilter } from './visibilityFilterSlice';

export const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(selectVisibilityFilter);

  return (
    <>
      <div>Filter: {visibilityFilter}</div>
      <div>
        <button onClick={() => dispatch(set('SHOW_COMPLETED'))}>Completed</button>
        <button onClick={() => dispatch(set('SHOW_ACTIVE'))}>Active</button>
        <button onClick={() => dispatch(set('SHOW_ALL'))}>All</button>
      </div>
    </>
  );
}
