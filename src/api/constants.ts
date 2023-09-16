export const TOKEN_NAME = 'token';
export const PROJECT_KEY = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY ?? '';
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET ?? '';
export const CLIENT_ID = process.env.NEXT_PUBLIC_CTP_CLIENT_ID ?? '';
export const AUTH_URL = process.env.NEXT_PUBLIC_CTP_AUTH_URL ?? '';
export const API_URL = process.env.NEXT_PUBLIC_CTP_API_URL ?? '';
export const SCOPES = process.env.NEXT_PUBLIC_CTP_SCOPES
  ? process.env.NEXT_PUBLIC_CTP_SCOPES.split(' ')
  : [];
export const INDEX_ZERO = 0;
export const INDEX_ONE = 1;
export const SINGLE_LENGTH = 1;
export const DOUBLE_LENGTH = 2;
export const DEFAULT_LIMIT = 20;
export const DEFAULT_OFFSET = 0;
export const NOT_FOUND_ERROR = 404;
export const EMPTY_DISCOUNTS = 0;
