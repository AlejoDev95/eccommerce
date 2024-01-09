import { MdOutlineShoppingCart } from "react-icons/md";
import { IconContainer } from "../common/IconContainer";

export const Navbar = () => {
  return (
    <nav className="bg-background border-gray-200 shadow-md sticky top-0 z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4 lg:relative px-10">
        <span className="self-center text-3xl font-semibold text-accent">
          AlejoDev
        </span>

        <button
          type="button"
          className="group flex items-center p-5 w-10 h-10 justify-center text-sm rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-150 text-text"
        >
          <div>
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
      </div>
    </nav>
  );
};
