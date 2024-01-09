import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
import { loadListOfProducts } from "@redux/slices/checkout";
import { ProductCard } from "./ProductCard";

export const Gallery = () => {
  const { listOfProducts } = useAppSelector((state: RootState) => state.checkout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadListOfProducts());
  }, [dispatch]);

  return (
    <main className="container h-full mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10">
      {listOfProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </main>
  );
};
