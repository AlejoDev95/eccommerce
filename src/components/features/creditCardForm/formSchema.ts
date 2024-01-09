import { TypeCard } from '@models/typeCard.model';
import { luhnAlgorithm } from '@utils/validateCreditCard';
import { InferType, addMethod, object, string } from 'yup';

declare module 'yup' {
  interface StringSchema {
    invalidCard(): this;
  }
}

addMethod(string, 'invalidCard', function () {
  return this.test('invalidCard', 'Card number is invalid', (value) =>
    luhnAlgorithm(value as TypeCard)
  );
});

export const formSchema = object({
  userName: string()
    .required('The field is required')
    .min(3, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  cardNumber: string().required('The field is required').invalidCard(),
  expiry: string().required('The field is required'),
  cvc: string().required('The field is required'),
});

export type FormValues = InferType<typeof formSchema>;

export type FormField = 'userName' | 'cardNumber' | 'expiry' | 'cvc';
