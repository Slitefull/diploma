import { call, put, takeEvery } from 'redux-saga/effects'
import { loginActions, loginActionTypes } from './actions'
import { loginAPI } from './api/api'
import { appActions } from '../../app/actions'
import { message } from 'antd'
import { history } from '../../index'


export const loginWatcher = [
  takeEvery(loginActionTypes.SET_ADMIN, handleLogin)
]

function* handleLogin(action) {
  try {
    const data = action.payload
    yield put(appActions.setLoading(true))
    yield call(loginAPI.login, data)
    yield put(loginActions.setIsAuth(true))
    yield put(appActions.setLoading(false))
    history.push('/')
  } catch (e) {
    message.error('Not ok');
  }
}