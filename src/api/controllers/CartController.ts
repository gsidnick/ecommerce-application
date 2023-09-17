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

  public async getCart(): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.getCart();
  }

  public async createCart(): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.createCart();
  }

  public async deleteCart(): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.deleteCart();
  }

  public async clearCart(): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.clearCart();
  }

  public async getProducts(): Promise<LineItem[]> {
    return this.cartRepository.getProducts();
  }

  public async addProduct({
    productId,
    quantity,
    variantId = MASTER_VARIANT_ID,
    cartId,
  }: {
    productId: string;
    quantity: number;
    variantId?: number;
    cartId?: string;
  }): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.addProduct({
      productId,
      variantId,
      quantity,
      cartId,
    });
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

  public async addDiscountCode(
    code: string
  ): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.addDiscountCode(code);
  }

  public async removeDiscountCode(
    code: string
  ): Promise<ClientResponse<Cart | ClientResult>> {
    return this.cartRepository.removeDiscountCode(code);
  }

  public async getTotalPrice(): Promise<number> {
    const price = await this.cartRepository.getTotalPrice();

    if (!price) {
      return EMPTY_PRICE;
    }

    const { centAmount, fractionDigits } = price;
    return centAmount / POSITION_DIGIT_COEFFICIENT ** fractionDigits;
  }

  public async getOriginalTotalPrice(): Promise<number> {
    const lineItems = await this.cartRepository.getProducts();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const originalTotalPrice: number = lineItems.reduce((acc, item): number => {
      let price = 0;

      if (item.price.value) {
        const { centAmount, fractionDigits } = item.price.value;

        price =
          (centAmount * item.quantity) /
          POSITION_DIGIT_COEFFICIENT ** fractionDigits;
      }

      return acc + price;
    }, INITIAL_PRICE);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Number(originalTotalPrice.toFixed(TWO_FRACTION_DIGIT));
  }
}
export default CartController;
