import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const favoriesFromLocalStorage = JSON.parse(localStorage.getItem('favories')) || [];

const initialState = {
    data: [],
    loading: false,
    error: "",
    favories: favoriesFromLocalStorage,
    totalQuantityFavories: 0,
    totalPriceFavories: 0
};

export const fetchBook = createAsyncThunk("fetchBook", async () => {
    const response = await axios.get("https://localhost:44351/api/Book/bookList");


});


const favoriteSlice = createSlice({
    name: "favories",
    initialState,
    reducers: {
        addToFavories: (state, action) => {
            let find = state.favories.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                (state.favories[find].quantity += 1);
            } else {
                state.favories.push({...action.payload, quantity:1});
            }
            // Yerel depolamayı güncelle
            localStorage.setItem('favories', JSON.stringify(state.favories));
        },
        getFavoriesTotal: (state) => {
            let { totalQuantityFavories, totalPriceFavories } = state.favories.reduce(
                (favoriesTotal, favoriesItem) => {
                    const { price, quantity } = favoriesItem;
                    const itemTotal = price * quantity;
                    favoriesTotal.totalPriceFavories += itemTotal;
                    favoriesTotal.totalQuantityFavories += quantity;
                    return favoriesTotal;
                },
                {
                    totalPriceFavories: 0,
                    totalQuantityFavories: 0,
                }
            );
            state.totalPriceFavories = parseInt(totalPriceFavories.toFixed(2));
            state.totalQuantityFavories = totalQuantityFavories;
        },
        removeItem: (state, action) => {
            state.favories = state.favories.filter((item) => item.id !== action.payload);
            // Yerel depolamayı güncelle
            localStorage.setItem('favories', JSON.stringify(state.favories));
        },
        increaseItemQuantity: (state, action) => {
            state.favories = state.favories.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            // Yerel depolamayı güncelle
            localStorage.setItem('favories', JSON.stringify(state.favories));
        },
        decreaseItemQuantity: (state, action) => {
            state.favories = state.favories.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            // Yerel depolamayı güncelle
            localStorage.setItem('favories', JSON.stringify(state.favories));
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



export const { addToFavories, getFavoriesTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = favoriteSlice.actions;
export default favoriteSlice.reducer