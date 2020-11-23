import { call, put, takeEvery } from 'redux-saga/effects'
import { registerActionTypes } from './actions'
import { registerAPI } from './api/api'
import { appActions } from '../../app/actions'
import { history } from '../../history'
import { message } from 'antd'

export const registerWatcher = [
  takeEvery(registerActionTypes.REGISTER_ADMIN, handleRegister)
]

function* handleRegister(action) {
  try {
    const data = action.payload;
    yield put(appActions.setLoading(true))
    yield call(registerAPI.register, data)
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    yield put(appActions.setLoading(false))
    message.error('User with this email already created!')
  }
}