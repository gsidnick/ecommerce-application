import { ApiRoot } from '@commercetools/platform-sdk';
import ApiClient from '@/api/client/ApiClient';
import { ApiClientOptions, UserCredentialData } from '../types';

class CustomerRepository {
  private readonly projectKey: string;

  private apiRoot: ApiRoot;

  constructor(options: ApiClientOptions) {
    const apiClient = new ApiClient(options);
    this.projectKey = apiClient.getProjectKey();
    this.apiRoot = apiClient.getApiRoot();
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
