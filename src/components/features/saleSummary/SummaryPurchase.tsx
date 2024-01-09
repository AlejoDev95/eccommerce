import { ImageLoader } from "@components/common";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";

export const SummaryPurchase = () => {
  const { listOfSelectedProducts } = useAppSelector(
    (state: RootState) => state.checkout
  );

  const calcularTotal = () => {
    const total = listOfSelectedProducts.reduce((accumulator, producto) => {
      return accumulator + producto.price * producto.amount;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <section className="flex flex-col justify-between">
      <div>
        <h2 className="text-center font-medium text-lg mb-11">
          summary of purchase
        </h2>

        <ul className="space-y-3 flex-1 max-h-64 overflow-y-auto">
          {listOfSelectedProducts.map((product) => (
            <li
              key={product.id}
              className="animate-fade-in max-h-14 h-14 flex bg-background rounded-md"
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
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-between items-baseline gap-3">
        <p className="font-medium text-lg">Total:</p>
        <div className="w-full border-dotted border-b-2 border-text"></div>
        <p className="font-medium text-lg">{calcularTotal()}</p>
      </div>
    </section>
  );
};
