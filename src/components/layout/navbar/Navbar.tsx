import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
import { IconContainer } from "@components/common";
import { BadgeCard } from "./BadgeCard";
import { Overlay } from "../overlay/Overlay";

export const Navbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const { listOfSelectedProducts } = useAppSelector(
    (state: RootState) => state.checkout
  );

  const toggleOverlay = () => {
    setOverlayOpen((value) => !value);
  };

  useEffect(() => {
    if (listOfSelectedProducts.length === 0) {
      setOverlayOpen(false);
    }
  }, [listOfSelectedProducts]);

  return (
    <nav className="bg-background border-gray-200 shadow-md sticky top-0 z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4 lg:relative px-10">
        <span className="self-center text-3xl font-semibold text-accent">
          AlejoDev
        </span>

        <button
          onClick={toggleOverlay}
          type="button"
          className="relative group flex items-center p-5 w-10 h-10 justify-center text-sm rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-150 text-text"
        >
          <div>
            {listOfSelectedProducts.length > 0 && <BadgeCard />}

            <IconContainer
              value={{
                size: "1.75rem",
                className: "text-text group-hover:text-white",
              }}
            >
              <MdOutlineShoppingCart />
            </IconContainer>
          </div>
        </button>

        <Overlay setOverlayOpen={setOverlayOpen} overlayOpen={overlayOpen} />
      </div>
    </nav>
  );
};
