import {
  CreditCardInfo,
  PaymentSummary,
  Product,
  TransactionResult,
} from '@models/index';

interface CheckoutSlice {
  isOpenModal: boolean
  listOfProducts: Product[];
  listOfSelectedProducts: Product[];
  creditCardInfo: CreditCardInfo;
  paymentSummary: PaymentSummary;
  transactionResult: TransactionResult;
}

export const checkoutInitialState: CheckoutSlice = {
  listOfProducts: [],
  listOfSelectedProducts: [],
  isOpenModal: false,
  creditCardInfo: {
    userName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  },
  paymentSummary: {
    totalPrice: 0,
  },
  transactionResult: {
    success: false,
    message: null,
  },
};
