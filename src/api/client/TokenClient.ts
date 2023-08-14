import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import {
  getExistingTokenFlowOptions,
  getHttpMiddlewareOptions,
  getProjectKey,
} from '@/api/helpers/options';
import TokenService from '@/api/services/TokenService';

class TokenClient {
  private readonly clientBuilder: ClientBuilder;

  private readonly client: Client;

  constructor() {
    this.clientBuilder = new ClientBuilder();
    this.client = this.getClient();
  }

  public getApiRoot(): ApiRoot {
    return createApiBuilderFromCtpClient(this.client);
  }

  private getClient(): Client {
    const projectKey = getProjectKey();
    const tokenService = new TokenService();
    const { token } = tokenService.getToken();
    const { authorization, options } = getExistingTokenFlowOptions(token);
    const httpMiddlewareOptions = getHttpMiddlewareOptions();
    return this.clientBuilder
      .withProjectKey(projectKey)
      .withExistingTokenFlow(authorization, options)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }
}

export default TokenClient;
