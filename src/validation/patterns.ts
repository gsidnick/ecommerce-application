import { Postcode } from '@/types';

export const postcodes: Postcode = {
  US: {
    label: 'United States',
    pattern: /(^(\d{5})$)|(^\d{5}-\d{4}$)/,
    message: 'Postal code must be in 99999 or 99999-9999 format',
  },
  CA: {
    label: 'Canada',
    pattern: /(^[A-Z]\d[A-Z]\s\d[A-Z]\d$)/,
    message: 'Postal code must be in A9A 9A9 format',
  },
  GB: {
    label: 'United Kingdom',
    pattern:
      /(^[A-Z]{3}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d{2}\s\d[A-Z]{2}$)|(^[A-Z]{2}\d\s\d[A-Z]{2}$)/,
    message: 'Postal code must be in AAA 9AA or AA99 9AA or AA9 9AA format',
  },
  AR: {
    label: 'Argentina',
    pattern: /(^[A-Z]\d{4}[A-Z]{3}$)/,
    message: 'Postal code must be in A9999AAA format',
  },
  AM: {
    label: 'Armenia',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  AU: {
    label: 'Australia',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  AT: {
    label: 'Austria',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  BE: {
    label: 'Belgium',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  BR: {
    label: 'Brazil',
    pattern: /(^(\d{5})$)|(^\d{5}-\d{3}$)/,
    message: 'Postal code must be in 99999 or 99999-999 format',
  },
  BG: {
    label: 'Bulgaria',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  KH: {
    label: 'Cambodia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  CL: {
    label: 'Chile',
    pattern: /(^(\d{7})$)|(^\d{3}-\d{4}$)/,
    message: 'Postal code must be in 9999999 or 999-9999 format',
  },
  CO: {
    label: 'Colombia',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
  HR: {
    label: 'Croatia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  CR: {
    label: 'Costa Rica',
    pattern: /(^(\d{5})$)|(^\d{5}-\d{4}$)/,
    message: 'Postal code must be in 99999 or 99999-9999 format',
  },
  CZ: {
    label: 'Czechia',
    pattern: /(^\d{3}[\s-]\d{2}$)|(^(\d{5})$)/,
    message: 'Postal code must be in 999 99 or 999-99 or 99999 format',
  },
  DK: {
    label: 'Denmark',
    pattern: /(^\d{4}$)|(^\d{2}$)/,
    message: 'Postal code must be in 9999 or 99 format',
  },
  DO: {
    label: 'Dominican Republic',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  EC: {
    label: 'Ecuador',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
  EG: {
    label: 'Egypt',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  EE: {
    label: 'Estonia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  FI: {
    label: 'Finland',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  FR: {
    label: 'France',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  DE: {
    label: 'Germany',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  GR: {
    label: 'Greece',
    pattern: /(^\d{2}\s\d{2}$)/,
    message: 'Postal code must be in 99 99 format',
  },
  GT: {
    label: 'Guatemala',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  HU: {
    label: 'Hungary',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  IN: {
    label: 'India',
    pattern: /(^\d{3}\s\d{3}$)|(^\d{6}$)/,
    message: 'Postal code must be in 999 999 or 999999 format',
  },
  ID: {
    label: 'Indonesia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  IE: {
    label: 'Ireland',
    pattern:
      /(^[A-Z]\d\d\s[A-Z]\d[A-Z]\d$)|(^[A-Z]\d\d\s[A-Z]{2}\d{2}$)|(^[A-Z]\d\d\s[A-Z]\d[A-Z]{2}$)/,
    message: 'Postal code must be in A99 A9A9 or A99 AA99 or A99 A9AA format',
  },
  IT: {
    label: 'Italy',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  JO: {
    label: 'Jordan',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  KW: {
    label: 'Kuwait',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  LV: {
    label: 'Latvia',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  LT: {
    label: 'Lithuania',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  LU: {
    label: 'Luxembourg',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  MY: {
    label: 'Malaysia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  MT: {
    label: 'Malta',
    pattern: /(^[A-Z]{3}\s\d{4}$)/,
    message: 'Postal code must be in AAA 9999 format',
  },
  MX: {
    label: 'Mexico',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  ME: {
    label: 'Montenegro',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  NL: {
    label: 'Netherlands',
    pattern: /(^\d{4}\s?[A-Z]{2}$)/,
    message: 'Postal code must be in 9999 AA or 9999AA format',
  },
  NZ: {
    label: 'New Zealand',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  NO: {
    label: 'Norway',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  OM: {
    label: 'Oman',
    pattern: /(^\d{3}$)/,
    message: 'Postal code must be in 999 format',
  },
  PK: {
    label: 'Pakistan',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  PY: {
    label: 'Paraguay',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  PE: {
    label: 'Peru',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  PH: {
    label: 'Philippines',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  PL: {
    label: 'Poland',
    pattern: /(^\d{2}-\d{3}$)/,
    message: 'Postal code must be in 99-999 format',
  },
  PT: {
    label: 'Portugal',
    pattern: /(^\d{4}-\d{3}$)/,
    message: 'Postal code must be in 9999-999 format',
  },
  RO: {
    label: 'Romania',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
  RU: {
    label: 'Russia',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
  SA: {
    label: 'Saudi Arabia',
    pattern: /(^\d{5}-\d{4}$)/,
    message: 'Postal code must be in 99999-9999 format',
  },
  RS: {
    label: 'Serbia',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  SK: {
    label: 'Slovakia',
    pattern: /(^\d{3}\s\d{2}$)/,
    message: 'Postal code must be in 999 99 format',
  },
  SI: {
    label: 'Slovenia',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  ZA: {
    label: 'South Africa',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  KR: {
    label: 'South Korea',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  ES: {
    label: 'Spain',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  SE: {
    label: 'Sweden',
    pattern: /(^\d{3}\s\d{2}$)/,
    message: 'Postal code must be in 999 99 format',
  },
  CH: {
    label: 'Switzerland',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  TW: {
    label: 'Taiwan',
    pattern: /(^\d{3}$)|(^\d{6}$)|(^\d{3}-\d{2,3}$)/,
    message: 'Postal code must be in 999 or 999-99 or 999-999 format',
  },
  TZ: {
    label: 'Tanzania',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  TH: {
    label: 'Thailand',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  TT: {
    label: 'Trinidad & Tobago',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
  TN: {
    label: 'Tunisia',
    pattern: /(^\d{4}$)/,
    message: 'Postal code must be in 9999 format',
  },
  TR: {
    label: 'Turkey',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  UA: {
    label: 'Ukraine',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  UY: {
    label: 'Uruguay',
    pattern: /(^\d{5}$)/,
    message: 'Postal code must be in 99999 format',
  },
  VE: {
    label: 'Venezuela',
    pattern: /(^\d{4}$)|(^\d{4}-[A-Z]$)/,
    message: 'Postal code must be in 9999 or 9999-A format',
  },
  VN: {
    label: 'Vietnam',
    pattern: /(^\d{6}$)/,
    message: 'Postal code must be in 999999 format',
  },
};
