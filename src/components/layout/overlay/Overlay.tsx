import { FC } from "react";
import { RootState } from "@redux/store";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import classNames from "classnames";
import { NotProductMessage } from "./NotProductMessage";
import { ListOfProductsSelected } from "./ListOfProductsSelected";
import { toggleVisibilityModal } from "@redux/slices/checkout";

type OverlayPops = {
  overlayOpen: boolean;
  setOverlayOpen: (value: boolean) => void;
};

export const Overlay: FC<OverlayPops> = ({ overlayOpen, setOverlayOpen }) => {
  const { listOfSelectedProducts } = useAppSelector(
    (state: RootState) => state.checkout
  );

  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(toggleVisibilityModal(true));
    setOverlayOpen(false);
  };

  const overlayClasses = classNames({ hidden: !overlayOpen });

  return (
    <aside
      className={`animate-fade-in absolute top-full  w-full lg:w-auto right-0 bg-overlay rounded-b-md shadow-md z-50 pb-4 ${overlayClasses}`}
    >
      {listOfSelectedProducts.length === 0 && <NotProductMessage />}
      {listOfSelectedProducts.length > 0 && (
        <>
          <ListOfProductsSelected
            listOfSelectedProducts={listOfSelectedProducts}
          />
          <div className="pt-4 px-2">
            <button
              onClick={handleOpenModal}
              className="w-full text-white bg-accent py-1.5 rounded-md font-medium hover:bg-accent_hover transition-colors"
            >
              Pay
            </button>
          </div>
        </>
      )}
    </aside>
  );
};
