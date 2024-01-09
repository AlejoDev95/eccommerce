import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { setupStore, type AppStore, type RootState } from "./../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: Readonly<PropsWithChildren>): JSX.Element {
    const { persistor, store: _store } = store;
    return (
      <Provider store={_store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
