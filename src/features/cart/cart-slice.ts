import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from 'interfaces/product';

type InitialState = {
  loading: boolean;
  products: Product[];
  modalIsOpen: boolean;
};

const initialState: InitialState = {
  loading: false,
  products: [],
  modalIsOpen: false,
};

const { reducer, actions } = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleModal: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
    addInCart: (state, action: PayloadAction<Product>) => {
      const productExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!productExist) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        return state;
      }

      productExist.quantity = productExist.quantity
        ? productExist.quantity + 1
        : 1;
      return state;
    },
    shrinkInCart: (state, action: PayloadAction<Product>) => {
      const productExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!productExist) {
        return state;
      }

      productExist.quantity = action.payload.quantity;
      return state;
    },
    removeInCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: {},
});

export const { handleModal, shrinkInCart, addInCart, removeInCart } = actions;
export default reducer;
