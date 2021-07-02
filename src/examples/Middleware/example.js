import { combineReducers, createStore, applyMiddleware } from 'redux';
import { visibilityFilter, todos } from './reducers';

const rootReducer = combineReducers({ visibilityFilter, todos });

// middleware
const logger = store => next => action => {
  console.log('state', store.getState(), 'action', action);
  return next(action);        // call the next dispatch method in the middleware chain
};

// enhancer can be passed as a second argument if no preloadedState
const store = createStore(rootReducer, applyMiddleware(logger));

  
store.dispatch({ type: 'ADD_TODO', text: 'First Task' });
store.dispatch({ type: 'ADD_TODO', text: 'Second Task' });
store.dispatch({ type: 'ADD_TODO', text: 'Third Task' });









export default store;  // ignore the store being returned
