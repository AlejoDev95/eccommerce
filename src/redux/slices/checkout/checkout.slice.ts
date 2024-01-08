import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { checkoutInitialState } from './checkout.initial';
import { Product } from '../../../models';
import { listOfFakeProducts } from '../../../data';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: checkoutInitialState,
  reducers: {
    loadListOfProducts: (state) => {
      state.listOfProducts = listOfFakeProducts;
    },
    addProductToListOfSelectedProduct: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.listOfSelectedProducts.push(action.payload);
    },
    deleteProductToListOfSelectedProduct: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.listOfSelectedProducts = state.listOfSelectedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProductToListOfSelectedProduct } = checkoutSlice.actions;
