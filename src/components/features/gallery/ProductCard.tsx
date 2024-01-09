import { ImageLoader } from "@components/common";
import { Product } from "@models/product.model";
import { useAppDispatch } from "@redux/hooks";
import { addProductToListOfSelectedProduct } from "@redux/slices/checkout";
import { FC } from "react";

type productCardProps = {
  product: Product;
};

export const ProductCard: FC<productCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddProductToCard = () => {
    dispatch(addProductToListOfSelectedProduct(product));
  };

  return (
    <figure className="flex flex-col animate-fade-in">
      <ImageLoader
        src={product.urlImage}
        alt={product.name}
        className="rounded-t-md"
      />
      <figcaption className="bg-background p-4 flex flex-col gap-2 rounded-b-md items-center">
        <h3 className="text-text text-xl text-center font-medium capitalize">
          {product.name}
        </h3>
        <p className="text-text font-bold">${product.price}</p>
        <p className="text-text">{product.description}</p>
        <button
          onClick={handleAddProductToCard}
          className="text-white bg-accent py-1.5 rounded-md font-medium hover:bg-accent_hover transition-colors w-full"
        >
          Add to car
        </button>
      </figcaption>
    </figure>
  );
};
