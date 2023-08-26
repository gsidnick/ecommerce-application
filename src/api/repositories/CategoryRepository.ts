import { CategoryPagedQueryResponse } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
import { getProjectKey } from '@/api/helpers/options';
import AnonymousClient from '@/api/client/AnonymousClient';

class CategoryRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async getCategories(): Promise<ClientResponse<CategoryPagedQueryResponse> | void> {
    const client = new AnonymousClient();
    const apiRoot = client.getApiRoot();
    try {
      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .categories()
        .get()
        .execute();
      return result as ClientResponse<CategoryPagedQueryResponse>;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`${error.name} ${error.message}`);
      }
      throw error;
    }
  }
}

export default CategoryRepository;
