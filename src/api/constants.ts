export const TOKEN_NAME = 'token';
export const PROJECT_KEY = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY ?? '';
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET ?? '';
export const CLIENT_ID = process.env.NEXT_PUBLIC_CTP_CLIENT_ID ?? '';
export const AUTH_URL = process.env.NEXT_PUBLIC_CTP_AUTH_URL ?? '';
export const API_URL = process.env.NEXT_PUBLIC_CTP_API_URL ?? '';
export const SCOPES = process.env.NEXT_PUBLIC_CTP_SCOPES
  ? process.env.NEXT_PUBLIC_CTP_SCOPES.split(' ')
  : [];
