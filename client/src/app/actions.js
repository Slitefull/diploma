export const appActionTypes = {
  SET_INIT: '@app/SET_INIT',
  SET_LOADING: '@app/SET_LOADING',
}

export const appActions = {
  setInit: () => ({
    type: appActionTypes.SET_INIT
  }),
  setLoading: payload => ({
    type: appActionTypes.SET_LOADING,
    payload
  })
}