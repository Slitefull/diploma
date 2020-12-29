import { put, takeEvery } from 'redux-saga/effects'
import { appActions } from '../../app/store'
import { registerActions } from './store'
import { registerAPI } from './api'
import { history } from '../../history'
import { message } from 'antd'


export const registerWatcher = [
  takeEvery(registerActions.registerAdmin.type, handleRegister)
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