import { ToastProduct } from "@components/common/toast";
import { Gallery } from "@components/features";
import { ModalPurchase  } from "@components/features/modal";
import { Navbar } from "@components/layout";

export const App = () => {
  return (
    <>
      <Navbar />
      <Gallery />
      <ModalPurchase  />
      <ToastProduct />
    </>
  );
};
