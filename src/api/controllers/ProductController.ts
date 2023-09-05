import { ClientResponse } from '@commercetools/sdk-client-v2';
import {
  ProductProjection,
  ProductProjectionPagedQueryResponse,
} from '@commercetools/platform-sdk';
import ProductRepository from '@/api/repositories/ProductRepository';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '@/api/constants';

class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  public async getProduct(
    id: string
  ): Promise<ClientResponse<ProductProjection>> {
    return this.productRepository.getProductByID(id);
  }

  public async getProducts({
    filter,
    sort,
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
    search = '',
  }: {
    filter?: string[];
    sort?: string[];
    limit?: number;
    offset?: number;
    search?: string;
  }): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> {
    return this.productRepository.getProducts(filter, sort, limit, offset, search);
  }
}

export default ProductController;
