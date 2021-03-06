import { put, takeLatest } from 'redux-saga/effects'
import { appActions } from './store'
import { authActions } from '../pages/login/store'
import { profileActions } from '../pages/profile/store'
import { userRoles } from '../helpers/getRole'
import { localStorageDataName } from '../consts'
import jwt_decode from 'jwt-decode'
import { profileApi } from '../pages/profile/api'
import { message } from 'antd'

export const appWatcher = [
  takeLatest(appActions.setInit.type, initHandle)
]

function* initHandle() {
  yield put(appActions.setLoading(true))
  // const data = JSON.parse(localStorage.getItem(localStorageDataName))

  // if (data) {
  //   const { token } = data
  //   const tokenDecoded = jwt_decode(token)
  //   const { name, role } = tokenDecoded
  //
  //   if (role === userRoles.superAdmin) {
  //     const getAllUsers = yield profileApi.getAllUsers()
  //
  //     if (getAllUsers.status === 200) {
  //       const { data: users } = getAllUsers
  //       yield put(profileActions.setUsers(users))
  //     } else {
  //       message.error('Error with getting all users!')
  //     }
  //   }

    // yield put(profileActions.setUserData({ name, role }))
    // yield put(authActions.setIsAuth(true))
  // }
  yield put(appActions.setLoading(false))
}
