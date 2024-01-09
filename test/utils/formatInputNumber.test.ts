import {
  clearNumber,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  validateOnlyNumbers,
} from '@utils/formatInputNumber';

describe('clearNumber', () => {
  test('should remove all spaces from the card number', () => {
    const cardNumber = '1234 5678 9012 3456';
    const result = clearNumber(cardNumber);
    expect(result).toBe('1234567890123456');
  });
});

describe('formatCreditCardNumber', () => {
  test('should format the credit card number with spaces', () => {
    const cardNumber = '1234567890123456';
    const result = formatCreditCardNumber(cardNumber);
    expect(result).toBe('1234 5678 9012 3456');
  });

  test('should return the same value if input is empty', () => {
    const cardNumber = '';
    const result = formatCreditCardNumber(cardNumber);
    expect(result).toBe('');
  });
});

describe('formatCVC', () => {
  test('should return the first 3 digits of the CVC', () => {
    const cvc = '123456';
    const result = formatCVC(cvc);
    expect(result).toBe('123');
  });
});

describe('formatExpirationDate', () => {
  test('should format the expiration date with a slash', () => {
    const expirationDate = '1223';
    const result = formatExpirationDate(expirationDate);
    expect(result).toBe('12/23');
  });

  test('should return the same value if input length is less than 3', () => {
    const expirationDate = '12';
    const result = formatExpirationDate(expirationDate);
    expect(result).toBe('12');
  });
});

describe('validateOnlyNumbers', () => {
  test('should return true if the value contains only numbers', () => {
    const value = '123456';
    const result = validateOnlyNumbers(value);
    expect(result).toBe(true);
  });

  test('should return false if the value contains non-numeric characters', () => {
    const value = '12a34';
    const result = validateOnlyNumbers(value);
    expect(result).toBe(false);
  });
});
