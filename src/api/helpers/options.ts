import {
  HttpMiddlewareOptions,
  AnonymousAuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { RefreshAuthMiddlewareOptions } from '@commercetools/sdk-client-v2/dist/declarations/src/types/sdk';
import { ExistingTokenFlowOptions, UserCredentialData } from '../types';
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
    tokenCache: new TokenService(),
    fetch,
  };
}

export function getAuthMiddlewareOptions(
  userData: UserCredentialData
): PasswordAuthMiddlewareOptions {
  const { email, password } = userData;
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
    tokenCache: new TokenService(),
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

export function getExistingTokenFlowOptions(
  token: string
): ExistingTokenFlowOptions {
  return {
    authorization: `Bearer ${token}`,
    options: {
      force: true,
    },
  };
}

export function getRefreshAuthMiddlewareOptions(
  refreshToken: string
): RefreshAuthMiddlewareOptions {
  return {
    host: AUTH_URL,
    projectKey: PROJECT_KEY,
    credentials: { clientId: CLIENT_ID, clientSecret: CLIENT_SECRET },
    refreshToken,
    tokenCache: new TokenService(),
    fetch,
  };
}
