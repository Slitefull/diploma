import { appActionTypes } from './actions'

const initialState = {
  isInitialized: false,
  isLoading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.SET_INITIALIZING: {
      return {...state, isInitialized: action.payload}
    }
    case appActionTypes.SET_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}