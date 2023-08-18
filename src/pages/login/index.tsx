/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, FormikHelpers, FormikState } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useState, ReactNode } from 'react';
import { setAuthState } from '../../store/slices/authSlice';
import { LoginProps } from '../api/user/login';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Loader from '../../components/ui/loader/Loader';
import EyePassVisible from '../../components/ui/icons/EyePassVisible';
import EyePass from '../../components/ui/icons/EyePass';
import { emailSchema, passwordSchema } from '@/validation/schemas';
import CustomInput from '@/components/CustomInput';
import ValidationPrompt from '@/components/ValidationPrompt';

const initialValues: LoginProps = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [visionPass, setVisionPass] = useState<boolean>(false);

  const onSubmit = (
    values: LoginProps,
    { resetForm }: FormikHelpers<typeof initialValues>
  ): void => {
    setIsLoading(true);
    console.log('values', values);

    const loginUser = async (data: LoginProps): Promise<void> => {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        dispatch(setAuthState(true));
        resetForm();
        router.push('/').catch(() => {
          console.log('Error while redirecting to registration page');
        });
        return;
      }
      console.log('Login failed');
    };

    loginUser(values)
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        console.log('Error while logging in');
        setIsLoading(false);
      });
  };

  const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
  });

  const handleRegistration = (): void => {
    console.log('Registration clicked');

    router.push('/signup').catch(() => {
      console.log('Error while redirecting to registration page');
    });
  };

  const toggleVisionPass = (): void => {
    setVisionPass(!visionPass);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ values }: FormikState<typeof initialValues>): ReactNode => (
            <Form>
              <div className="mb-4">
                <CustomInput name="email" type="email" placeholder="Email" />
              </div>
              <div className="relative mb-4">
                <CustomInput
                  name="password"
                  type={visionPass ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className={`absolute right-3 top-3 text-white transition-transform ease-in-out ${
                    visionPass ? 'rotate-0' : 'rotate-180'
                  }`}
                  onClick={toggleVisionPass}
                >
                  {visionPass ? <EyePassVisible /> : <EyePass />}
                </button>
                <ValidationPrompt validation={values.password} />
              </div>
              <div className="mb-4 flex items-center justify-start">
                <label
                  className="flex items-center justify-start text-white"
                  htmlFor="rememberMe"
                >
                  <CustomInput
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={values.rememberMe}
                  />
                  <span className='ml-3'>Remember Me</span>
                </label>
              </div>
              <button
                type="submit"
                className={`flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 ${
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
                className="mt-2 w-full rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
