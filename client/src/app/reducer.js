import { appActionTypes } from './actions';

const initialState = {
  isLoading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.SET_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}