import { ListOfProductsSelected } from "@components/layout";
import { listOfFakeProducts } from "@data/listOfProducts.data";
import { renderWithProviders } from "@redux/utils";
import { screen } from "@testing-library/react";

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => children,
}));

const listOfSelectedProducts = listOfFakeProducts.slice(0, 3);

describe("<ListOfProductsSelected/>", () => {
  beforeEach(() => {
    renderWithProviders(
      <ListOfProductsSelected listOfSelectedProducts={listOfSelectedProducts} />
    );
  });

  test("should to match snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  test("should render three selected product", () => {
    const products = screen.getAllByRole('listitem');
    expect(products.length).toBe(listOfSelectedProducts.length);
  });
});
