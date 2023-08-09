import '@/styles/globals.css';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

function App({ Component, ...rest }: AppProps): ReactElement {
  const { store } = wrapper.useWrappedStore(rest);
  const { persistor } = store;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading</div>}>
        <Component {...rest} />
      </PersistGate>
    </Provider>
  );
}

export default App;
