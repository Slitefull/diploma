export const loginActionTypes = {
  SET_ADMIN: '@login/SET_ADMIN',
  SET_IS_AUTH: '@login/SET_IS_AUTH'
}

export const loginActions = {
  loginAdmin: data => ({
    type: loginActionTypes.SET_ADMIN,
    payload: data
  }),
  setIsAuth: payload => ({
    type: loginActionTypes.SET_IS_AUTH,
    payload
  })
}