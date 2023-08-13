import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { selectAuthState, setAuthState } from '../../store/slices/authSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { LoginProps } from '../api/user/login';

interface Props {
  savedEmail: string;
}
const MIN_PASSWORD_LENGTH = 8;

// eslint-disable-next-line max-lines-per-function
const LoginPage: NextPage<Props> = ({ savedEmail }: Props) => {
  console.log(savedEmail);

  const rounter = useRouter();
  const dispatch = useDispatch();

  const { authState } = useAppSelector(selectAuthState);

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
      .trim(),
    }),
    onSubmit: (values: LoginProps) => {
      console.log('Form submitted with values:', values);

      const loginUser = async (data: LoginProps): Promise<void> => {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Login successful', authState);
          const json = (await response.json()) as string;

          console.log(json);

          dispatch(setAuthState(true));

          console.log('Login successful', authState);

          return;
        }

        console.log('Login failed');
      };

      loginUser(values)
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          console.log('Error while logging in');
        });
    },
  });

  const handleRegistration = (): void => {
    console.log('Registration clicked');

    rounter.push('/register').catch(() => {
      console.log('Error while redirecting to registration page');
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded shadow-modal bg-background-main w-96">
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
              className="w-full p-2 text-white border rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none bg-background-main"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-rose-500">{formik.errors.email}</div>
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
              className="w-full p-2 text-white border rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none bg-background-main"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-rose-500">{formik.errors.password}</div>
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
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In
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
