import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "@redux/hooks";
import { deleteProductToListOfSelectedProduct } from "@redux/slices/checkout";
import type { Product } from "@models/product.model";
import { IconContainer, ImageLoader } from "@components/common";

type ProductSelectedProps = {
  product: Product;
};

export const ProductSelected: FC<ProductSelectedProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleDeleteSelectedProduct = (product: Product) => {
    dispatch(deleteProductToListOfSelectedProduct(product));
  };
  return (
    <li
      key={product.id}
      className="animate-fade-in max-h-20 h-20 flex bg-background rounded-md"
    >
      <figure className="w-full h-full flex gap-5">
        <ImageLoader
          src={product.urlImage}
          alt={product.name}
          className="flex-1 h-full object-cover rounded-tl-md rounded-bl-md"
        />
        <figcaption className="flex-1 flex flex-col justify-center">
          <h3 className="font-medium capitalize">
            {product.name} X {product.amount}
          </h3>
          <p>${product.price}</p>
        </figcaption>
      </figure>

      <button
        onClick={() => handleDeleteSelectedProduct(product)}
        className="group hover:bg-error w-1/5 flex justify-center items-center rounded-tr-md rounded-br-md transition-colors duration-150"
      >
        <IconContainer
          value={{
            className: "text-text group-hover:text-white",
            size: "1.5rem",
          }}
        >
          <MdDelete />
        </IconContainer>
      </button>
    </li>
  );
};
