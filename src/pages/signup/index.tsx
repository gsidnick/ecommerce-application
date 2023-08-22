import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useState, ReactNode, useRef } from 'react';
import { toast } from 'react-toastify';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import Loader from '@/components/ui/loader/Loader';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  setAuthState,
  setExpirationTime,
  setRefreshToken,
  setToken,
} from '@/store/slices/authSlice';
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
import { ERoute } from '@/data/routes';
import { HttpStatus, IApiLoginResult } from '@/api/types';

const postcodeKeys = Object.keys(postcodes);

const initialValues: RegisterProps = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  billingCountry: 'US',
  billingAddress: '',
  billingCity: '',
  billingPostcode: '',
  shippingCountry: 'US',
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
  const [billingCountry, setBillingCountry] = useState<PostcodeName>('US');
  const [shippingCountry, setShippingCountry] = useState<PostcodeName>('US');
  const [billingDefault, setBillingDefault] = useState(false);
  const shippingCountryRef = useRef<HTMLSelectElement>(null);
  const defaultShippingRef = useRef<HTMLInputElement>(null);
  const customerController = new CustomerController();
  const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
    firstName: nameSchema,
    lastName: nameSchema,
    dateOfBirth: dateSchema,
    billingCountry: countrySchema,
    billingAddress: addressSchema,
    billingCity: citySchema,
    billingPostcode: getPostcodeSchema(billingCountry),
    shippingCountry: countrySchema,
    shippingAddress: addressSchema,
    shippingCity: citySchema,
    shippingPostcode: getPostcodeSchema(shippingCountry),
  });

  const handleErrorApiResult = (apiResult: HttpErrorType): void => {
    const errorMessage =
      ((apiResult.body?.message as string) || apiResult.message) ?? '';

    if (errorMessage.length) {
      toast.error(errorMessage);
    }
  };

  const handleSubmit = (values: RegisterProps): void => {
    setIsLoading(true);

    const customerDraft = createCustomerDraft(values);

    customerController
      .registerCustomer(customerDraft)
      .then((response) => {
        if (
          response.apiResult.statusCode === HttpStatus.CREATED &&
          !response.apiResult.error
        ) {
          toast.success('Registration successful');

          const { email, password } = values;

          customerController
            .loginCustomer({
              email,
              password,
            })
            .then((loginResponse: IApiLoginResult) => {
              if (
                loginResponse.apiResult.statusCode === HttpStatus.OK &&
                loginResponse.token?.token.length
              ) {
                if (loginResponse.token) {
                  const { token, refreshToken, expirationTime } =
                    loginResponse.token;

                  dispatch(setAuthState(true));
                  dispatch(setToken(token));
                  dispatch(setRefreshToken(refreshToken ?? ''));
                  dispatch(setExpirationTime(expirationTime));

                  toast.success('Authenticated successfully');

                  router.push(ERoute.home).catch(() => {
                    toast.error('Error while redirecting to home page');
                  });

                  return;
                }
              }

              handleErrorApiResult(loginResponse.apiResult as HttpErrorType);
            })
            .catch(() => {
              toast.error('General login error');
            });
        }

        handleErrorApiResult(response.apiResult as HttpErrorType);
      })
      .catch(() => {
        toast.error('General registration error, try later');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = (): void => {
    router.push(ERoute.login).catch(() => {
      toast.error('Error while redirecting to login page');
    });
  };

  const handleBackToMain = (): void => {
    router.push(ERoute.home).catch(() => {
      toast.error('Error while redirecting to home page');
    });
  };

  const handleSelectBillingCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    values: RegisterProps,
    resetForm: FormikProps<RegisterProps>['resetForm'],
    setFieldValue: FormikProps<RegisterProps>['setFieldValue']
  ): void => {
    setBillingCountry(e.target.value);
    resetForm({
      values: {
        ...values,
        billingAddress: '',
        billingCity: '',
        billingPostcode: '',
      },
    });
    // eslint-disable-next-line no-void
    void setFieldValue('billingCountry', e.target.value);

    if (billingDefault) {
      // eslint-disable-next-line no-void
      void setFieldValue('shippingCountry', e.target.value);
      if (shippingCountryRef.current)
        shippingCountryRef.current.value = e.target.value;
    }
  };

  const handleSelectShippingCountry = (
    e: ChangeEvent<HTMLSelectElement>,
    values: RegisterProps,
    resetForm: FormikProps<RegisterProps>['resetForm'],
    setFieldValue: FormikProps<RegisterProps>['setFieldValue']
  ): void => {
    setShippingCountry(e.target.value);
    resetForm({
      values: {
        ...values,
        shippingAddress: '',
        shippingCity: '',
        shippingPostcode: '',
      },
    });
    // eslint-disable-next-line no-void
    void setFieldValue('shippingCountry', e.target.value);
  };

  const handleDefaultBilling = (
    e: ChangeEvent<HTMLInputElement>,
    handleChange: FormikProps<RegisterProps>['handleChange'],
    setFieldValue: FormikProps<RegisterProps>['setFieldValue']
  ): void => {
    handleChange(e);
    if (billingDefault) {
      // eslint-disable-next-line no-void
      void setFieldValue('defaultShipping', e.target.checked);
      if (defaultShippingRef.current) {
        defaultShippingRef.current.checked = e.target.checked;
      }
    }
  };

  const handleSameBilling = (
    e: ChangeEvent<HTMLInputElement>,
    values: RegisterProps,
    resetForm: FormikProps<RegisterProps>['resetForm']
  ): void => {
    setBillingDefault(e.target.checked);
    setShippingCountry(values.billingCountry);
    if (shippingCountryRef.current)
      shippingCountryRef.current.value = values.billingCountry;
    resetForm({
      values: {
        ...values,
        shippingCountry: values.billingCountry,
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
          {({
            values,
            resetForm,
            setFieldValue,
            handleChange,
            touched,
            errors,
          }): ReactNode => (
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
              </div>
              <div className="mb-4 mt-8">
                <h2 className="mb-2 font-bold text-white">Billing Address:</h2>
                <div className="mb-4">
                  <select
                    id="billingCountry"
                    name="billingCountry"
                    defaultValue="US"
                    placeholder="Select a country..."
                    onChange={(e): void =>
                      handleSelectBillingCountry(
                        e,
                        values,
                        resetForm,
                        setFieldValue
                      )
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
                  {touched.billingCountry && errors.billingCountry && (
                    <div className="text-rose-500">{errors.billingCountry}</div>
                  )}
                </div>
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
                      onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                        handleDefaultBilling(e, handleChange, setFieldValue)
                      }
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
                  <select
                    id="shippingCountry"
                    name="shippingCountry"
                    defaultValue="US"
                    ref={shippingCountryRef}
                    placeholder="Select a country..."
                    disabled={billingDefault}
                    onChange={(e): void =>
                      handleSelectShippingCountry(
                        e,
                        values,
                        resetForm,
                        setFieldValue
                      )
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
                  {touched.shippingCountry && errors.shippingCountry && (
                    <div className="text-rose-500">
                      {errors.shippingCountry}
                    </div>
                  )}
                </div>
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
                      ref={defaultShippingRef}
                      onChange={handleChange}
                      disabled={billingDefault}
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
              <button
                type="button"
                className="mt-3 flex w-full justify-center text-white"
                onClick={handleBackToMain}
              >
                Return to main page
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
