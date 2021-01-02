import { put, takeEvery } from 'redux-saga/effects'
import { authActions } from '../login/store'
import { appActions } from '../../app/store'
import { registerAPI } from './api'
import { history } from '../../history'
import { message } from 'antd'


export const registerWatcher = [
  takeEvery(authActions.registerAdmin.type, handleRegister)
]

function* handleRegister(action) {
  try {
    const data = action.payload;
    yield put(appActions.setLoading(true))
    yield registerAPI.register(data)
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    yield put(appActions.setLoading(false))
    message.error('User with this email already created!')
  }
}