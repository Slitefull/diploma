import { createAction, createSlice } from '@reduxjs/toolkit'

export const appActions = {
  setInit: createAction('@app/SET_INIT'),
  setLoading: createAction('@app/SET_LOADING')
}

export const appSlice = createSlice({
  name: 'app',
  initialState : {
    isInitialized: false,
    isLoading: false
  },
  reducers: {
    setInit(state, action) {
      state.isInitialized = action.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    }
  }
})


export const appReducer = appSlice.reducer
export const { setInit, setLoading } = appSlice.actions