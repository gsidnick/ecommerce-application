import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import { selectAuthState, setAuthState } from '@/store/slices/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { wrapper } from '@/store/store';

interface AuthState {
  authState: boolean;
}

function Home(): ReactElement {
  const { authState } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        display: 'grid',
        justifyItems: 'center',
        margin: '20px',
        gridRowGap: '20px',
      }}
    >
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        type="button"
        onClick={(): void => {
          if (authState) {
            dispatch(setAuthState(false));
          } else {
            dispatch(setAuthState(true));
          }
        }}
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </div>
  );
}

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
