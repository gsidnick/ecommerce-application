import { Postcode } from '@/types';

export const postcodes: Postcode = {
  USA: {
    label: 'United States',
    pattern: /(^(\d{5})$)|(^\d{5}-\d{4}$)/,
    message: 'Postal code must be in 99999 or 99999-9999 format',
  },
  Canada: {
    label: 'Canada',
    pattern: /(^[A-Z]\d[A-Z][\s-]\d[A-Z]\d$)/,
    message: 'Postal code must be in A9A 9A9 or A9A-9A9 format',
  },
  UK: {
    label: 'United Kingdom',
    pattern:
      /(^[A-Z]{3}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d{2}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d\s\d[A-Z]{2}$)/,
    message: 'Postal code must be in AAA 9AA or AA99 9AA or AA9 9AA format',
  },
  Argentina: {
    label: 'Argentina',
    pattern: /(^[A-Z]\d{4}[A-Z]{3}$)/,
    message: 'Postal code must be in A9999AAA format',
  },
  Mexico: {
    label: 'Mexico',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
};
