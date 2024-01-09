import { fireEvent, screen } from "@testing-library/react";
import { ProductSelected } from "@components/layout";
import { listOfFakeProducts } from "@data/listOfProducts.data";
import { renderWithProviders } from "@redux/utils";
import { checkoutInitialState } from "@redux/slices/checkout/checkout.initial";

const productSelected = listOfFakeProducts[0];
const initialState = {
  ...checkoutInitialState,
  listOfSelectedProducts: [productSelected],
};

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => children,
}));

describe("<ProductSelected/>", () => {
  test("should match to snapshot", () => {
    renderWithProviders(<ProductSelected product={productSelected} />);
    expect(screen).toMatchSnapshot();
  });

  test("should call deleteProductToListOfSelectedProduct action", async () => {
    const { store: masterStore } = renderWithProviders(
      <ProductSelected product={productSelected} />,
      { preloadedState: { checkout: initialState } }
    );

    expect(
      masterStore.store.getState().checkout.listOfSelectedProducts.length
    ).toBe(1);
    const buttonDelete = screen.getByRole("button");
    fireEvent.click(buttonDelete);
    expect(
      masterStore.store.getState().checkout.listOfSelectedProducts.length
    ).toBe(0);
  });

  test("should have information product", () => {
    renderWithProviders(<ProductSelected product={productSelected} />, {
      preloadedState: { checkout: initialState },
    });
    const nameAndAmountProduct = screen.getByRole("heading", { level: 3 });
    const priceProduct = screen.getByText(`$${productSelected.price}`);

    expect(nameAndAmountProduct).toBeTruthy();
    expect(priceProduct).toBeTruthy();
    expect(nameAndAmountProduct.textContent).toContain(productSelected.name);
    expect(nameAndAmountProduct.textContent).toContain(`${productSelected.amount}`);
    expect(priceProduct.textContent).toContain(`${productSelected.price}`);
  });
});
