import { takeLatest } from 'redux-saga/effects'

const editProfileWatcher = [
  takeLatest()
]


function* editProfile(action){
  try {
    const { name } = action.payload
  } catch (e){

  }
}