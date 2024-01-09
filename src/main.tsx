import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { setupStore } from "./redux/store";
import { App } from "./App.tsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
