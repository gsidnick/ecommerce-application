import * as Yup from 'yup';
import { MAX_DATE, MIN_PASSWORD_LENGTH } from '@/constants';
import { PostcodeName } from '@/types';
import { postcodes } from '@/validation/patterns';

export const emailSchema = Yup.string()
  .required('Required')
  .test('no-whitespace', 'Must not contain whitespace', (value = '') =>
    /^\S*$/.test(value)
  )
  .matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Invalid email address'
  );

export const passwordSchema = Yup.string()
  .min(MIN_PASSWORD_LENGTH, 'Must be at least 8 characters long')
  .required('Required')
  .test(
    'special-characters',
    'Must contain at least one special character (e.g., !@#$%^&*)',
    (value) => /[`~@#$%^&*()_+!"№?<>;:,./[\]{}]/.test(value)
  )
  .test(
    'has-uppercase',
    'Must contain at least one uppercase letter',
    (value) => /[A-ZА-ЯЁ]/.test(value)
  )
  .test(
    'has-lowercase',
    'Must contain at least one lowercase letter',
    (value) => /[a-zа-яё]/.test(value)
  )
  .test('has-digit', 'Must contain at least one digit', (value) =>
    /\d/.test(value)
  )
  .trim();

export const nameSchema = Yup.string()
  .matches(/^[a-zA-Z\s]+$/, 'Must contain only latin letters or whitespaces')
  .required('Required');

export const dateSchema = Yup.date()
  .max(MAX_DATE, 'Date of birth must be more than 13 years old')
  .required('Required');

export const countrySchema = Yup.string().required('Required');

export const addressSchema = Yup.string().required('Required');

export const citySchema = Yup.string()
  .matches(/^[a-zA-Z\s]+$/, 'Must contain only latin letters or whitespaces')
  .required('Required');

export const getPostcodeSchema = (country: PostcodeName): Yup.StringSchema =>
  Yup.string()
    .matches(postcodes[country].pattern, postcodes[country].message)
    .required('Required');
