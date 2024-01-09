import { ChangeEvent, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { determinateCardType } from "@utils/validateCreditCard";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "@utils/formatInputNumber";
import { IconContainer } from "@components/common";
import { TypeCard } from "@models/typeCard.model";
import { FormField, FormValues, formSchema } from "./formSchema";
import { useAppDispatch } from "@redux/hooks";
import {
  completeTransaction,
  errorTransaction,
  successTransaction,
} from "@redux/slices/checkout";

export const CreditCardForm = () => {
  const dispatch = useAppDispatch();
  const [typeCreditCard, setTypeCreditCard] = useState<TypeCard>("Desconocido");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    criteriaMode: "all",
    resolver: yupResolver(formSchema),
  });

  const handleOnChanges = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let value = target.value.replace(/\D/g, "");
    const name = target.name as FormField;

    switch (name) {
      case "cardNumber":
        value = value.slice(0, 16);
        setValue(name, formatCreditCardNumber(value));
        break;

      case "expiry":
        setValue(name, formatExpirationDate(value));
        break;

      case "cvc":
        setValue(name, formatCVC(value));
        break;

      default:
        setValue(name, target.value);
        break;
    }
  };

  const handleSubmitForm = handleSubmit((data) => {
    dispatch(completeTransaction());
    data.cardNumber === "4111 1111 1111 1111"
      ? dispatch(errorTransaction())
      : dispatch(successTransaction());
  });

  return (
    <main className="w-full h-full m-auto flex flex-col">
      <h2 className="text-center font-medium text-lg mb-4">Payment Form</h2>
      <form className="space-y-5" onSubmit={handleSubmitForm} autoComplete="off">
        {/* userName */}
        <div className="flex flex-col gap-2 items-start">
          <Label htmlFor="userName" value="userName" />
          <TextInput
            {...register("userName")}
            className="w-full"
            id="userName"
            placeholder="Your userName"
            title="Insert your userName"
            type="text"
            onChange={handleOnChanges}
          />
          <ErrorMessage
            errors={errors}
            name="userName"
            render={({ message }) => {
              return (
                message && (
                  <span role="alert" className="text-red-900 font-medium text-sm">
                    {message}
                  </span>
                )
              );
            }}
          />
        </div>

        {/* cardNumber */}
        <div className="flex-1 flex flex-col gap-2 items-start">
          <div className="flex items-center w-full">
            <Label htmlFor="cardNumber" value="Your cardNumber" />
            <figure className="w-10 h-10 flex justify-center items-center">
              <IconContainer value={{ color: "black", size: "2rem" }}>
                {typeCreditCard === "MasterCard" && <FaCcMastercard />}
                {typeCreditCard === "Visa" && <FaCcVisa />}
              </IconContainer>
            </figure>
          </div>
          <TextInput
            {...register("cardNumber")}
            className="w-full flex-1"
            id="cardNumber"
            placeholder="Card Number"
            title="Only numbers"
            type="tel"
            onChange={handleOnChanges}
            onBlur={({ target }) => {
              const value = target.value;
              const typeCard = determinateCardType(value);
              setTypeCreditCard(typeCard);
            }}
          />
          <ErrorMessage
            errors={errors}
            name="cardNumber"
            render={({ message }) => {
              return (
                message && (
                  <span role="alert" className="text-red-900 font-medium text-sm">
                    {message}
                  </span>
                )
              );
            }}
          />
        </div>

        <div className="flex gap-5">
          {/* expiry */}
          <div className="flex-1 flex flex-col gap-2 items-start">
            <Label htmlFor="expiry" value="expiry" />
            <TextInput
              {...register("expiry")}
              className="w-full"
              id="expiry"
              placeholder="GOOD THRU"
              title="Only numbers"
              type="tel"
              onChange={handleOnChanges}
            />
            <ErrorMessage
              errors={errors}
              name="expiry"
              render={({ message }) => {
                return (
                  message && (
                    <span role="alert" className="text-red-900 font-medium text-sm">
                      {message}
                    </span>
                  )
                );
              }}
            />
          </div>

          {/* cvc */}
          <div className="flex-1 flex flex-col gap-2 items-start">
            <Label htmlFor="cvc" value="cvc" />
            <TextInput
              {...register("cvc")}
              className="w-full"
              id="cvc"
              placeholder="CVC"
              title="Only numbers"
              type="tel"
              onChange={handleOnChanges}
            />
            <ErrorMessage
              errors={errors}
              name="cvc"
              render={({ message }) => {
                return (
                  message && (
                    <span role="alert" className="text-red-900 font-medium text-sm">
                      {message}
                    </span>
                  )
                );
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-accent py-1.5 rounded-md font-medium hover:bg-accent_hover transition-colors"
        >
          Pagar
        </button>
      </form>
    </main>
  );
};
