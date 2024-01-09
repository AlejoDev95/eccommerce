import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { checkoutSlice } from './slices/checkout/checkout.slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  checkout: checkoutSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: preloadedState as never,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['store']['dispatch'];
