import { call, put, takeEvery } from 'redux-saga/effects'
import { registerActionTypes } from './actions'
import { registerAPI } from './api/api'
import { appActions } from '../../app/actions';

export const registerWatcher = [
  takeEvery(registerActionTypes.REGISTER_ADMIN, handleRegister)
]

function* handleRegister(action) {
  const data = action.payload;
  yield put(appActions.setLoading(true))
  yield call(registerAPI.register, data)
  yield put(appActions.setLoading(false))
}