import { ClientResponse, ClientResult } from '@commercetools/sdk-client-v2';
import {
  Customer,
  CustomerSignInResult,
  MyCustomerChangePassword,
} from '@commercetools/platform-sdk';
import { MyCustomerUpdate } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/me';
import AuthClient from '@/api/client/AuthClient';
import {
  IApiLoginResult,
  UserCredentialData,
  UserRegistrationData,
} from '../types';
import { getProjectKey } from '@/api/helpers/options';
import AnonymousClient from '@/api/client/AnonymousClient';
import TokenService from '@/api/services/TokenService';
import TokenClient from '@/api/client/TokenClient';

class CustomerRepository {
  private readonly projectKey: string;

  private tokenService: TokenService;

  constructor() {
    this.projectKey = getProjectKey();
    this.tokenService = new TokenService();
  }

  public async registerCustomer(
    userData: UserRegistrationData
  ): Promise<IApiLoginResult> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    try {
      const apiResult = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .customers()
        .post({
          body: userData,
        })
        .execute();

      return {
        apiResult: apiResult as ClientResponse<CustomerSignInResult>,
        token: null,
      };
    } catch (error) {
      return {
        apiResult: error as ClientResponse<ClientResult>,
        token: null,
      };
    }
  }

  public async loginCustomer(
    userData: UserCredentialData
  ): Promise<IApiLoginResult> {
    const tokenClient = new TokenClient();
    const authClient = new AuthClient(userData);
    const tokenApiRoot = tokenClient.getApiRoot();
    const authApiRoot = authClient.getApiRoot();

    try {
      const { email, password } = userData;

      const tokenApiResult = await tokenApiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .login()
        .post({
          body: {
            email,
            password,
            activeCartSignInMode: 'MergeWithExistingCustomerCart',
          },
        })
        .execute();

      await authApiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .get()
        .execute();

      return {
        apiResult: tokenApiResult as ClientResponse<CustomerSignInResult>,
        token: this.tokenService.getToken(),
      };
    } catch (error) {
      return {
        apiResult: error as ClientResponse<ClientResult>,
        token: null,
      };
    }
  }

  public async logoutCustomer(): Promise<void> {
    this.tokenService.removeToken();
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();

    await apiRoot
      .withProjectKey({ projectKey: this.projectKey })
      .get()
      .execute();
  }

  public async getCustomer(): Promise<ClientResponse<Customer>> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();

    const result = await apiRoot
      .withProjectKey({ projectKey: this.projectKey })
      .me()
      .get()
      .execute();
    return result as ClientResponse<Customer>;
  }

  public async updateCustomer(
    data: MyCustomerUpdate
  ): Promise<ClientResponse<Customer>> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({ projectKey: this.projectKey })
      .me()
      .post({
        body: data,
      })
      .execute();
    return result as ClientResponse<Customer>;
  }

  public async changeCustomerPassword(
    data: MyCustomerChangePassword
  ): Promise<ClientResponse<Customer>> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({ projectKey: this.projectKey })
      .me()
      .password()
      .post({ body: data })
      .execute();
    return result as ClientResponse<Customer>;
  }
}

export default CustomerRepository;
