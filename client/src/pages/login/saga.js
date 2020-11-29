import { put, takeEvery } from 'redux-saga/effects'
import { history } from '../../history'
import { loginActions, loginActionTypes } from './actions'
import { loginAPI } from './api/api'
import { appActions } from '../../app/actions'
import { message } from 'antd'


export const loginWatcher = [
  takeEvery(loginActionTypes.SET_USER, handleLogin)
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