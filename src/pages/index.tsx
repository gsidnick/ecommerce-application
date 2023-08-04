import type { GetServerSideProps, NextPage } from 'next';
import { selectAuthState, setAuthState } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore, wrapper } from '../store/store';
import Link from 'next/link';
import { PayloadAction } from '@reduxjs/toolkit';

interface Data {
  authState: boolean;
}

const Home: NextPage = () => {
  const authState: boolean = useSelector(selectAuthState);
  const dispatch = useDispatch();

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
        onClick={(): PayloadAction<boolean> =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? 'Logout' : 'LogIn'}
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ props: Data }> =
  wrapper.getServerSideProps(() => {
    (store: AppStore): { props: Data } => {
      console.log(store);

      return {
        props: {
          authState: false,
        },
      };
    };
  });

export default Home;
