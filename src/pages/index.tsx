import type { GetServerSideProps, NextPage } from 'next';
import { AppStore, wrapper } from '@/store/store';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useActions } from '@/hooks/useActions';
import Link from 'next/link';

interface Data {
  authState: boolean;
}

const Home: NextPage = () => {
  const { authState } = useAppSelector((state) => state.authReducer);
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
