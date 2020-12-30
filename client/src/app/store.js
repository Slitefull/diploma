import {createSlice} from '@reduxjs/toolkit'

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

const { setInit, setLoading } = appSlice.actions

export const appActions = { setInit, setLoading }
export const appReducer = appSlice.reducer