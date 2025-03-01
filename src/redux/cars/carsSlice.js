import { createSlice } from '@reduxjs/toolkit';
import { apiGetCars } from './operation';

const INITIAL_STATE = {
  items: null,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(apiGetCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetCars.fulfilled, (state, action) => {
        console.log('Action dispatched, state before update:', state);
        console.log('Action payload:', action.payload);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
