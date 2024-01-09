import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '@models/product.model';
import { listOfFakeProducts } from '@data/index';
import { checkoutInitialState } from './checkout.initial';

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
      const productIndex = state.listOfSelectedProducts.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (productIndex === -1) {
        state.listOfSelectedProducts.push({ ...action.payload, amount: 1 });
      } else {
        state.listOfSelectedProducts[productIndex].amount++;
      }
    },
    deleteProductToListOfSelectedProduct: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.listOfSelectedProducts = state.listOfSelectedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    toggleVisibilityModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    completeTransaction: (state) => {
      return { ...checkoutInitialState, listOfProducts: state.listOfProducts };
    },
    errorTransaction: (state) => {
      state.transactionResult.message = 'Error inesperado, por favor inténtalo más tarde';
      state.transactionResult.success = false;
    },

    successTransaction: (state) => {
      state.transactionResult.message = 'Gracias por tu compra';
      state.transactionResult.success = true;
    },
    resetTransactionData:(state) => {
      state.transactionResult = checkoutInitialState.transactionResult
    },
  },
});

export const {
  addProductToListOfSelectedProduct,
  completeTransaction,
  deleteProductToListOfSelectedProduct,
  errorTransaction,
  loadListOfProducts,
  successTransaction,
  toggleVisibilityModal,
  resetTransactionData
} = checkoutSlice.actions;
