import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  addProduct,
  deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
