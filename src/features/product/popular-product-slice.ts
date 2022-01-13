import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularProducts } from 'useCases/products';

const initialState = {
  products: [],
  loading: false,
  requestId: '',
  error: '',
};

export const fetchPopularProduct = createAsyncThunk(
  'popularProduct/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return getPopularProducts();
    } catch (err) {
      return rejectWithValue('No products available');
    }
  }
);

const { reducer } = createSlice({
  name: 'popularProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPopularProduct.fulfilled,
      (state, { meta, payload }) => {
        if (meta.requestId === state.requestId) {
          state.products = payload;
          state.loading = false;
        }
      }
    );
    builder.addCase(fetchPopularProduct.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(
      fetchPopularProduct.rejected,
      (state, { meta, payload }) => {
        if (meta.requestId === state.requestId) {
          state.products = [];
          state.loading = false;
          state.error = payload as string;
        }
      }
    );
  },
});

export default reducer;
