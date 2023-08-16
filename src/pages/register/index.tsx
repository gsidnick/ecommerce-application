import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import EyePassVisible from '@/components/ui/icons/EyePassVisible';
import EyePass from '@/components/ui/icons/EyePass';
import Loader from '@/components/ui/loader/Loader';

const MIN_PASSWORD_LENGTH = 8;
const MAX_YEARS = 13;
const DAYS_IN_YEARS = 365;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
const MAX_DATE = new Date(
  Date.now() -
    MAX_YEARS *
      DAYS_IN_YEARS *
      HOURS_IN_DAY *
      MINUTES_IN_HOUR *
      SECONDS_IN_MINUTE *
      MILLISECONDS_IN_SECOND
);

export interface RegisterProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  date: string;
  country: string;
  billingAddress: string;
  billingCity: string;
  billingPostcode: string;
  shippingAddress: string;
  shippingCity: string;
  shippingPostcode: string;
}

type PostcodeName = keyof typeof postcodes;

const postcodes = {
  USA: {
    label: 'United States',
    pattern: /(^(\d{5})$)|(^\d{5}-\d{4}$)/,
    message: 'Postal code must be in 99999 or 99999-9999 format',
  },
  Canada: {
    label: 'Canada',
    pattern: /(^[A-Z]\d[A-Z][\s-]\d[A-Z]\d$)/,
    message: 'Postal code must be in A9A 9A9 or A9A-9A9 format',
  },
  UK: {
    label: 'United Kingdom',
    pattern:
      /(^[A-Z]{3}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d{2}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d\s\d[A-Z]{2}$)/,
    message: 'Postal code must be in AAA 9AA or AA99 9AA or AA9 9AA format',
  },
  Argentina: {
    label: 'Argentina',
    pattern: /(^[A-Z]\d{4}[A-Z]{3}$)/,
    message: 'Postal code must be in A9999AAA format',
  },
  Mexico: {
    label: 'Mexico',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
};

const postcodeKeys = Object.keys(postcodes) as PostcodeName[];

const initialValues: RegisterProps = {
  email: 'user@example.com',
  password: 'A!s2d3qwe',
  firstname: 'John',
  lastname: 'Doe',
  date: '2000-01-01',
  country: '',
  billingAddress: '1242 34th St NW',
  billingCity: 'Washington',
  billingPostcode: '20007',
  shippingAddress: '3752 Benton St NW',
  shippingCity: 'Washington',
  shippingPostcode: '20008',
};

// eslint-disable-next-line max-lines-per-function
const RegisterPage: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [visionPass, setVisionPass] = useState<boolean>(false);
  const [country, setCountry] = useState<PostcodeName>('USA');
  const [billingDefault, setBillingDefault] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formik = useFormik({
    initialValues,
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
      firstname: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'First name must contain at least 1 letters')
        .required('Required'),
      lastname: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Last name must contain at least 1 letters')
        .required('Required'),
      date: Yup.date()
        .max(MAX_DATE, 'Date of birth must be more than 13 years old')
        .required('Required'),
      country: Yup.string().required('Required'),
      billingAddress: Yup.string()
        .matches(
          /^[a-zA-Z0-9\s]+$/,
          'Street address must contain at least 1 letters'
        )
        .required('Required'),
      billingCity: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'City must contain at least 1 letters')
        .required('Required'),
      billingPostcode: Yup.string()
        .matches(postcodes[country].pattern, postcodes[country].message)
        .required('Required'),
      shippingAddress: Yup.string()
        .matches(
          /^[a-zA-Z0-9\s]+$/,
          'Street address must contain at least 1 letters'
        )
        .required('Required'),
      shippingCity: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'City must contain at least 1 letters')
        .required('Required'),
      shippingPostcode: Yup.string()
        .matches(postcodes[country].pattern, postcodes[country].message)
        .required('Required'),
    }),
    onSubmit: (values: RegisterProps) => {
      setIsLoading(true);
      console.log('Form submitted with values:', values);
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

  const handleLogin = (): void => {
    console.log('Login clicked');

    router.push('/login').catch(() => {
      console.log('Error while redirecting to login page');
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

  const handleSelectCountry = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCountry(e.target.value as PostcodeName);

    formik.resetForm({
      values: {
        ...formik.values,
        billingAddress: '',
        billingCity: '',
        billingPostcode: '',
        shippingAddress: '',
        shippingCity: '',
        shippingPostcode: '',
      },
    });

    formik.setFieldValue('country', e.target.value).catch(() => {
      console.log('Error setting country field');
    });
  };

  const handleBillingDefault = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillingDefault(e.target.checked);
    formik.resetForm({
      values: {
        ...formik.values,
        shippingAddress: formik.values.billingAddress,
        shippingCity: formik.values.billingCity,
        shippingPostcode: formik.values.billingPostcode,
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Registration</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="border-b border-gray-900/10">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-rose-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password*"
                name="password"
                ref={passwordRef}
                value={formik.values.password}
                onChange={formik.handleChange}
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
              {formik.errors.password && (
                <div className="text-red-500">
                  {formik.touched.password && formik.errors.password && (
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
                  )}
                </div>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name*"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <div className="text-rose-500">{formik.errors.firstname}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <div className="text-rose-500">{formik.errors.lastname}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.date && formik.errors.date && (
                <div className="text-rose-500">{formik.errors.date}</div>
              )}
            </div>
            <div className="mb-4">
              <select
                id="country"
                name="country"
                defaultValue=""
                placeholder="Select a country..."
                onChange={handleSelectCountry}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              >
                <option value="" disabled hidden>
                  Choose a country...
                </option>
                {postcodeKeys.map((key) => (
                  <option key={key} value={key}>
                    {postcodes[key].label}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="text-rose-500">{formik.errors.country}</div>
              )}
            </div>
          </div>

          <div className="mb-4 mt-8">
            <h2 className="mb-2 font-bold text-white">Billing Address:</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Street Address*"
                name="billingAddress"
                value={formik.values.billingAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.billingAddress &&
                formik.errors.billingAddress && (
                  <div className="text-rose-500">
                    {formik.errors.billingAddress}
                  </div>
                )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="City / Town*"
                name="billingCity"
                value={formik.values.billingCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.billingCity && formik.errors.billingCity && (
                <div className="text-rose-500">{formik.errors.billingCity}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Postcode / ZIP*"
                name="billingPostcode"
                value={formik.values.billingPostcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
              />
              {formik.touched.billingPostcode &&
                formik.errors.billingPostcode && (
                  <div className="text-rose-500">
                    {formik.errors.billingPostcode}
                  </div>
                )}
            </div>
            <label className="text-white" htmlFor="billingDefaultAddress">
              <input
                type="checkbox"
                name="billingDefaultAddress"
                id="billingDefaultAddress"
                onChange={handleBillingDefault}
                className="mr-2"
              />
              Set as address for billing and shipping
            </label>
          </div>

          {!billingDefault && (
            <div className="mb-4 mt-8">
              <h2 className="mb-2 font-bold text-white">Shipping Address:</h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Street Address*"
                  name="shippingAddress"
                  value={formik.values.shippingAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
                />
                {formik.touched.shippingAddress &&
                  formik.errors.shippingAddress && (
                    <div className="text-rose-500">
                      {formik.errors.shippingAddress}
                    </div>
                  )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="City / Town*"
                  name="shippingCity"
                  value={formik.values.shippingCity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
                />
                {formik.touched.shippingCity && formik.errors.shippingCity && (
                  <div className="text-rose-500">
                    {formik.errors.shippingCity}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Postcode / ZIP*"
                  name="shippingPostcode"
                  id="shippingPostcode"
                  value={formik.values.shippingPostcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-md border border-neutral-800 bg-background-main p-2 text-white focus:border-neutral-500 focus:outline-none"
                />
                {formik.touched.shippingPostcode &&
                  formik.errors.shippingPostcode && (
                    <div className="text-rose-500">
                      {formik.errors.shippingPostcode}
                    </div>
                  )}
              </div>
            </div>
          )}
          <button
            type="submit"
            className={`flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 ${
              isLoading ? 'cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : ''}
            <span className="mx-[4px]">
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </span>
          </button>
          <button
            type="button"
            onClick={handleLogin}
            className="mt-2 w-full rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
