// middleware
export const advancedLogger = ({ getState }) => next => action => {
  console.log('Advanced Logger: will dispatch', action)

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action)

  console.log('Advanced Logger: state after dispatch', getState());

  // This will likely be the action itself, unless a middleware further in chain changed it.
  return returnValue;
};