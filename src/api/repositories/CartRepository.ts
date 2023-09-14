import {
  Cart,
  CentPrecisionMoney,
  LineItem,
  MyCartUpdateAction,
} from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
import { getProjectKey } from '@/api/helpers/options';
import TokenClient from '@/api/client/TokenClient';
import { MASTER_VARIANT_ID } from '@/constants';

class CartRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async addDiscountCode(code: string): Promise<Cart | undefined> {
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

    return (result as ClientResponse<Cart>).body;
  }

  public async removeDiscountCode(code: string): Promise<Cart | undefined> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID, version } = await this.getCartIDAndVersion();
    const isDiscountApplied = await this.isDiscountsApplied();

    if (isDiscountApplied) {
      const promocodeID = await this.getPromocodeID(code);
      if (promocodeID) {
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

        return (result as ClientResponse<Cart>).body;
      }
    }

    return undefined;
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
  }): Promise<Cart | undefined> {
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
          actions: [{ action: 'addLineItem', productId, variantId, quantity }],
        },
      })
      .execute();

    return (result as ClientResponse<Cart>).body;
  }

  public async removeProduct({
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }): Promise<Cart | undefined> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID, version } = await this.getCartIDAndVersion();
    const lineItem = await this.getLineItemByProductID(productId);

    if (!lineItem) {
      return undefined;
    }

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

    return (result as ClientResponse<Cart>).body;
  }

  public async createCart(): Promise<void> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();

    await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .carts()
      .post({ body: { currency: 'USD', country: 'US' } })
      .execute();
  }

  public async deleteCart(): Promise<void> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID, version } = await this.getCartIDAndVersion();

    await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .carts()
      .withId({ ID })
      .delete({ queryArgs: { version } })
      .execute();
  }

  public async clearCart(): Promise<Cart | undefined> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID, version } = await this.getCartIDAndVersion();
    const lineItems = await this.getProducts();
    if (!lineItems.length) {
      return undefined;
    }

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

    return (result as ClientResponse<Cart>).body;
  }

  public async getCountCustomerCarts(): Promise<number> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();

    const customer = await apiRoot
      .withProjectKey({ projectKey: this.projectKey })
      .me()
      .get()
      .execute();

    const customerId = customer.body.id;

    const result = await apiRoot
      .withProjectKey({
        projectKey: this.projectKey,
      })
      .me()
      .carts()
      .get()
      .execute();

    const customerCarts = result.body.results.filter(
      (item) => item.customerId === customerId
    );

    return customerCarts.length;
  }

  public async getCart(): Promise<Cart> {
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
    return result.body;
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

  private async getLineItemByProductID(
    productId: string
  ): Promise<LineItem | undefined> {
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

    return lineItems.find((item) => item.productId === productId);
  }

  private async getPromocodeID(code: string): Promise<string | undefined> {
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
    return promocode?.id;
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

    return !!result.body.discountCodes.length;
  }
}

export default CartRepository;
