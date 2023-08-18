export interface UserCredentialData {
  email: string;
  password: string;
}

export interface UserRegistrationData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  addresses?: Address[];
  shippingAddresses?: number[];
  billingAddresses?: number[];
  defaultBillingAddress?: number;
  defaultShippingAddress?: number;
}

export interface Address {
  country: string;
  city: string;
  postalCode: string;
  streetName: string;
}

export interface ExistingTokenFlowOptions {
  authorization: string;
  options: {
    force: boolean;
  };
}
