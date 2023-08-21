import * as Yup from 'yup';
import { MAX_DATE, MIN_PASSWORD_LENGTH } from '@/constants';
import { PostcodeName } from '@/types';
import { postcodes } from '@/validation/patterns';

export const emailSchema = Yup.string()
  .required('Required')
  .test('no-whitespace', 'Email must not contain whitespace', (value = '') =>
    /^\S*$/.test(value)
  )
  .matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Invalid email address'
  );

export const passwordSchema = Yup.string()
  .required('Required')
  .min(MIN_PASSWORD_LENGTH, 'Password must be at least 8 characters long')
  .test(
    'special-characters',
    'Password must contain at least one special character (e.g., !@#$%^&*)',
    (value) => /[!@#$%^&*]/.test(value)
  )
  .test('no-whitespace', 'Password must not contain whitespace', (value) =>
    /^\S*$/.test(value)
  )
  .test(
    'has-uppercase',
    'Password must contain at least one uppercase letter (A-Z)',
    (value) => /[A-Z]/.test(value)
  )
  .test(
    'has-lowercase',
    'Password must contain at least one lowercase letter (a-z)',
    (value) => /[a-z]/.test(value)
  )
  .test(
    'has-digit',
    'Password must contain at least one digit (0-9)',
    (value) => /\d/.test(value)
  )
  .trim();
export const nameSchema = Yup.string()
  .matches(/^[a-zA-Z]+$/, 'First name must contain at least 1 letters')
  .required('Required');
export const dateSchema = Yup.date()
  .max(MAX_DATE, 'Date of birth must be more than 13 years old')
  .required('Required');
export const countrySchema = Yup.string().required('Required');
export const addressSchema = Yup.string()
  .matches(/^[a-zA-Z0-9\s]+$/, 'Street address must contain at least 1 letters')
  .required('Required');
export const citySchema = Yup.string()
  .matches(/^[a-zA-Z\s]+$/, 'City must contain at least 1 letters')
  .required('Required');
export const getPostcodeSchema = (country: PostcodeName): Yup.StringSchema =>
  Yup.string()
    .matches(postcodes[country].pattern, postcodes[country].message)
    .required('Required');
