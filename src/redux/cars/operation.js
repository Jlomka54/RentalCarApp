import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, getCarsById } from '../../api/axiosInstance';

export const apiGetCars = createAsyncThunk(
  'cars/getCars',
  async (page, thunkAPI) => {
    try {
      const data = await getCars(page);

      return {
        cars: data.cars,
        totalCars: data.total,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const apiGetCarsById = createAsyncThunk(
  'cars/getCarsById',
  async (id, thunkAPI) => {
    try {
      const data = await getCarsById(id);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
