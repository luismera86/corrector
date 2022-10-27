import { configureStore } from '@reduxjs/toolkit'
import deliveryOneReducer from '../features/deliveryOneSlice/deliveryOneSlice'

export const store = configureStore({
  reducer: {
    deliveryOne: deliveryOneReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
