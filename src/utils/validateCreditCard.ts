import { TypeCard } from '@models/typeCard.model';
import { clearNumber } from './formatInputNumber';
import { regexMasterCards, regexVisa } from '@regex/index';

export const luhnAlgorithm = (cardNumber: string) => {
  let sum = 0;
  let isEven = false;
  const cardNumberWithoutSpace = clearNumber(cardNumber);

  for (let i = cardNumberWithoutSpace.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumberWithoutSpace.charAt(i), 10);

    if (isEven) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;

    isEven = !isEven;
  }

  return sum % 10 === 0;
};

export const determinateCardType = (cardNumber: string): TypeCard => {
  const numeroSinEspacios = cardNumber.replace(/\s/g, '');
  if (regexVisa.test(numeroSinEspacios)) {
    return 'Visa';
  } else if (regexMasterCards.some((regex) => regex.test(numeroSinEspacios))) {
    return 'MasterCard';
  } else {
    return 'Desconocido';
  }
};
