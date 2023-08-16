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
