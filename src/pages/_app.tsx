import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import ToastNotification from '../components/ToastNotification';
import { AuthGate } from '../components/AuthGate';
import Container from '../components/Containter/Container';

function App({ Component, pageProps }: AppProps): ReactElement {
  const { store } = wrapper.useWrappedStore(pageProps);
  const { persistor } = store;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading</div>}>
        <AuthGate>
          <Container>
            <Component {...pageProps} />
          </Container>
        </AuthGate>
        <ToastNotification />
      </PersistGate>
    </Provider>
  );
}

export default App;
