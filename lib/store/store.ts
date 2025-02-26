import { configureStore } from "@reduxjs/toolkit";
import cartreducer from '../../slices/cart/cartslice'

export const store = configureStore({
    reducer:{
        cart: cartreducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;