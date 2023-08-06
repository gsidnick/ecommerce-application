import type { GetServerSideProps, NextPage } from 'next';
import { wrapper } from '@/store/store';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useActions } from '@/hooks/useActions';
import Link from 'next/link';
import { setAuthState } from '../store/actionCreators';

interface AuthState {
  authState: boolean;
}

const Home: NextPage = () => {
  const { authState } = useAppSelector((state) => state.auth);
  const { setAuthState } = useActions();

  return (
    <div
      style={{
        display: 'grid',
        justifyItems: 'center',
        margin: '20px',
        gridRowGap: '20px',
      }}
    >
      <Link href="/second-page">Go to second page</Link>
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        onClick={(): void => {
          if (authState) {
            setAuthState(false);
          } else {
            setAuthState(true);
          }
        }}
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<AuthState> =
  wrapper.getServerSideProps(
    (store) => async (): Promise<{ props: AuthState }> => {
      await Promise.resolve();
      store.dispatch(setAuthState(false));

      return {
        props: {
          authState: false,
        },
      };
    }
  );

export default Home;
