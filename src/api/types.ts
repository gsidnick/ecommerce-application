import {
  HttpMiddlewareOptions,
  Middleware,
} from '@commercetools/sdk-client-v2';

export interface ApiClientOptions {
  projectKey: string;
  credentials: UserCredentialData | null;
  authMiddlewareOptions: Middleware;
  httpMiddlewareOptions: HttpMiddlewareOptions;
}

export interface UserCredentialData {
  email: string;
  password: string;
}
