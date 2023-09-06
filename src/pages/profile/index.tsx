import { ChangeEvent, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Modal from 'react-modal';
import { Customer } from '@commercetools/platform-sdk';
import { AuthState } from '../../store/slices/authSlice';
import CustomerController from '../../api/controllers/CustomerController';
import ProfileMenu from '../../components/Profile/Menu';
import UserInfo, {
  ProfileChangableProps,
} from '../../components/Profile/UserInfo';
import Addresses, {
  IAddressesListProps,
} from '../../components/Profile/Addresses';

const INIT_ZERO = 0;

const ProfilePage: NextPage<AuthState> = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(INIT_ZERO);
  const [inEditMode, setInEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState<ProfileChangableProps>({
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  const [addresses, setAddresses] = useState<IAddressesListProps>({
    addresses: [],
    billingAddressIds: [],
    defaultBillingAddressId: '',
    defaultShippingAddressId: '',
    shippingAddressIds: [],
  });

  const tabData = [
    {
      component: (
        <UserInfo inEditMode={inEditMode} initialValues={initialValues} />
      ),
    },
    {
      component: <Addresses inEditMode={inEditMode} addresses={addresses} />,
    },
  ];

  Modal.setAppElement('#__next');

  useEffect(() => {
    const getData = async (): Promise<Customer> => {
      const customerController = new CustomerController();

      const userData = await customerController.getCustomer();

      if (userData.body) {
        return userData.body;
      }

      throw Error('No customer info');
    };

    getData()
      .then((response) => {
        setInitialValues({
          email: response.email,
          firstName: response.firstName ?? '',
          lastName: response.lastName ?? '',
          dateOfBirth: response.dateOfBirth ?? '',
        });

        setAddresses({
          addresses: response.addresses,
          billingAddressIds: response.billingAddressIds ?? [],
          defaultBillingAddressId: response.defaultBillingAddressId ?? '',
          defaultShippingAddressId: response.defaultShippingAddressId ?? '',
          shippingAddressIds: response.shippingAddressIds ?? [],
        });
      })
      .catch(() => {});
  }, []);

  const handleModeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;

    setInEditMode(target.checked);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-6 my-20 rounded w-96 bg-background-main shadow-modal">
        <ProfileMenu
          activeContentIndex={activeContentIndex}
          setActiveContentIndex={setActiveContentIndex}
        />
        <label htmlFor="mode" className="text-white">
          <input
            type="checkbox"
            className="mr-2"
            name="mode"
            onChange={handleModeChange}
          />
          Edit
        </label>
        {initialValues && tabData[activeContentIndex].component}
      </div>
    </div>
  );
};

export default ProfilePage;
