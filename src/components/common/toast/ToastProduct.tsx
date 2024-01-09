import { useEffect, useState } from "react";
import { Toast } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
import { resetTransactionData } from "@redux/slices/checkout";
import classNames from "classnames";

export const ToastProduct = () => {
  const { transactionResult } = useAppSelector(
    (state: RootState) => state.checkout
  );
  const dispatch = useAppDispatch();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (transactionResult.message) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        dispatch(resetTransactionData());
      }, 5000);
    }
  }, [transactionResult.message, dispatch]);

  const toastClass = classNames({
    "bg-lime-600": transactionResult.success,
    "bg-red-500": !transactionResult.success,
  });

  return (
    <>
      {showToast && (
        <Toast className={`fixed bottom-10 right-10 z-50 max-w-96 w-full ${toastClass}`}>
          <div className="ml-3 font-normal text-white text-base max-w-96 w-full">
            {transactionResult.message}
          </div>
        </Toast>
      )}
    </>
  );
};
