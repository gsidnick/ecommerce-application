import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import {
  getAnonymousAuthMiddlewareOptions,
  getHttpMiddlewareOptions,
  getProjectKey,
} from '@/api/helpers/options';

class AnonymousClient {
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
    const anonymousAuthMiddlewareOptions = getAnonymousAuthMiddlewareOptions();
    const httpMiddlewareOptions = getHttpMiddlewareOptions();
    return this.clientBuilder
      .withProjectKey(projectKey)
      .withAnonymousSessionFlow(anonymousAuthMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }
}

export default AnonymousClient;
