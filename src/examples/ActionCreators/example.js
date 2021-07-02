import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todos } from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

const rootReducer = combineReducers({ visibilityFilter, todos });
const store = createStore(rootReducer);
  
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('First Task'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

unsubscribe();









export default store;  // ignore the store being returned
