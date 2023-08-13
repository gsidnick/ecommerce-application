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
      password: Yup.string().required('Required'),
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
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-96 rounded bg-gray-800 p-6 shadow-md">
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
              className="w-full rounded-md border bg-gray-700 p-2 text-white"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full rounded-md border bg-gray-700 p-2 text-white"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
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
            className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={handleRegistration}
            className="mt-2 w-full rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
