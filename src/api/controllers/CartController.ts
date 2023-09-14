import { Cart, LineItem } from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
import CartRepository from '@/api/repositories/CartRepository';
import {
  EMPTY_PRICE,
  MASTER_VARIANT_ID,
  POSITION_DIGIT_COEFFICIENT,
} from '@/constants';

class CartController {
  private cartRepository: CartRepository;

  constructor() {
    this.cartRepository = new CartRepository();
  }

  public async getTotalPrice(): Promise<number> {
    const price = await this.cartRepository.getTotalPrice();

    if (!price) {
      return EMPTY_PRICE;
    }

    const { centAmount, fractionDigits } = price;
    return centAmount / POSITION_DIGIT_COEFFICIENT ** fractionDigits;
  }

  public async getCart(): Promise<Cart> {
    return this.cartRepository.getCart();
  }

  public async createCart(): Promise<ClientResponse<Cart>> {
    return this.cartRepository.createCart();
  }

  public async deleteCart(): Promise<void> {
    void (await this.cartRepository.deleteCart());
    void (await this.cartRepository.createCart());
  }

  public async clearCart(): Promise<Cart | undefined> {
    return this.cartRepository.clearCart();
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
