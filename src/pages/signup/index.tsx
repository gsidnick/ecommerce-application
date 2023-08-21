import {
  Formik,
  Form,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState, ReactNode } from 'react';
import Loader from '@/components/ui/loader/Loader';
import { PostcodeName, RegisterProps } from '@/types';
import { postcodes } from '@/validation/patterns';
import {
  addressSchema,
  citySchema,
  countrySchema,
  dateSchema,
  emailSchema,
  getPostcodeSchema,
  nameSchema,
  passwordSchema,
} from '@/validation/schemas';
import CustomInput from '@/components/CustomInput';
import CustomBillingInput from '@/components/CustomInput/CustomBillingInput';

const postcodeKeys = Object.keys(postcodes);

const initialValues: RegisterProps = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  date: '',
  country: '',
  billingAddress: '',
  billingCity: '',
  billingPostcode: '',
  shippingAddress: '',
  shippingCity: '',
  shippingPostcode: '',
};

// eslint-disable-next-line max-lines-per-function
const RegisterPage: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState<PostcodeName>('USA');
  const [billingDefault, setBillingDefault] = useState(false);

  const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
    firstname: nameSchema,
    lastname: nameSchema,
    date: dateSchema,
    country: countrySchema,
    billingAddress: addressSchema,
    billingCity: citySchema,
    billingPostcode: getPostcodeSchema(country),
    shippingAddress: addressSchema,
    shippingCity: citySchema,
    shippingPostcode: getPostcodeSchema(country),
  });

  const onSubmit = (values: RegisterProps): void => {
    setIsLoading(true);
    console.log('Form submitted with values:', values);
  };

  const handleLogin = (): void => {
    console.log('Login clicked');

    router.push('/login').catch(() => {
      console.log('Error while redirecting to login page');
    });
  };

  const handleSelectCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    resetForm: FormikProps<RegisterProps>['resetForm'],
    values: RegisterProps
  ): void => {
    setCountry(e.target.value);
    resetForm({
      values: {
        ...values,
        billingAddress: '',
        billingCity: '',
        billingPostcode: '',
        shippingAddress: '',
        shippingCity: '',
        shippingPostcode: '',
      },
    });
  };

  const handleBillingDefault = (
    e: ChangeEvent<HTMLInputElement>,
    values: RegisterProps,
    resetForm: FormikProps<RegisterProps>['resetForm']
  ): void => {
    setBillingDefault(e.target.checked);
    resetForm({
      values: {
        ...values,
        shippingAddress: values.billingAddress,
        shippingCity: values.billingCity,
        shippingPostcode: values.billingPostcode,
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Sign Up</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ values, resetForm }): ReactNode => (
            <Form>
              <div className="border-b border-gray-900/10">
                <div className="mb-4">
                  <CustomInput name="email" type="text" placeholder="Email" />
                </div>
                <div className="relative mb-4">
                  <CustomInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    isSignUpPassInput
                  />
                 </div>

                <div className="mb-4">
                  <CustomInput
                    name="firstname"
                    type="text"
                    placeholder="First Name*"
                    isWhiteSpacesAllowed
                  />
                 </div>
                <div className="mb-4">
                  <CustomInput
                    name="lastname"
                    type="text"
                    placeholder="Last Name*"
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <CustomInput name="date" type="date" isWhiteSpacesAllowed />
                </div>
                <div className="mb-4">
                  <select
                    id="country"
                    name="country"
                    defaultValue=""
                    placeholder="Select a country..."
                    onChange={(e): void =>
                      handleSelectCountry(e, resetForm, values)
                    }
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
                </div>
              </div>
              <div className="mb-4 mt-8">
                <h2 className="mb-2 font-bold text-white">Billing Address:</h2>
                <div className="mb-4">
                  <CustomBillingInput
                    name="billingAddress"
                    type="text"
                    placeholder="Street Address*"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <div className="mb-4">
                  <CustomBillingInput
                    name="billingCity"
                    type="text"
                    placeholder="City / Town*"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <div className="mb-4">
                  <CustomBillingInput
                    name="billingPostcode"
                    type="text"
                    placeholder="Postcode / ZIP*"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <label className="text-white" htmlFor="billingDefaultAddress">
                  <input
                    type="checkbox"
                    name="billingDefaultAddress"
                    id="billingDefaultAddress"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                      handleBillingDefault(e, values, resetForm)
                    }
                    className="mr-2"
                  />
                  Shipping address same as billing address
                </label>
              </div>

              <div className="mb-4 mt-8">
                <h2 className="mb-2 font-bold text-white">Shipping Address:</h2>
                <div className="mb-4">
                  <CustomInput
                    name="shippingAddress"
                    type="text"
                    placeholder="Street Address*"
                    isWhiteSpacesAllowed
                    disabled={billingDefault}
                  />

                </div>
                <div className="mb-4">
                  <CustomInput
                name="shippingCity"
                type="text"
                placeholder="City / Town*"
                disabled={billingDefault}
                isWhiteSpacesAllowed
              />
                </div>
                <div className="mb-4">
                  <CustomInput
                id="shippingPostcode"
                name="shippingPostcode"
                type="text"
                placeholder="Postcode / ZIP*"
                disabled={billingDefault}
                isWhiteSpacesAllowed
              />
                </div>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default RegisterPage;
