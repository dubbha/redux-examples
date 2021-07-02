import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { users } from './reducers';
import { fetchUserConditionally } from './actions';

const rootReducer = combineReducers({ users });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

for (let i = 1; i < 10; i++) {
  setTimeout(() => store.dispatch(fetchUserConditionally(i)), 500 * i)
}













export default store;  // ignore the store being returned
