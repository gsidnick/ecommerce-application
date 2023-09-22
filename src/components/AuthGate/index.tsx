import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ERoute } from '@/data/routes';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  selectAuthState,
  setExpirationTime,
  setRefreshToken,
  setToken,
} from '@/store/slices/authSlice';
import CustomerController from '@/api/controllers/CustomerController';
import { IMMEDIATE_INVOKE } from '@/constants';

export const AuthGate = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { authState, token: tokenState } = useAppSelector(selectAuthState);
  const customerController = new CustomerController();

  useEffect(() => {
    const anonymous = setTimeout(() => {
      if (!authState && !tokenState) {
        customerController
          .createAnonymousCustomer()
          .then((response) => {
            const { token, refreshToken, expirationTime } = response;
            dispatch(setToken(token));
            dispatch(setRefreshToken(refreshToken ?? ''));
            dispatch(setExpirationTime(expirationTime));
          })
          .catch(console.error);
      } else {
        customerController.checkToken().then(console.log).catch(console.error);
      }
    }, IMMEDIATE_INVOKE);

    const redirect = setInterval(() => {
      if (
        authState &&
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
      }
    }, IMMEDIATE_INVOKE);

    return () => {
      clearInterval(anonymous);
      clearInterval(redirect);
    };
  }, []);

  return children;
};
