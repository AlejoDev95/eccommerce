import { fireEvent, screen } from "@testing-library/react";
import { Overlay } from "@components/layout";
import { renderWithProviders } from "@redux/utils";
import { checkoutInitialState } from "../../../../src/redux/slices/checkout/checkout.initial";
import { listOfFakeProducts } from "@data/listOfProducts.data";

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => children,
}));

const productSelected = listOfFakeProducts.slice(0, 3);
const initialState = {
  ...checkoutInitialState,
  listOfSelectedProducts: productSelected,
};

describe("<Overlay/>", () => {
  const setOverlayOpenMock = jest.fn();

  test("should to match snapshot", () => {
    renderWithProviders(
      <Overlay overlayOpen setOverlayOpen={setOverlayOpenMock} />,
      { preloadedState: { checkout: initialState } }
    );
    expect(screen).toMatchSnapshot();
  });

  test("should render three selected product", () => {
    renderWithProviders(
      <Overlay overlayOpen setOverlayOpen={setOverlayOpenMock} />,
      { preloadedState: { checkout: initialState } }
    );
    const products = screen.getAllByRole("listitem");
    expect(products.length).toBe(productSelected.length);
  });

  test("should render message not product", () => {
    renderWithProviders(
      <Overlay overlayOpen setOverlayOpen={setOverlayOpenMock} />,
      {
        preloadedState: {
          checkout: { ...initialState, listOfSelectedProducts: [] },
        },
      }
    );

    const expectedMessage = "There are no products selected yet";

    const message = screen.getByText(expectedMessage);
    expect(message.textContent).toContain(expectedMessage);
  });

  test("should change isOpenModal true and call setOverlayOpen", () => {
    const { store } = renderWithProviders(
      <Overlay overlayOpen setOverlayOpen={setOverlayOpenMock} />,
      { preloadedState: { checkout: initialState } }
    );

    const PayButton = screen.getByText("Pay");
    fireEvent.click(PayButton);
    expect(setOverlayOpenMock).toHaveBeenCalled();
    expect(store.store.getState().checkout.isOpenModal).toBe(true);
  });
});
