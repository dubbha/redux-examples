import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set, reset, selectKeyword } from './keywordSlice';

export const Keyword = () => {
  const dispatch = useDispatch();
  const keyword = useSelector(selectKeyword);

  return (
    <>
      <div>Keyword:</div>
      <input value={keyword} onChange={e => dispatch(set(e.target.value))} />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
