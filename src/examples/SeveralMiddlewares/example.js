import { combineReducers, createStore, applyMiddleware } from 'redux';
import { visibilityFilter, todos } from './reducers';
import { logger, advancedLogger } from './middlewares';

const rootReducer = combineReducers({ visibilityFilter, todos });

const store = createStore(
  rootReducer,
  { // preloaded state as the second argument
    todos: [{ type: 'ADD_TODO', text: 'First Task' }],
    visibilityFilter: 'SHOW_ACTIVE',
  },
  applyMiddleware(logger, advancedLogger), // enhancer as the third argument, several middlewares
);

  
store.dispatch({ type: 'ADD_TODO', text: 'Second Task' });
store.dispatch({ type: 'ADD_TODO', text: 'Third Task' });









export default store;  // ignore the store being returned
