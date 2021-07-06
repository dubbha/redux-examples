import { all } from 'redux-saga/effects';
import { fetchSaga } from './users';

export function* rootSaga() {   // root saga
  yield all([
    fetchSaga(),
  ]);
}