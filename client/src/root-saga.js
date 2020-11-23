import { all } from 'redux-saga/effects';
import { registerWatcher } from './pages/registration/saga'
import { loginWatcher } from './pages/login/saga';

export function* rootSaga() {
  yield all([
    ...registerWatcher,
    ...loginWatcher
  ]);
}