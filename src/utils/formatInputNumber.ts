export const clearNumber = (cardNumber: string) =>
  cardNumber.replace(/\s/g, '');

export function formatCreditCardNumber(value: string) {
  if (!value) {
    return value;
  }
  const clearValue = clearNumber(value);
  const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;

  return nextValue.trim();
}

export const formatCVC = (value: string) => {
  const clearValue = clearNumber(value);
  return clearValue.slice(0, 3);
};

export function formatExpirationDate(value: string) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export const validateOnlyNumbers = (value: string) => {
  const number = clearNumber(value);
  const regexNumber = /^\d+$/;
  return regexNumber.test(number);
};
