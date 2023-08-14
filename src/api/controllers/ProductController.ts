import ProductRepository from '@/api/repositories/ProductRepository';

class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  public async getProducts(): Promise<void> {
    const data = await this.productRepository.getProducts();
    console.log('Products Check', data);
  }
}

export default ProductController;
