import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  Persistor,
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import authReducer, { authSlice } from '@/store/slices/authSlice';
import menuReducer, { menuSlice } from '@/store/slices/menuSlice';
import productsReducer, { productsSlice } from '@/store/slices/productsSlice';
import filterReducer, { filterSlice } from '@/store/slices/filterSlice';
import storage from './helpers/storage';

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [menuSlice.name]: menuReducer,
  [productsSlice.name]: productsReducer,
  [filterSlice.name]: filterReducer,
});

export interface IPersistorStore {
  persistor: Persistor;
}

const setupStore = (): ToolkitStore =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export const makeStore = (): ToolkitStore & IPersistorStore => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return { ...setupStore(), persistor: persistStore(setupStore()) };
  }

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth'],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store: ToolkitStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  return { ...store, persistor: persistStore(store) };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type ClientStore = ReturnType<typeof setupStore>;
export type AppDispatch = ClientStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
