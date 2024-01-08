import {
  CreditCardInfo,
  PaymentSummary,
  Product,
  TransactionResult,
} from '../../../models';

interface CheckoutSlice {
  listOfProducts: Product[];
  listOfSelectedProducts: Product[];
  creditCardInfo: CreditCardInfo;
  paymentSummary: PaymentSummary;
  transactionResult: TransactionResult;
  error: string | null;
}

export const checkoutInitialState: CheckoutSlice = {
  listOfProducts: [],
  listOfSelectedProducts: [],
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
    message: '',
  },
  error: null,
};
