import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://food-delivery-api-2ohh.onrender.com/api/delivery-food',
});

export const fetchShops = createAsyncThunk(
  'delivery/shops',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/shops');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'delivery/products',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/products');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendOrder = createAsyncThunk(
  'delivery/sendOrder',
  async (totalOrder, thunkApi) => {
    try {
      await instance.post(`/orders`, totalOrder);
      // return data;

      console.log('Замовлення', totalOrder);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
