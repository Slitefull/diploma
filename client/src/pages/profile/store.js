import { createAction, createSlice } from '@reduxjs/toolkit'

const storeName = 'profile'

const initialState = {
  name: '',
  role: ''
}

const profileSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUserName(state, action) {
      state.name = action.payload
    }
  }
})

export const profileActions = {
  setUserName: profileSlice.actions.setUserName,
  saveProfileSettings: createAction(`${storeName}/saveProfileSettings`)
}

export const profileReducer = profileSlice.reducer