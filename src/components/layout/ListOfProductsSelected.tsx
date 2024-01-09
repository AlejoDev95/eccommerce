import { FC } from "react";
import { Product } from "@models/product.model";
import { ProductSelected } from "./ProductSelected";

type ListOfProductsSelectedProps = {
  listOfSelectedProducts: Product[];
};

export const ListOfProductsSelected: FC<ListOfProductsSelectedProps> = ({
  listOfSelectedProducts,
}) => {
  return (
    <ul className="space-y-3 w-screen lg:w-96 min-h-72 max-h-72 overflow-y-auto p-4">
      {listOfSelectedProducts.map((product) => (
        <ProductSelected product={product} key={product.id} />
      ))}
    </ul>
  );
};
