import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import {
  getAuthMiddlewareOptions,
  getHttpMiddlewareOptions,
  getProjectKey,
} from '@/api/helpers/options';
import { UserCredentialData } from '@/api/types';

class AuthClient {
  private readonly clientBuilder: ClientBuilder;

  private readonly client: Client;

  constructor(userData: UserCredentialData) {
    this.clientBuilder = new ClientBuilder();
    this.client = this.getClient(userData);
  }

  public getApiRoot(): ApiRoot {
    return createApiBuilderFromCtpClient(this.client);
  }

  private getClient(userData: UserCredentialData): Client {
    const projectKey = getProjectKey();
    const authMiddlewareOptions = getAuthMiddlewareOptions(userData);
    const httpMiddlewareOptions = getHttpMiddlewareOptions();
    return this.clientBuilder
      .withProjectKey(projectKey)
      .withPasswordFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }
}

export default AuthClient;
