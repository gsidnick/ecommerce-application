import { ClientResponse } from '@commercetools/sdk-client-v2';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { getProjectKey } from '@/api/helpers/options';
import TokenClient from '@/api/client/TokenClient';

class CartRepository {
  private readonly projectKey: string;

  constructor() {
    this.projectKey = getProjectKey();
  }

  public async addProduct(productId: string): Promise<void> {
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
      .post({
        body: {
          version,
          actions: [
            { action: 'addLineItem', productId, variantId: 1, quantity: 1 },
          ],
        },
      })
      .execute();
  }

  public async removeProduct(productId: string): Promise<void> {
    const client = new TokenClient();
    const apiRoot = client.getApiRoot();
    const { ID, version } = await this.getCartIDAndVersion();
    const lineItem = await this.getLineItemByProductID(productId);

    if (!lineItem) {
      return;
    }

    await apiRoot
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
            { action: 'removeLineItem', lineItemId: lineItem.id, quantity: 1 },
          ],
        },
      })
      .execute();
  }

  public async createCart(): Promise<ClientResponse<Cart>> {
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
}

export default CartRepository;
