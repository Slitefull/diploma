import { put, takeLatest } from 'redux-saga/effects'
import jwt_decode from 'jwt-decode'
import { getToken } from '../../helpers/getToken'
import { localStorageDataName } from '../../consts'
import { profileActions } from './store'
import { profileApi } from './api'
import { message } from 'antd'


export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.type, editProfile)
]

function* editProfile(action) {
  try {
    const oldToken = getToken()
    const tokenDecoded = jwt_decode(oldToken)

    const userId = tokenDecoded.userId
    const userData = Object.assign(action.payload, { userId })

    const response = yield profileApi.saveProfileSettings(userData)
    const { id, name, token } = response.data

    if (response.status === 200) {
      localStorage.removeItem(localStorageDataName)
      localStorage.setItem(localStorageDataName, JSON.stringify({ id, name, token }))

      yield put(profileActions.setUserName(name))
    }
  } catch (e) {
    message.error('Something went wrong! Try again later')
  }
}