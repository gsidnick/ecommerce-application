import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import {
  AuthState,
  setAuthState,
  setExpirationTime,
  setRefreshToken,
  setToken,
} from '@/store/slices/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import Loader from '@/components/ui/loader/Loader';
import { emailSchema, passwordSchema } from '@/validation/schemas';
import CustomInput from '@/components/CustomInput';
import CustomerController from '@/api/controllers/CustomerController';
import { HttpStatus, IApiLoginResult, LoginProps } from '@/api/types';
import { ERoute } from '@/data/routes';

const initialValues: LoginProps = {
  email: '',
  password: '',
};

const LoginPage: NextPage<AuthState> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values: LoginProps): void => {
    setIsLoading(true);

    const customerController = new CustomerController();

    customerController
      .loginCustomer(values)
      .then((response: IApiLoginResult) => {
        if (
          response.apiResult.statusCode === HttpStatus.OK &&
          response.token?.token.length
        ) {
          if (response.token) {
            const { token, refreshToken, expirationTime } = response.token;

            dispatch(setAuthState(true));
            dispatch(setToken(token));
            dispatch(setRefreshToken(refreshToken ?? ''));
            dispatch(setExpirationTime(expirationTime));

            toast.success('Authenticated successfully');

            router.push(ERoute.home).catch(() => {
              toast.error('Error while redirecting to home page');
            });

            setIsLoading(false);

            return;
          }
        }

        setIsLoading(false);

        const errorResult = response.apiResult as HttpErrorType;

        const errorMessage =
          ((errorResult.body?.message as string) || errorResult.message) ?? '';

        if (errorMessage.length) {
          toast.error(errorMessage);
        }
      })
      .catch(() => {
        toast.error('General login error');

        setIsLoading(false);
      });
  };

  const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
  });

  const handleRegistration = (): void => {
    router.push(ERoute.signup).catch(() => {
      toast.error('Error while redirecting to registration page');
    });
  };

  const handleBackToMain = (): void => {
    router.push(ERoute.home).catch(() => {
      toast.error('Error while redirecting to home page');
    });
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="my-20 w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="mb-4">
              <CustomInput name="email" type="text" placeholder="Email" />
            </div>
            <div className="relative mb-4">
              <CustomInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-2 flex w-full">
              <button
                type="submit"
                className={`flex w-1/2 items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 ${
                  isLoading ? 'cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : ''}
                <span className="mx-[4px]">
                  {isLoading ? 'Logging In...' : 'Log In'}
                </span>
              </button>
              <button
                type="button"
                onClick={handleRegistration}
                className="ml-1 w-1/2 rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700"
              >
                Sign Up
              </button>
            </div>
            <button
              type="button"
              className="mt-3 flex w-full justify-center text-white"
              onClick={handleBackToMain}
            >
              Return to main page
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
