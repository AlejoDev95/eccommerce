import { screen } from "@testing-library/react";
import { listOfFakeProducts } from "@data/listOfProducts.data";
import { renderWithProviders } from "@redux/utils";
import { Navbar } from "@components/layout";
import { checkoutInitialState } from "@redux/slices/checkout/checkout.initial";

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => children,
}));

const listOfSelectedProducts = listOfFakeProducts.slice(0, 3);
const initialState = {
  ...checkoutInitialState,
  listOfSelectedProducts,
};

describe("<Navbar/>", () => {
  beforeEach(() => {
    renderWithProviders(<Navbar />, {
      preloadedState: { checkout: initialState },
    });
  });

  test("should to match snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  test("should have to badge", () => {
    const badge = screen.getByTestId("badge");
    expect(badge).toBeTruthy();
  });
});
