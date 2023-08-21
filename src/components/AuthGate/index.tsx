import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'react-redux';
import { toast } from 'react-toastify';
import { ERoute } from '@/data/routes';
import { RootState } from '@/store/store';

export const AuthGate = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const router = useRouter();
  const store = useStore<RootState>();
  const currentState = store.getState();

  const isAuth = currentState.auth.authState;

  if (
    isAuth &&
    window.location.pathname === (ERoute.login as string)
  ) {
    router.push(ERoute.home).then(() => {
      toast.info('Already logged in, redirect to main page');
    })
    .catch(() => {
      toast.error('Error while redirecting to home page');
    });

    return null;
  }

  return children;
};
