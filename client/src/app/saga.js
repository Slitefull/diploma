import { put, takeLatest } from 'redux-saga/effects'
import { appActions } from './store'
import { authActions } from '../pages/login/store'
import { profileActions } from '../pages/profile/store'
import { localStorageDataName } from '../consts'
import jwt_decode from 'jwt-decode'


export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  const data = JSON.parse(localStorage.getItem(localStorageDataName))

  if (data) {
    const { token } = data
    const tokenDecoded = jwt_decode(token)
    const { name, role } = tokenDecoded

    yield put(authActions.setIsAuth(true))
    yield put(profileActions.setUserData({ name, role }))
  }

  yield put(appActions.setLoading(false))
}
