import { CategoryPagedQueryResponse } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
import { getProjectKey } from '@/api/helpers/options';
import AnonymousClient from '@/api/client/AnonymousClient';

class CategoryRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async getCategories(): Promise<
    ClientResponse<CategoryPagedQueryResponse>
  > {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .categories()
      .get()
      .execute();
    return result as ClientResponse<CategoryPagedQueryResponse>;
  }
}

export default CategoryRepository;
