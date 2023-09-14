import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import Modal from 'react-modal';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCustomerChangePassword } from '@commercetools/platform-sdk';
import CustomInput from '../../CustomInput';
import { passwordSchema } from '../../../validation/schemas';
import CustomerController from '../../../api/controllers/CustomerController';
import { HttpStatus, IApiLoginResult } from '../../../api/types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  setAuthState,
  setExpirationTime,
  setRefreshToken,
  setToken,
} from '../../../store/slices/authSlice';
import Loader from '../../ui/loader/Loader';

interface IPasswordProps {
  currentPassword: string;
  newPassword: string;
}

export interface IChangePassProps {
  isOpen: boolean;
  email: string;
  closeModal: () => void;
}

const PasswordChangeModal: FC<IChangePassProps> = ({
  isOpen,
  email,
  closeModal,
}: IChangePassProps) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: IPasswordProps): void => {
    setIsLoading(true);

    let currentVersion;

    const changePass = async (): Promise<void> => {
      const customerController = new CustomerController();

      currentVersion = (await customerController.getCustomer()).body?.version;

      if (currentVersion) {
        const changePassAction: MyCustomerChangePassword = {
          version: currentVersion,
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        };

        await customerController.changeCustomerPassword(changePassAction);
      }

      void customerController.logoutCustomer();

      await customerController
        .loginCustomer({
          email,
          password: values.newPassword,
        })
        .then((response: IApiLoginResult) => {
          if (
            response.apiResult.statusCode === HttpStatus.OK &&
            response.token?.token.length
          ) {
            if (response.token) {
              const { token, refreshToken, expirationTime } = response.token;

              dispatch(setAuthState(true));
              dispatch(setToken(token));
              dispatch(setRefreshToken(refreshToken ?? ''));
              dispatch(setExpirationTime(expirationTime));

              toast.success('Authenticated successfully');

              setIsLoading(false);

              return;
            }
          }

          setIsLoading(false);

          const errorResult = response.apiResult as HttpErrorType;

          const errorMessage =
            ((errorResult.body?.message as string) || errorResult.message) ??
            '';

          if (errorMessage.length) {
            toast.error(errorMessage);
          }
        })
        .catch(() => {
          toast.error('General login error');

          setIsLoading(false);
        });
    };

    changePass()
      .then(() => {
        toast.success('Password changed successfully');

        closeModal();
      })
      .catch((e: HttpErrorType) => {
        setIsLoading(false);
        toast.error(`Can't change password. ${e.message}`);
      });
  };

  const customStyles = {
    overlay: {
      background: 'rgba(19, 18, 24, 0.75)',
      backdropFilter: 'blur(6px)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'var(--background-main)',
      border: 'none',
    },
  };

  const initialValues: IPasswordProps = {
    currentPassword: '',
    newPassword: '',
  };

  const validationSchema = Yup.object({
    currentPassword: passwordSchema,
    newPassword: passwordSchema,
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Change Password"
      style={customStyles}
    >
      <div className="flex h-full items-center justify-center">
        <div className="my-20 w-96 rounded bg-background-main p-6 shadow-modal">
          <h1 className="mb-4 text-2xl font-semibold text-white">
            Change password
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="relative mb-4">
                <CustomInput
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  placeholder="Password"
                  isSignUpPassInput
                />
              </div>
              <div className="relative mb-4">
                <CustomInput
                  name="newPassword"
                  label="New Password"
                  type="password"
                  placeholder="Password"
                  isSignUpPassInput
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className={`flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 ${
                    isLoading ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? <Loader /> : ''}
                  <span className="mx-[4px]">
                    {isLoading ? 'Changing...' : 'Change'}
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md bg-red-500 py-2 text-white hover:bg-red-600"
                  onClick={closeModal}
                >
                  Discard
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default PasswordChangeModal;
