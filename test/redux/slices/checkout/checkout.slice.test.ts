import { listOfFakeProducts } from '@data/listOfProducts.data';
import {
  checkoutSlice,
  addProductToListOfSelectedProduct,
  completeTransaction,
  deleteProductToListOfSelectedProduct,
  errorTransaction,
  loadListOfProducts,
  successTransaction,
  toggleVisibilityModal,
  resetTransactionData,
} from '@redux/slices/checkout';
import { checkoutInitialState } from '@redux/slices/checkout/checkout.initial';

describe('checkout.slice', () => {
  test('should return initialState', () => {
    expect(checkoutSlice.reducer(undefined, { type: '' })).toEqual(
      checkoutInitialState
    );
  });

  test('should validate the new selected product', () => {
    const newProduct = listOfFakeProducts[0];
    const newState = checkoutSlice.reducer(
      undefined,
      addProductToListOfSelectedProduct(newProduct)
    );
    expect(newState.listOfSelectedProducts[0]).toEqual({
      ...newProduct,
      amount: 1,
    });
  });

  test('should validate completeTransaction', () => {
    const firstState = checkoutSlice.reducer(undefined, loadListOfProducts());
    const newState = checkoutSlice.reducer(firstState, completeTransaction());
    const expectedState = {
      ...checkoutInitialState,
      listOfProducts: listOfFakeProducts,
    };
    expect(newState).toEqual(expectedState);
  });

  test('should validate deleteProductToListOfSelectedProduct', () => {
    let currentState = undefined;
    for (let i = 0; i < 3; i++) {
      const newProduct = listOfFakeProducts[i];
      currentState = checkoutSlice.reducer(
        currentState,
        addProductToListOfSelectedProduct(newProduct)
      );
    }
    expect(currentState?.listOfSelectedProducts.length).toBe(3);

    currentState = checkoutSlice.reducer(
      currentState,
      deleteProductToListOfSelectedProduct(listOfFakeProducts[0])
    );

    expect(currentState?.listOfSelectedProducts.length).toBe(2);
  });

  test('should validate errorTransaction', () => {
    let currentState = undefined;
    currentState = checkoutSlice.reducer(currentState, errorTransaction());
    const { message, success } = currentState.transactionResult;

    expect(message).toBe('Error inesperado, por favor inténtalo más tarde');
    expect(success).toBe(false);
  });

  test('should validate toggleVisibilityModal', () => {
    let currentState = undefined;
    currentState = checkoutSlice.reducer(currentState, toggleVisibilityModal(true));
    expect(currentState.isOpenModal).toBe(true);
    currentState = checkoutSlice.reducer(currentState, toggleVisibilityModal(false));
    expect(currentState.isOpenModal).toBe(false);
  });

  test('should validate successTransaction', () => {
    let currentState = undefined;
    currentState = checkoutSlice.reducer(currentState, successTransaction());
    const { message, success } = currentState.transactionResult;

    expect(message).toBe('Gracias por tu compra');
    expect(success).toBe(true);
  });

  test('should validate resetTransactionData', () => {
    let currentState = undefined;
    currentState = checkoutSlice.reducer(currentState, resetTransactionData());
    expect(currentState.transactionResult).toEqual(checkoutInitialState.transactionResult);
  });
});
