/* eslint-disable react-hooks/exhaustive-deps */
import { MdOutlineShoppingCart } from "react-icons/md";
import { IconContainer } from "../common/IconContainer";
import { Overlay } from "./Overlay";
import { useEffect, useState } from "react";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
import { BadgeCard } from "./BadgeCard";

export const Navbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(true);
  const { listOfSelectedProducts } = useAppSelector(
    (state: RootState) => state.checkout
  );

  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
  };

  useEffect(() => {
    if (listOfSelectedProducts.length === 0) {
      toggleOverlay();
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

        <Overlay overlayOpen={overlayOpen} />
      </div>
    </nav>
  );
};
