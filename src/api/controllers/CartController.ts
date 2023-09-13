import { Cart, LineItem } from '@commercetools/platform-sdk';
import CartRepository from '@/api/repositories/CartRepository';
import { MASTER_VARIANT_ID } from '@/constants';

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

  public async addProduct({
    productId,
    quantity,
    variantId = MASTER_VARIANT_ID,
  }: {
    productId: string;
    quantity: number;
    variantId?: number;
  }): Promise<Cart | undefined> {
    return this.cartRepository.addProduct({ productId, variantId, quantity });
  }

  public async removeProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<Cart | undefined> {
    return this.cartRepository.removeProduct({ productId, quantity });
  }
}
export default CartController;
