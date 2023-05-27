import { createSlice } from '@reduxjs/toolkit';
import { fetchShops, fetchProducts, sendOrder } from 'redux/operations';

const initialState = {
  shops: [],
  products: [],
  isLoading: false,
  error: null,
  order: [],
  currentShop: '',
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setCurrentShop(state, action) {
      state.currentShop = action.payload;
    },
    addToCart(state, action) {
      state.order = state.order.find(el => el._id === action.payload._id)
        ? state.order.map(i =>
            i._id === action.payload._id ? action.payload : i
          )
        : [...state.order, action.payload];
    },
    deleteItem(state, action) {
      state.order = state.order.filter(item => item._id !== action.payload._id);
    },
  },

  extraReducers: builder =>
    builder

      .addCase(fetchShops.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shops = action.payload;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(sendOrder.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.order = [];
        state.isLoading = false;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { setCurrentShop, addToCart, deleteItem } = deliverySlice.actions;

export const deliveryReducer = deliverySlice.reducer;
