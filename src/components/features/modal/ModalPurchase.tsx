import { Modal } from "flowbite-react";
import { CreditCardForm } from "@components/features/creditCardForm";
import { SummaryPurchase } from "@components/features/saleSummary";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
import { toggleVisibilityModal } from "@redux/slices/checkout";

export const ModalPurchase = () => {
  const { isOpenModal } = useAppSelector((state: RootState) => state.checkout);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleVisibilityModal(false));
  };

  return (
    <Modal show={isOpenModal} onClose={() => handleCloseModal()} size="5xl">
      <Modal.Header/>
      <Modal.Body>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CreditCardForm />
          <SummaryPurchase />
        </div>
      </Modal.Body>
    </Modal>
  );
};
