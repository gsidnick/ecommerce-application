import { ApiRoot } from '@commercetools/platform-sdk';
import ApiClient from '@/api/client/ApiClient';
import {
  ApiClientOptions,
  UserCredentialData,
  UserRegistrationData,
} from '../types';

class CustomerRepository {
  private readonly projectKey: string;

  private apiRoot: ApiRoot;

  constructor(options: ApiClientOptions) {
    const apiClient = new ApiClient(options);
    this.projectKey = apiClient.getProjectKey();
    this.apiRoot = apiClient.getApiRoot();
  }

  public async registerCustomer(
    userData: UserRegistrationData
  ): Promise<unknown> {
    try {
      return await this.apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .customers()
        .post({
          body: userData,
        })
        .execute();
    } catch (error) {
      return error;
    }
  }

  public async loginCustomer(userData: UserCredentialData): Promise<unknown> {
    try {
      const { email, password } = userData;
      return await this.apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .login()
        .post({
          body: {
            email,
            password,
          },
        })
        .execute();
    } catch (error) {
      return error;
    }
  }
}

export default CustomerRepository;
