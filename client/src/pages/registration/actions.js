export const registerActionTypes = {
  REGISTER_ADMIN: '@register/REGISTER_ADMIN',
}

export const registerActions = {
  registerAdmin: data => ({
    type: registerActionTypes.REGISTER_ADMIN,
    payload: data
  })
}
