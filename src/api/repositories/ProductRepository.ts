import { ClientResponse } from '@commercetools/sdk-client-v2';
import {
  ProductProjection,
  ProductProjectionPagedQueryResponse,
} from '@commercetools/platform-sdk';
import AnonymousClient from '@/api/client/AnonymousClient';
import { getProjectKey } from '@/api/helpers/options';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/api/constants';

class ProductRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async getProducts(
    filter?: string[],
    sort?: string[],
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
    search?: string
  ): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    const query = {
      queryArgs: {
        filter,
        sort,
        limit,
        offset,
        'text.en-US': search,
      },
    };
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .productProjections()
      .search()
      .get(query)
      .execute();
    return result as ClientResponse<ProductProjectionPagedQueryResponse>;
  }

  public async getProductByID(
    id: string
  ): Promise<ClientResponse<ProductProjection>> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .productProjections()
      .withId({ ID: id })
      .get()
      .execute();
    return result as ClientResponse<ProductProjection>;
  }

  public async getProductByKey(
    key: string
  ): Promise<ClientResponse<ProductProjection>> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .productProjections()
      .withKey({ key })
      .get()
      .execute();
    return result as ClientResponse<ProductProjection>;
  }
}

export default ProductRepository;
