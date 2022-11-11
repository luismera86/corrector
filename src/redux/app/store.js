import { configureStore } from '@reduxjs/toolkit'
import deliveryOneReducer from '../features/deliveryOneSlice/deliveryOneSlice'
import deliveryTowReducer from '../features/deliveryTowSlice/deliveryTowSlice'

export const store = configureStore({
  reducer: {
    deliveryOne: deliveryOneReducer,
    deliveryTow: deliveryTowReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
