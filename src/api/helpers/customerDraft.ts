import { RegisterProps } from '@/types';
import {
  DOUBLE_LENGTH,
  INDEX_ONE,
  INDEX_ZERO,
  SINGLE_LENGTH,
} from '@/api/constants';
import { UserRegistrationData } from '@/api/types';

export const createCustomerDraft = (
  data: RegisterProps
): UserRegistrationData => {
  const userData: UserRegistrationData = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: data.dateOfBirth,
  };

  userData.addresses = [
    {
      country: data.billingCountry,
      city: data.billingCity,
      postalCode: data.billingPostcode,
      streetName: data.billingAddress,
    },
  ];

  if (!data.sameBilling) {
    userData.addresses.push({
      country: data.shippingCountry,
      city: data.shippingCity,
      postalCode: data.shippingPostcode,
      streetName: data.shippingAddress,
    });
  }

  userData.billingAddresses = [INDEX_ZERO];

  if (data.defaultBilling) {
    userData.defaultBillingAddress = INDEX_ZERO;
  }

  if (userData.addresses.length === SINGLE_LENGTH) {
    userData.shippingAddresses = [INDEX_ZERO];
    if (data.defaultShipping) {
      userData.defaultShippingAddress = INDEX_ZERO;
    }
  }

  if (userData.addresses.length === DOUBLE_LENGTH) {
    userData.shippingAddresses = [INDEX_ONE];
    if (data.defaultShipping) {
      userData.defaultShippingAddress = INDEX_ONE;
    }
  }

  return userData;
};
