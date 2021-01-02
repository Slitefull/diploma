import { put, takeLatest } from 'redux-saga/effects'
import { appActions } from './store'
import { authActions } from '../pages/login/store'
import { profileActions } from '../pages/profile/store'
import { localStorageDataName } from '../consts'


export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  const data = JSON.parse(localStorage.getItem(localStorageDataName))

  if (data && data.token) {
    yield put(authActions.setIsAuth(true))
    yield put(profileActions.setUserName(data.name))
  }
  yield put(appActions.setLoading(false))
}
