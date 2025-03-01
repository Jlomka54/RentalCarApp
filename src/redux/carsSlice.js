import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
});

export const carsReducer = carsSlice.reducer;
