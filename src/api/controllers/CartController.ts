import { Cart, LineItem } from '@commercetools/platform-sdk';
import CartRepository from '@/api/repositories/CartRepository';

class CartController {
  private cartRepository: CartRepository;

  constructor() {
    this.cartRepository = new CartRepository();
  }

  public async getCart(): Promise<Cart> {
    return this.cartRepository.getCart();
  }

  public async createCart(): Promise<void> {
    return this.cartRepository.createCart();
  }

  public async getProducts(): Promise<LineItem[]> {
    return this.cartRepository.getProducts();
  }

  public async addProduct(productId: string): Promise<void> {
    void (await this.cartRepository.addProduct(productId));
  }

  public async removeProduct(productId: string): Promise<void> {
    void (await this.cartRepository.removeProduct(productId));
  }
}
export default CartController;
