import { CustomerSignInResult } from '@commercetools/platform-sdk';
import { ClientResponse, TokenStore } from '@commercetools/sdk-client-v2';

export interface UserCredentialData {
  email: string;
  password: string;
}

export interface UserRegistrationData {
  email: string;
  password: string;
}

export interface ExistingTokenFlowOptions {
  authorization: string;
  options: {
    force: boolean;
  };
}

export interface IApiLoginResult {
  apiResult: ClientResponse<CustomerSignInResult>;
  token: TokenStore | null;
}
