import TokenClient from '@/api/client/TokenClient';
import { getProjectKey } from '@/api/helpers/options';

class ProductRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async getProducts(): Promise<unknown> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    try {
      return await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .products()
        .get()
        .execute();
    } catch (error) {
      return error;
    }
  }
}

export default ProductRepository;
