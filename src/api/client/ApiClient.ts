import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { ApiClientOptions } from '../types';

class ApiClient {
  private readonly projectKey: string;

  private readonly clientBuilder: ClientBuilder;

  private readonly client: Client;

  constructor(options: ApiClientOptions) {
    this.projectKey = options.projectKey;
    this.clientBuilder = new ClientBuilder();
    this.client = this.getClientFromOptions(options);
  }

  public getApiRoot(): ApiRoot {
    return createApiBuilderFromCtpClient(this.client);
  }

  public getProjectKey(): string {
    return this.projectKey;
  }

  private getClientFromOptions(options: ApiClientOptions): Client {
    const { projectKey, authMiddlewareOptions, httpMiddlewareOptions } =
      options;

    return this.clientBuilder
      .withProjectKey(projectKey)
      .withMiddleware(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  }
}

export default ApiClient;
