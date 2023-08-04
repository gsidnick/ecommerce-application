import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { createWrapper } from 'next-redux-wrapper';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export interface IPersistorStore {
  __persistor?: Persistor;
}

const makeConfiguredStore = (): ToolkitStore =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const makeStore = (): ToolkitStore & IPersistorStore => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['auth'], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: ToolkitStore = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
    });

    (store as ToolkitStore & IPersistorStore).__persistor = persistStore(store); // Nasty hack

    return store as ToolkitStore & IPersistorStore;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
