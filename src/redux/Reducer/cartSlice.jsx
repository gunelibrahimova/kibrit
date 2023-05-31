import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    data: [],
    loading: false,
    error: "",
    cart: cartFromLocalStorage,
    totalQuantity: 0,
    totalPrice: 0
};

export const fetchBook = createAsyncThunk("fetchBook", async () => {
    const response = await axios.get("https://localhost:44351/api/Book/bookList");
    return response.data;
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                (state.cart[find].quantity += 1);
            } else {
                state.cart.push({...action.payload, quantity:1});
            }
            // Yerel depolamayı güncelle
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            // Yerel depolamayı güncelle
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            // Yerel depolamayı güncelle
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            // Yerel depolamayı güncelle
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            state.loading = true;
            state.error = "Error";
        });
    },
});



export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer