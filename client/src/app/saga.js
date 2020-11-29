import { takeLatest, put } from 'redux-saga/effects'
import { appActions, appActionTypes } from './actions'
import { loginActions } from '../pages/login/actions';


export const appWatcher = [
  takeLatest(appActionTypes.SET_INIT, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  const data = JSON.parse(localStorage.getItem('userData'))

  if (data && data.token) yield put(loginActions.setIsAuth(true))
  yield put(appActions.setLoading(false))
}