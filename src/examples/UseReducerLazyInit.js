import React, { useReducer } from 'react';
import { someExpensiveComputation } from './utils';

const init = n => {
  return {count: someExpensiveComputation(n)};
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error('unknown action type');
  }
}

export const UseReducerLazyInit = ({ n = 30 }) => {  // n comes from props, using default value
  const [state, dispatch] = useReducer(reducer, n, init);
  return (
    <>
      <label>Count: {state.count} </label>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
