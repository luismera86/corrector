import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const deliveryOneSlice = createSlice({
  name: 'deliveryOne',
  initialState,
  reducers: {
    setDeliveryOne: (state, action) => {
      state = { ...state, ...action.payload }
      return action.payload
    },
    getDeliveryOne: (state, action) => {
      return state
    },
  },
})

export const { setDeliveryOne, getDeliveryOne, setDevolution } = deliveryOneSlice.actions

export default deliveryOneSlice.reducer
