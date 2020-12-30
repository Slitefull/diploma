import {put, takeLatest} from 'redux-saga/effects'
import {history} from '../../history'
import {loginAPI} from './api'
import {message} from 'antd'
import {appActions} from '../../app/store'
import {authActions} from './store'
import {localStorageDataName} from "../../consts";


export const loginWatcher = [
  takeLatest(authActions.loginAdmin.toString(), handleLogin),
  takeLatest(authActions.logout.toString(), logout)
]

function* handleLogin(action) {
  try {
    const data = action.payload

    yield put(appActions.setLoading(true))
    const response = yield loginAPI.login(data)

    const { userId, userName, userEmail, userAvatar, token } = response.data
    yield put(authActions.setUserData({ userId, userName, userEmail, userAvatar }))

    localStorage.setItem(localStorageDataName, JSON.stringify({ userId, userName, token }))

    yield put(authActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    message.error('Incorrect email or password!')
  }
}

function* logout() {
  console.log('work')
  localStorage.removeItem(localStorageDataName)
  yield put(authActions.setIsAuth(false))
}