import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ERoute } from '@/data/routes';
import { useAppStore } from '@/hooks/useAppStore';

export const AuthGate = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const router = useRouter();
  const store = useAppStore();
  const currentState = store.getState();

  const isAuth = currentState.auth.authState;

  if (
    isAuth &&
    (window.location.pathname === (ERoute.login as string) ||
      window.location.pathname === (ERoute.signup as string))
  ) {
    router
      .push(ERoute.home)
      .then(() => {
        toast.info('Already logged in, redirect to main page');
      })
      .catch(() => {
        toast.error('Error while redirecting to home page');
      });

    return null;
  }

  return children;
};
