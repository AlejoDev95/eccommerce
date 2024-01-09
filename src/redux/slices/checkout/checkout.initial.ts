import { Product, TransactionResult } from '@models/index';

interface CheckoutSlice {
  isOpenModal: boolean;
  listOfProducts: Product[];
  listOfSelectedProducts: Product[];
  transactionResult: TransactionResult;
}

export const checkoutInitialState: CheckoutSlice = {
  listOfProducts: [],
  listOfSelectedProducts: [],
  isOpenModal: false,
  transactionResult: {
    success: false,
    message: null,
  },
};
