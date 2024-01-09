import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";

export const BadgeCard = () => {
  const { listOfSelectedProducts } = useAppSelector(
    (state: RootState) => state.checkout
  );

  const determineTotalProducts = () => {
    const totalAmount: number = listOfSelectedProducts.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.amount,
      0
    );

    return totalAmount;
  };

  return (
    <div className="absolute animate-fade-in inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
      {determineTotalProducts()}
    </div>
  );
};
