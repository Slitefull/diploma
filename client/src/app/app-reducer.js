const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

const initialState = {
  isLoading: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}

export const toggleLoading = loading => ({type: TOGGLE_IS_LOADING, payload: loading})