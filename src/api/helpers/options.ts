import {
  createAuthForAnonymousSessionFlow,
  createAuthForPasswordFlow,
  Middleware,
} from '@commercetools/sdk-client-v2';
import { ApiClientOptions, UserCredentialData } from '../types';

const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY ?? '';
const clientSecret = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET ?? '';
const clientId = process.env.NEXT_PUBLIC_CTP_CLIENT_ID ?? '';
const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL ?? '';
const apiUrl = process.env.NEXT_PUBLIC_CTP_API_URL ?? '';
const scopes = process.env.NEXT_PUBLIC_CTP_SCOPES
  ? process.env.NEXT_PUBLIC_CTP_SCOPES.split(' ')
  : [];

export function getOptions(userData?: UserCredentialData): ApiClientOptions {
  let authMiddlewareOptions: Middleware;

  if (userData) {
    const { email, password } = userData;
    authMiddlewareOptions = createAuthForPasswordFlow({
      host: authUrl,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
        user: {
          username: email,
          password,
        },
      },
      scopes,
      fetch,
    });
  } else {
    authMiddlewareOptions = createAuthForAnonymousSessionFlow({
      host: authUrl,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
      },
      scopes,
      fetch,
    });
  }

  return {
    projectKey,
    credentials: userData ?? null,
    authMiddlewareOptions,
    httpMiddlewareOptions: {
      host: apiUrl,
      fetch,
    },
  };
}
