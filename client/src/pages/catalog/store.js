import { createSlice } from '@reduxjs/toolkit'

const storeName = 'catalog'

const initialState = {
  goods: {}
}

const catalogSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goods = action.payload
    }
  }
})

export const catalogActions = {
  setGoods: catalogSlice.actions.setGoods
}

export const catalogReducer = catalogSlice.reducer