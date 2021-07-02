import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todos } from './reducers';

const rootReducer = combineReducers({ visibilityFilter, todos });
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // enhancer as a second argument
);

store.dispatch({ type: 'ADD_TODO', text: 'First Task' }); 
store.dispatch({ type: 'ADD_TODO', text: 'Second Task' });
store.dispatch({ type: 'ADD_TODO', text: 'Third Task' });













// ignore the store being exported
export default store
