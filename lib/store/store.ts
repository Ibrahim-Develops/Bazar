import { configureStore } from "@reduxjs/toolkit";
import cartreducer from '../../slices/cart/cartslice'
import todoreducer from '../../slices/cart/todos'
import userreducer from '../../slices/cart/usersslice'

export const store = configureStore({
    reducer:{
        cart: cartreducer,
        todo: todoreducer,
        users: userreducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;