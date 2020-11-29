import { loginActionTypes } from './actions';


const initialState = {
  isAuth: false,
  profile: {}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActionTypes.SET_IS_AUTH: {
      return {...state, isAuth: action.payload}
    }
    case loginActionTypes.SET_USER_DATA: {
      return {...state, profile: action.payload}
    }
    default:
      return state
  }
}