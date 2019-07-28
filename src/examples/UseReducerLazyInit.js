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
    case 'reset':
      return init(action.payload)
    default:
      throw new Error('unknown action type');
  }
}

export const UseReducerLazyInit = ({ initialArg = 30 }) => {  // n comes from props, using default value
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  return (
    <>
      <label>Count: {state.count} </label>
      <button onClick={() => dispatch({ type: 'reset', payload: initialArg })}> Reset </button>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
    </>
  );
}
