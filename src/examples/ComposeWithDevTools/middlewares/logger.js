// middleware
export const logger = store => next => action => {
  console.log('state', store.getState(), 'action', action);
  return next(action);        // call the next dispatch method in the middleware chain
};