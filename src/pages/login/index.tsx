import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ReactElement, useState } from 'react';
import { setAuthState } from '../../store/slices/authSlice';
import { LoginProps } from '../api/user/login';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Loader from '../../components/ui/loader/Loader';

const MIN_PASSWORD_LENGTH = 8;

// eslint-disable-next-line max-lines-per-function
const LoginPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(MIN_PASSWORD_LENGTH, 'Password must be at least 8 characters long')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          'Password must meet the requirements'
        )
        .test(
          'special-characters',
          'Password must contain at least one special character (e.g., !@#$%^&*)',
          (value) => /[!@#$%^&*]/.test(value)
        )
        .test(
          'no-whitespace',
          'Password must not contain leading or trailing whitespace',
          (value) => !/^\s|\s$/.test(value)
        )
        .test(
          'has-uppercase',
          'Password must contain at least one uppercase letter (A-Z)',
          (value) => /[A-Z]/.test(value)
        )
        .test(
          'has-lowercase',
          'Password must contain at least one lowercase letter (a-z)',
          (value) => /[a-z]/.test(value)
        )
        .test(
          'has-digit',
          'Password must contain at least one digit (0-9)',
          (value) => /\d/.test(value)
        )
        .trim(),
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

    router.push('/register').catch(() => {
      console.log('Error while redirecting to registration page');
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded w-96 bg-background-main shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 text-white border rounded-md border-neutral-800 bg-background-main focus:border-neutral-500 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 text-white border rounded-md border-neutral-800 bg-background-main focus:border-neutral-500 focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">
                {' '}
                {formik.errors.password}
                <ul className="mt-1 ml-6 text-sm text-red-500 list-disc">
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
          <div className="flex items-center mb-4">
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
              {isLoading ? 'Signing In...' : 'Sign In'}
            </span>
          </button>
          <button
            type="button"
            onClick={handleRegistration}
            className="w-full py-2 mt-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
