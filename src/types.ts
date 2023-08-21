import { postcodes } from '@/validation/patterns';

export type PostcodeName = keyof typeof postcodes;
export type Postcode = Record<string, PostcodeData>;
export interface PostcodeData {
  label: string;
  pattern: RegExp;
  message: string;
}
export interface RegisterProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  billingAddress: string;
  billingCity: string;
  billingPostcode: string;
  shippingAddress: string;
  shippingCity: string;
  shippingPostcode: string;
  sameBilling: boolean;
  defaultBilling: boolean;
  defaultShipping: boolean;
}
