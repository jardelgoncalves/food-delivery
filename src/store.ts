import { configureStore, combineReducers } from '@reduxjs/toolkit';

import popularProductSlice from 'features/product/popular-product-slice';
import productSlice from 'features/product/products-slice';

const rootReducer = combineReducers({
  popularProduct: popularProductSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
