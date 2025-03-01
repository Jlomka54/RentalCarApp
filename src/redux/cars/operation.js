import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/axiosInstance';

export const apiGetCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      console.log('API request started');
      const { data } = await api.get('/cars');
      console.log('API response:', data); // Лог для перевірки відповіді

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
