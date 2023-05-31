import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: [],
  isLoading: false,
  error: null,
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    getGenreStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getGenreSuccess(state, action) {
      state.isLoading = false;
      state.genre = action.payload;
    },
    getGenreFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProduct(state, action) {
      state.genre.push(action.payload);
    },
    deleteProduct(state, action) {
      const index = state.genre.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        state.genre.splice(index, 1);
      }
    },
  },
});

export const {
  getGenreStart,
  getGenreSuccess,
  getGenreFailure,
  addGenre,
  deleteGenre,
} = genreSlice.actions;

export default genreSlice.reducer;
