import { createAction } from '@reduxjs/toolkit';


export const loginActions = {
  loginAdmin: createAction('@login/SET_USER'),
  setIsAuth: createAction('@login/SET_IS_AUTH'),
  setUserData: createAction('@login/SET_USER_DATA')
}

const loginSlice = ({
  name: 'login',
  initialState: {
    isAuth: false,
    profile: {}
  },
  reducers: {
    setUserData(state, action) {
      state.profile = action.payload
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload
    }
  }
})

export const loginReducer = loginSlice.reducer
export const { setUserData, setIsAuth } = loginSlice.actions