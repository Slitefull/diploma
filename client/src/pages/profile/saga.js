import { takeLatest } from 'redux-saga/effects'
import { profileActions } from './store'
import { profileApi } from './api'
import { getToken } from '../../helpers/getToken'

export const profileWatcher = [
  takeLatest(profileActions.saveProfileSettings.toString(), editProfile)
]


function* editProfile(action) {
  try {
    console.log(getToken(), 'token')
    const response = yield profileApi.saveProfileSettings(action.payload)
  } catch (e) {
    console.log('saga error')
  }
}