export const appActionTypes = {
  SET_LOADING: '@app/SET_LOADING'
}

export const appActions = {
  setLoading: payload => ({
    type: appActionTypes.SET_LOADING,
    payload
  })
}