import { luhnAlgorithm, determinateCardType } from '@utils/validateCreditCard';

describe('luhnAlgorithm', () => {
  test('should return true for a valid card number', () => {
    const validCardNumber = '4111111111111111';
    expect(luhnAlgorithm(validCardNumber)).toBe(true);
  });

  test('should return false for an invalid card number', () => {
    const invalidCardNumber = '4111111111111112';
    expect(luhnAlgorithm(invalidCardNumber)).toBe(false);
  });
});

describe('determinateCardType', () => {
  test('should return "Visa" for a valid Visa card number', () => {
    const visaCardNumber = '4111111111111111';
    expect(determinateCardType(visaCardNumber)).toBe('Visa');
  });

  test('should return "MasterCard" for a valid MasterCard card number', () => {
    const masterCardNumber = '5555555555554444';
    expect(determinateCardType(masterCardNumber)).toBe('MasterCard');
  });

  test('should return "Desconocido" for an invalid card number', () => {
    const invalidCardNumber = '1234567890123456';
    expect(determinateCardType(invalidCardNumber)).toBe('Desconocido');
  });
});
