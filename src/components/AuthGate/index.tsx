import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'react-redux';
import { AuthState } from '../../store/slices/authSlice';
import { ERoute } from '../../data/routes';

export const AuthGate = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const router = useRouter();
  const store = useStore();
  const currentState: AuthState = store.getState().auth as AuthState;

  console.log('inside gate', window.location.pathname);

  if (
    currentState.authState &&
    window.location.pathname === (ERoute.login as string)
  ) {
    router.push(ERoute.home).catch(() => {
      console.log('Error while redirecting to home page');
    });

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return children;
};
