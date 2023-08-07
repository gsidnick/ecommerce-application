import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function App({ Component, ...rest }: AppProps<unknown>): JSX.Element {
  const { store } = wrapper.useWrappedStore(rest);
  const { __persistor } = store;

  return (
    <Provider store={store}>
      <PersistGate persistor={__persistor} loading={<div>Loading</div>}>
        <Component {...rest} />
      </PersistGate>
    </Provider>
  );
}

export default App;
