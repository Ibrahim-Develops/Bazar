import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
    rating: {
        rate: number;
        count: number;
    };
}

const cartslice = createSlice({
    name: "carts",
    initialState: [] as Product[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removefromcart: (state, action: PayloadAction<Product>) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        decreasequantity: (state, action: PayloadAction<Product>) => {
            const existingItem = state.find(item => item.id === action.payload.id)
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1
            }
            else {
                return state.filter(item => item.id !== action.payload.id);
            }
        },
        increasequantity: (state, action: PayloadAction<Product>) => {
            const existingItem = state.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1
            }
        },
    },
});

export const { addToCart, removefromcart, decreasequantity, increasequantity } = cartslice.actions;
export default cartslice.reducer;
