import AuthClient from '@/api/client/AuthClient';
import { UserCredentialData, UserRegistrationData } from '../types';
import { getProjectKey } from '@/api/helpers/options';
import AnonymousClient from '@/api/client/AnonymousClient';
import TokenService from '@/api/services/TokenService';

class CustomerRepository {
  private readonly projectKey: string;

  private tokenService: TokenService;

  constructor() {
    this.projectKey = getProjectKey();
    this.tokenService = new TokenService();
  }

  public async registerCustomer(
    userData: UserRegistrationData
  ): Promise<unknown> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    try {
      return await apiRoot
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
    const client = new AuthClient(userData);
    const apiRoot = client.getApiRoot();
    try {
      const { email, password } = userData;
      return await apiRoot
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

  public logoutCustomer(): void {
    this.tokenService.removeToken();
  }
}

export default CustomerRepository;
