import { CreditCardForm } from "@components/features/creditCardForm";
import { renderWithProviders } from "@redux/utils";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: ({ children }: { children: React.ReactNode }) => children,
}));

describe("CreditCardForm", () => {
  beforeEach(() => {
    renderWithProviders(<CreditCardForm />);
  });

  test("should to match snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  test("should display required error when value is invalid", async () => {
    const buttonSubmit = screen.getByRole("button");
    fireEvent.submit(buttonSubmit);
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(4);
  });

  test("should not display error when value is valid", async () => {
    const userNameInput: HTMLInputElement = await screen.findByRole("textbox", {name: /userName/i});
    const cardNumberInput: HTMLInputElement = await screen.findByRole("textbox", {name: /cardNumber/i});
    const expiryInput: HTMLInputElement = await screen.findByRole("textbox", {name: /expiry/i});
    const cvcInput: HTMLInputElement = await screen.findByRole("textbox", {name: /cvc/i});
    const buttonSubmit = await screen.findByRole("button");

    await act(async () => {
      fireEvent.input(userNameInput, { target: { value: "Test" } });
      fireEvent.input(cardNumberInput, { target: { value: "5454 5454 5454 5454" } });
      fireEvent.input(expiryInput, { target: { value: "11/25" } });
      fireEvent.input(cvcInput, { target: { value: "777" } });
      fireEvent.submit(buttonSubmit);
    });

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(userNameInput.value).toBe('Test');
    expect(cardNumberInput.value).toBe('5454 5454 5454 5454');
    expect(expiryInput.value).toBe('11/25');
    expect(cvcInput.value).toBe('777');
  });
});
