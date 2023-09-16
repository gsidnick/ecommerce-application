import {
  Cart,
  CentPrecisionMoney,
  LineItem,
  MyCartUpdateAction,
} from '@commercetools/platform-sdk';
import { ClientResponse, ClientResult } from '@commercetools/sdk-client-v2';
import { getProjectKey } from '@/api/helpers/options';
import TokenClient from '@/api/client/TokenClient';
import NotFoundError from '@/api/errors/NotFoundError';
import { MASTER_VARIANT_ID } from '@/constants';
import { EMPTY_DISCOUNTS } from '@/api/constants';

class CartRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async addDiscountCode(
    code: string
  ): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions: [{ action: 'addDiscountCode', code }],
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async removeDiscountCode(
    code: string
  ): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();
      void (await this.isDiscountsApplied());
      const promocodeID = await this.getPromocodeID(code);

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions: [
              {
                action: 'removeDiscountCode',
                discountCode: { typeId: 'discount-code', id: promocodeID },
              },
            ],
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async getTotalPrice(): Promise<CentPrecisionMoney | undefined> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID } = await this.getCartIDAndVersion();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .carts()
      .withId({ ID })
      .get()
      .execute();

    return (result as ClientResponse<Cart>).body?.totalPrice;
  }

  public async getProducts(): Promise<LineItem[]> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID } = await this.getCartIDAndVersion();

    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .carts()
      .withId({ ID })
      .get()
      .execute();

    return result.body.lineItems;
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
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions: [
              { action: 'addLineItem', productId, variantId, quantity },
            ],
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async removeProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();
      const lineItem = await this.getLineItemByProductID(productId);

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions: [
              {
                action: 'removeLineItem',
                lineItemId: lineItem.id,
                quantity,
              },
            ],
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async updateProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();
      const lineItem = await this.getLineItemByProductID(productId);

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions: [
              {
                action: 'changeLineItemQuantity',
                lineItemId: lineItem.id,
                quantity,
              },
            ],
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async createCart(): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .post({ body: { currency: 'USD', country: 'US' } })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async deleteCart(): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .delete({ queryArgs: { version } })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async clearCart(): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();
      const { ID, version } = await this.getCartIDAndVersion();
      const lineItems = await this.getProducts();

      const actions: MyCartUpdateAction[] = lineItems.map((item) => ({
        action: 'changeLineItemQuantity',
        lineItemId: item.id,
        quantity: 0,
      }));

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .carts()
        .withId({ ID })
        .post({
          body: {
            version,
            actions,
          },
        })
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  public async getCart(): Promise<ClientResponse<Cart | ClientResult>> {
    try {
      const client = new TokenClient();
      const apiRoot = client.getApiRoot();

      const result = await apiRoot
        .withProjectKey({
          projectKey: this.projectKey,
        })
        .me()
        .activeCart()
        .get()
        .execute();

      return result as ClientResponse<Cart>;
    } catch (error) {
      return error as ClientResponse<ClientResult>;
    }
  }

  private async getCartIDAndVersion(): Promise<{
    ID: string;
    version: number;
  }> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .activeCart()
      .get()
      .execute();
    return {
      ID: result.body.id,
      version: result.body.version,
    };
  }

  private async getLineItemByProductID(productId: string): Promise<LineItem> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .activeCart()
      .get()
      .execute();
    const { lineItems } = result.body;
    console.log(productId);
    console.log(lineItems);
    const lineItem = lineItems.find((item) => item.productId === productId);

    if (!lineItem) {
      throw new NotFoundError('No specified line item in the cart');
    }

    return lineItem;
  }

  private async getPromocodeID(code: string): Promise<string> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .discountCodes()
      .get()
      .execute();
    const { results } = result.body;
    const promocode = results.find((item) => item.code === code);

    if (!promocode) {
      throw new NotFoundError('No specified promo code in the cart');
    }

    return promocode.id;
  }

  private async isDiscountsApplied(): Promise<boolean> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();

    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .activeCart()
      .get()
      .execute();

    if (result.body.discountCodes.length === EMPTY_DISCOUNTS) {
      throw new NotFoundError('No promo codes applied');
    }
    return !!result.body.discountCodes.length;
  }
}

export default CartRepository;
