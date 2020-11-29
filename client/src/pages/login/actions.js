export const loginActionTypes = {
  SET_USER: '@login/SET_USER',
  SET_USER_DATA: '@login/SET_USER_DATA',
  SET_IS_AUTH: '@login/SET_IS_AUTH'
}

export const loginActions = {
  loginAdmin: data => ({
    type: loginActionTypes.SET_USER,
    payload: data
  }),
  setUserData: data => ({
    type: loginActionTypes.SET_USER_DATA,
    payload: data
  }),
  setIsAuth: payload => ({
    type: loginActionTypes.SET_IS_AUTH,
    payload
  })
}