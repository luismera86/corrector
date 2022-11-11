import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const deliveryTowSlice = createSlice({
  name: 'deliveryTow',
  initialState,
  reducers: {
    setDeliveryTow: (state, action) => {
      state = { ...state, ...action.payload }
      return action.payload
    },
    getDeliveryTow: (state) => {
      return state
    },
  },
})

export const { setDeliveryTow, getDeliveryTow, setDevolution } = deliveryTowSlice.actions

export default deliveryTowSlice.reducer
