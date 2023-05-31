import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  author: [],
  isLoading: false,
  error: null,
};

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    getauthorStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getauthorSuccess(state, action) {
      state.isLoading = false;
      state.genre = action.payload;
    },
    getauthorFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProduct(state, action) {
      state.author.push(action.payload);
    },
    deleteProduct(state, action) {
      const index = state.author.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state.genre.splice(index, 1);
      }
    },
  },
});

export const {
  getauthorStart,
  getauthorSuccess,
  getauthorFailure,
  addGenre,
  deleteGenre,
} = authorSlice.actions;

export default authorSlice.reducer;
