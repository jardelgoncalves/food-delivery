import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from 'useCases/products';

const initialState = {
  products: [],
  loading: false,
  requestId: '',
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return getProducts();
    } catch (err) {
      return rejectWithValue('No products available');
    }
  }
);

const { reducer } = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { meta, payload }) => {
      if (meta.requestId === state.requestId) {
        state.products = payload;
        state.loading = false;
      }
    });
    builder.addCase(fetchProducts.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, { meta, payload }) => {
      if (meta.requestId === state.requestId) {
        state.products = [];
        state.loading = false;
        state.error = payload as string;
      }
    });
  },
});

export default reducer;
