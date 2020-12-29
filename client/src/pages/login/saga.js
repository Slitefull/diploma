import { put, takeEvery } from 'redux-saga/effects'
import { history } from '../../history'
import { appActions } from '../../app/store'
import { loginActions } from './store'
import { loginAPI } from './api'
import { message } from 'antd'


export const loginWatcher = [
  takeEvery(loginActions.loginAdmin.type, handleLogin)
]

function* handleLogin(action) {
  try {
    const data = action.payload

    yield put(appActions.setLoading(true))
    const response = yield loginAPI.login(data)

    const { userId, userName, userEmail, userAvatar, token } = response.data
    yield put(loginActions.setUserData({ userId, userName, userEmail, userAvatar }))

    localStorage.setItem('userData', JSON.stringify({ userId, token }))

    yield put(loginActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    message.error('Incorrect email or password!')
  }
}