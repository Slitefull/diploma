import { put, takeLatest } from 'redux-saga/effects'
import { history } from '../../history'
import { loginAPI } from './api'
import { message } from 'antd'
import { appActions } from '../../app/store'
import { authActions } from './store'
import { localStorageDataName } from '../../consts'
import { profileActions } from '../profile/store'


export const loginWatcher = [
  takeLatest(authActions.loginAdmin.toString(), handleLogin),
  takeLatest(authActions.logout.toString(), logout)
]

function* handleLogin(action) {
  try {
    const data = action.payload

    yield put(appActions.setLoading(true))
    const response = yield loginAPI.login(data)

    const { id, name, email, avatar, token } = response.data

    yield put(profileActions.setUserData({ id, name, email, avatar }))

    localStorage.setItem(localStorageDataName, JSON.stringify({ id, name, token }))

    yield put(authActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    message.error('Incorrect email or password!')
  }
}

function* logout() {
  localStorage.removeItem(localStorageDataName)
  yield put(authActions.setIsAuth(false))
}