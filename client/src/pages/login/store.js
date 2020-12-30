import { createAction, createSlice } from '@reduxjs/toolkit'

const storeName = 'auth'

const initialState = {
  isAuth: false,
  profile: {}
}

const authSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setUserData(state, action) {
      state.profile = action.payload
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
    setUserName(state, action) {
      state.profile.userName = action.payload
    }
  }
})

const { setUserData, setIsAuth, setUserName } = authSlice.actions

export const authActions = {
  registerAdmin: createAction(`${storeName}/register_admin`),
  loginAdmin: createAction(`${storeName}/login_admin`),
  logout: createAction(`${storeName}/logout`),
  setUserData,
  setIsAuth,
  setUserName,
}

export const authReducer = authSlice.reducer