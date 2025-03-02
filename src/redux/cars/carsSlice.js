import { createSlice } from '@reduxjs/toolkit';
import { apiGetCars, apiGetCarsById } from './operation';

const INITIAL_STATE = {
  cars: null,
  totalCars: 0,
  totalPages: 0,
  currentPage: 1,
  selectedCar: null,
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
        console.log('🚀 ~ .addCase ~ action:', action);
        state.loading = false;
        state.cars = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.page;
      })
      .addCase(apiGetCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiGetCarsById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetCarsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(apiGetCarsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
