import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState, ReactNode } from 'react';
import Loader from '@/components/ui/loader/Loader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setAuthState } from '@/store/slices/authSlice';
import { PostcodeName, RegisterProps } from '@/types';
import { postcodes } from '@/validation/patterns';
import CustomerController from '@/api/controllers/CustomerController';
import { createCustomerDraft } from '@/api/helpers/customerDraft';
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
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  country: '',
  billingAddress: '',
  billingCity: '',
  billingPostcode: '',
  shippingAddress: '',
  shippingCity: '',
  shippingPostcode: '',
  sameBilling: false,
  defaultBilling: false,
  defaultShipping: false,
};

// eslint-disable-next-line max-lines-per-function
const RegisterPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState<PostcodeName>('US');
  const [billingDefault, setBillingDefault] = useState(false);
  const customerController = new CustomerController();
  const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
    firstName: nameSchema,
    lastName: nameSchema,
    dateOfBirth: dateSchema,
    country: countrySchema,
    billingAddress: addressSchema,
    billingCity: citySchema,
    billingPostcode: getPostcodeSchema(country),
    shippingAddress: addressSchema,
    shippingCity: citySchema,
    shippingPostcode: getPostcodeSchema(country),
  });

  const handleSubmit = async (values: RegisterProps): Promise<void> => {
    try {
      setIsLoading(true);
      const customerDraft = createCustomerDraft(values);
      await customerController.registerCustomer(customerDraft);
      const { email, password } = values;
      await customerController.loginCustomer({
        email,
        password,
      });
      setIsLoading(false);
      dispatch(setAuthState(true));
      router
        .push('/')
        .catch(() => console.error('Error while redirecting to home page'));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (): void => {
    console.log('Login clicked');
    router.push('/login').catch(() => {
      console.log('Error while redirecting to login page');
    });
  };

  const handleSelectCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    values: RegisterProps,
    resetForm: FormikProps<RegisterProps>['resetForm'],
    setFieldValue: FormikProps<RegisterProps>['setFieldValue']
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
    // eslint-disable-next-line no-void
    void setFieldValue('country', e.target.value);
  };

  const handleSameBilling = (
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
        sameBilling: e.target.checked,
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 rounded bg-background-main p-6 shadow-modal">
        <h1 className="mb-4 text-2xl font-semibold text-white">Sign Up</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, resetForm, setFieldValue, handleChange }): ReactNode => (
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
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="dateOfBirth"
                    type="date"
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <select
                    id="country"
                    name="country"
                    defaultValue=""
                    placeholder="Select a country..."
                    onChange={(e): void =>
                      handleSelectCountry(e, values, resetForm, setFieldValue)
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
                    placeholder="Street Address"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <div className="mb-4">
                  <CustomBillingInput
                    name="billingCity"
                    type="text"
                    placeholder="City / Town"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <div className="mb-4">
                  <CustomBillingInput
                    name="billingPostcode"
                    type="text"
                    placeholder="Postcode / ZIP"
                    isBillingIdenticalAsShipping={billingDefault}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-white" htmlFor="defaultBilling">
                    <input
                      type="checkbox"
                      name="defaultBilling"
                      id="defaultBilling"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Set this billing address as default
                  </label>
                </div>
                <div className="mb-4">
                  <label className="text-white" htmlFor="sameBilling">
                    <input
                      type="checkbox"
                      name="sameBilling"
                      id="sameBilling"
                      onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                        handleSameBilling(e, values, resetForm)
                      }
                      className="mr-2"
                    />
                    Shipping address same as billing address
                  </label>
                </div>
              </div>

              <div className="mb-4 mt-8">
                <h2 className="mb-2 font-bold text-white">Shipping Address:</h2>
                <div className="mb-4">
                  <CustomInput
                    name="shippingAddress"
                    type="text"
                    placeholder="Street Address"
                    disabled={billingDefault}
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="shippingCity"
                    type="text"
                    placeholder="City / Town"
                    disabled={billingDefault}
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    id="shippingPostcode"
                    name="shippingPostcode"
                    type="text"
                    placeholder="Postcode / ZIP"
                    disabled={billingDefault}
                    isWhiteSpacesAllowed
                  />
                </div>
                <div className="mb-4">
                  <label className="text-white" htmlFor="defaultShipping">
                    <input
                      type="checkbox"
                      name="defaultShipping"
                      id="defaultShipping"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Set this shipping address as default
                  </label>
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
