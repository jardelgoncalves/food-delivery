import { configureStore, combineReducers } from '@reduxjs/toolkit';

import popularProductSlice from 'features/product/popular-product-slice';

const rootReducer = combineReducers({
  popularProduct: popularProductSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
