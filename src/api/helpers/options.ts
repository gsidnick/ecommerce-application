import {
  HttpMiddlewareOptions,
  AnonymousAuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { UserCredentialData } from '../types';
import TokenService from '@/api/services/TokenService';
import {
  API_URL,
  AUTH_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  PROJECT_KEY,
  SCOPES,
} from '@/api/constants';

export function getAnonymousAuthMiddlewareOptions(): AnonymousAuthMiddlewareOptions {
  return {
    host: AUTH_URL,
    projectKey: PROJECT_KEY,
    credentials: {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    },
    scopes: SCOPES,
    fetch,
  };
}

export function getAuthMiddlewareOptions(
  userData: UserCredentialData
): PasswordAuthMiddlewareOptions {
  const { email, password } = userData;
  const tokenService = new TokenService();
  return {
    host: AUTH_URL,
    projectKey: PROJECT_KEY,
    credentials: {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      user: {
        username: email,
        password,
      },
    },
    scopes: SCOPES,
    tokenCache: {
      get: () => tokenService.getToken(),
      set: (cache) => tokenService.setToken(cache),
    },
    fetch,
  };
}

export function getHttpMiddlewareOptions(): HttpMiddlewareOptions {
  return {
    host: API_URL,
    fetch,
  };
}

export function getProjectKey(): string {
  return PROJECT_KEY;
}
