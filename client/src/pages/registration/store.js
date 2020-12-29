import { createAction, createSlice } from '@reduxjs/toolkit'


export const registerActions = {
  registerAdmin: createAction('@register/REGISTER_ADMIN')
}

const registerSlice = createSlice({
  name: 'register',
  initialState: {},
  reducers: {}
})