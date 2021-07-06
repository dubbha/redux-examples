import { takeEvery, call, put, select } from '@redux-saga/core/effects';
import { FETCH, fetchSucceeded, fetchFailed, fetchBlocked } from '../actions';

function* workerSaga({ uid }) {              // worker saga
  const limitReached = yield select(state => state.users.limitReached);
  if (limitReached) return yield put(fetchBlocked('Limit reached'));

  try {
    const user = yield call(() =>
      fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.status);
        })
    );
    yield put(fetchSucceeded(user));
  } catch (e) {
    yield put(fetchFailed(e.message));
  }
}

export function* fetchSaga() {               // watcher saga
  yield takeEvery(FETCH, workerSaga);        // or takeLatest
}
