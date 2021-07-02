import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todos } from './reducers';

const rootReducer = combineReducers({ visibilityFilter, todos });
const store = createStore(rootReducer);
  
// get state
console.log(store.getState());    // { visibilityFilter: SHOW_ALL', todos: [] }
  
// dispatch action
store.dispatch({ type: 'ADD_TODO', text: 'First Task' });
console.log(store.getState());   // { visibilityFilter: SHOW_ALL', todos: [{ ... }] }
  
// subscribe for state changes, returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch action
store.dispatch({ type: 'ADD_TODO', text: 'Second Task' });  // this one is logged by the above subscription
  
unsubscribe();      // unregister the listener

store.dispatch({ type: 'ADD_TODO', text: 'Third Task' });  // this one is not logged









export default store;  // ignore the store being returned
