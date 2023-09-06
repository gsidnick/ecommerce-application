import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  MyCustomerChangeEmailAction,
  MyCustomerSetDateOfBirthAction,
  MyCustomerSetFirstNameAction,
  MyCustomerSetLastNameAction,
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk/dist/declarations/src/generated/models/me';
import { Customer } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
import CustomInput from '../../CustomInput';
import { dateSchema, emailSchema, nameSchema } from '@/validation/schemas';
import Loader from '../../ui/loader/Loader';
import { RegisterProps } from '../../../types';
import PasswordChangeModal from '../ChangePassword';
import CustomerController from '../../../api/controllers/CustomerController';

export type ProfileChangableProps = Pick<
  RegisterProps,
  'email' | 'firstName' | 'lastName' | 'dateOfBirth'
>;

interface IUserInfoProps {
  inEditMode: boolean;
  initialValues: ProfileChangableProps;
}

const UserInfo: FC<IUserInfoProps> = ({
  inEditMode,
  initialValues,
}: IUserInfoProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object({
    email: emailSchema,
    firstName: nameSchema,
    lastName: nameSchema,
    dateOfBirth: dateSchema,
  });

  const handleSubmit = (values: ProfileChangableProps): void => {
    setIsLoading(true);

    let currentVersion;

    const updateUser = async (): Promise<ClientResponse<Customer>> => {
      const customerController = new CustomerController();

      const updateEmail: MyCustomerChangeEmailAction = {
        action: 'changeEmail',
        email: values.email,
      };

      const updateFirstName: MyCustomerSetFirstNameAction = {
        action: 'setFirstName',
        firstName: values.firstName,
      };

      const updateLastName: MyCustomerSetLastNameAction = {
        action: 'setLastName',
        lastName: values.lastName,
      };

      const updateBirthday: MyCustomerSetDateOfBirthAction = {
        action: 'setDateOfBirth',
        dateOfBirth: values.dateOfBirth,
      };

      const actions: MyCustomerUpdateAction[] = [
        updateEmail,
        updateFirstName,
        updateLastName,
        updateBirthday,
      ];

      currentVersion = (await customerController.getCustomer()).body?.version;

      if (currentVersion) {
        const response = await customerController.updateCustomer({
          version: currentVersion,
          actions,
        });

        return response;
      }

      throw Error("Can't read data");
    };

    updateUser()
      .then(() => {
        toast.success('Changing was succesful');
      })
      .catch(() => {
        toast.error('Error in changing profile');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mt-4 border-b border-gray-900/10">
            <div className="mb-4">
              <CustomInput
                name="email"
                type="text"
                placeholder="Email"
                disabled={!inEditMode}
              />
            </div>
            <div className="relative flex mb-4">
              <CustomInput
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="**********"
                disabled
              />
              <button
                type="button"
                className={`ml-2 p-2 ${
                  inEditMode ? 'text-white' : 'text-gray-600'
                } whitespace-nowrap rounded-md border border-neutral-800`}
                disabled={!inEditMode}
                onClick={openModal}
              >
                🔑 change
              </button>
            </div>
            <div className="mb-4">
              <CustomInput
                name="firstName"
                type="text"
                placeholder="First Name"
                disabled={!inEditMode}
                isWhiteSpacesAllowed
              />
            </div>
            <div className="mb-4">
              <CustomInput
                name="lastName"
                type="text"
                placeholder="Last Name"
                disabled={!inEditMode}
                isWhiteSpacesAllowed
              />
            </div>
            <div className="mb-4">
              <CustomInput
                name="dateOfBirth"
                type="date"
                disabled={!inEditMode}
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
              {isLoading ? 'Saving profile...' : 'Save profile'}
            </span>
          </button>
        </Form>
      </Formik>
      <PasswordChangeModal
        isOpen={isModalOpen}
        email={initialValues.email}
        closeModal={closeModal}
      />
    </>
  );
};

export default UserInfo;
