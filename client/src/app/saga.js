import { takeLatest, put } from 'redux-saga/effects'
import { loginActions } from '../pages/login/store'
import { appActions } from './store'


export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  const data = JSON.parse(localStorage.getItem('userData'))

  if (data && data.token) yield put(loginActions.setIsAuth(true))
  yield put(appActions.setLoading(false))
}