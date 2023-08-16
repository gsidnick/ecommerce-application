import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ReactElement, useRef, useState } from 'react';
import { setAuthState } from '../../store/slices/authSlice';
import { LoginProps } from '../api/user/login';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Loader from '../../components/ui/loader/Loader';
import EyePassVisible from '../../components/ui/icons/EyePassVisible';
import EyePass from '../../components/ui/icons/EyePass';
import { emailSchema, passwordSchema } from '@/validation/schemas';
import { MIN_PASSWORD_LENGTH } from '@/constants';

const initialValues: LoginProps = {
  email: '',
  password: '',
  rememberMe: false,
};

// eslint-disable-next-line max-lines-per-function
const LoginPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [visionPass, setVisionPass] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: emailSchema,
      password: passwordSchema,
    }),
    onSubmit: (values: LoginProps) => {
      setIsLoading(true);

      const loginUser = async (data: LoginProps): Promise<void> => {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        if (response.ok) {
          dispatch(setAuthState(true));

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
    },
  });

  const renderValidationMessage = (
    fieldName: string,
    condition: boolean,
    message: string
  ): ReactElement => (
    <div className={`mb-2 ${condition ? 'text-green-500' : 'text-red-500'}`}>
      {condition ? '✓' : '×'} {message}
    </div>
  );

  const handleRegistration = (): void => {
    console.log('Registration clicked');

    router.push('/signup').catch(() => {
      console.log('Error while redirecting to registration page');
    });
  };

  const toggleVisionPass = (): void => {
    setVisionPass((prev) => {
      if (passwordRef.current) {
        passwordRef.current.type = !prev ? 'text' : 'password';
      }

      return !prev;
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={(e): void => {
                formik
                  .setFieldTouched('email')
                  .catch((error) => console.log(error));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={passwordRef}
              value={formik.values.password}
              onChange={(e): void => {
                formik
                  .setFieldTouched('password')
                  .catch((error) => console.log(error));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
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

            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">
                {' '}
                {formik.errors.password}
                <ul className="ml-6 mt-1 list-disc text-sm text-red-500">
                  {renderValidationMessage(
                    'length',
                    formik.values.password.length >= MIN_PASSWORD_LENGTH,
                    'At least 8 characters long'
                  )}
                  {renderValidationMessage(
                    'uppercase',
                    /[A-Z]/.test(formik.values.password),
                    'At least one uppercase letter (A-Z)'
                  )}
                  {renderValidationMessage(
                    'lowercase',
                    /[a-z]/.test(formik.values.password),
                    'At least one lowercase letter (a-z)'
                  )}
                  {renderValidationMessage(
                    'digit',
                    /\d/.test(formik.values.password),
                    'At least one digit (0-9)'
                  )}
                  {renderValidationMessage(
                    'special-character',
                    /[!@#$%^&*]/.test(formik.values.password),
                    'At least one special character (e.g., !@#$%^&*)'
                  )}
                  {renderValidationMessage(
                    'no-whitespace',
                    !/^\s|\s$/.test(formik.values.password),
                    'No leading or trailing whitespace'
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="text-white" htmlFor="rememberMe">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                className="mr-2"
              />
              Remember Me
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
