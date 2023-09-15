import { Cart, LineItem } from '@commercetools/platform-sdk';
import { ClientResponse, ClientResult } from '@commercetools/sdk-client-v2';
import CartRepository from '@/api/repositories/CartRepository';
import {
  EMPTY_PRICE,
  INITIAL_PRICE,
  MASTER_VARIANT_ID,
  POSITION_DIGIT_COEFFICIENT,
  TWO_FRACTION_DIGIT,
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

  public async createCart(): Promise<void> {
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
  }): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.addProduct({ productId, variantId, quantity });
  }

  public async removeProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.removeProduct({ productId, quantity });
  }

  public async updateProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.updateProduct({ productId, quantity });
  }

  public async addDiscountCode(code: string): Promise<Cart | undefined> {
    return this.cartRepository.addDiscountCode(code);
  }

  public async removeDiscountCode(code: string): Promise<Cart | undefined> {
    return this.cartRepository.removeDiscountCode(code);
  }

  public async getOriginalTotalPrice(): Promise<number> {
    const lineItems = await this.getProducts();

    const originalTotalPrice = lineItems.reduce((acc, item) => {
      let price = 0;
      if (item.price.discounted) {
        const { centAmount, fractionDigits } = item.price.discounted.value;
        price =
          (centAmount * item.quantity) /
          POSITION_DIGIT_COEFFICIENT ** fractionDigits;
      }
      return acc + price;
    }, INITIAL_PRICE);

    return Number(originalTotalPrice.toFixed(TWO_FRACTION_DIGIT));
  }
}
export default CartController;
