import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { users } from './reducers';
import { fetch } from './actions';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ users });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

store.dispatch(fetch('WRONG_ID')); // this should fail

for (let i = 1; i < 10; i++) {
  setTimeout(() => store.dispatch(fetch(i)), 500 * i);
}
















export default store;  // ignore the store being returned
