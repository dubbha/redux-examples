import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { visibilityFilter, todos } from './reducers';
import { logger } from './middlewares';

const rootReducer = combineReducers({ visibilityFilter, todos });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)), // or just composeWithDevTools()
);

store.dispatch({ type: 'ADD_TODO', text: 'First Task' }); 
store.dispatch({ type: 'ADD_TODO', text: 'Second Task' });
store.dispatch({ type: 'ADD_TODO', text: 'Third Task' });













// ignore the store being exported
export default store
