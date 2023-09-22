import { ClientResponse, TokenStore } from '@commercetools/sdk-client-v2';
import {
  Customer,
  MyCustomerChangePassword,
} from '@commercetools/platform-sdk';
import { MyCustomerUpdate } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/me';
import CustomerRepository from '@/api/repositories/CustomerRepository';
import {
  IApiLoginResult,
  UserCredentialData,
  UserRegistrationData,
} from '../types';

class CustomerController {
  private customerRepository: CustomerRepository;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  public async registerCustomer(
    userData: UserRegistrationData
  ): Promise<IApiLoginResult> {
    return this.customerRepository.registerCustomer(userData);
  }

  public async loginCustomer(
    userData: UserCredentialData
  ): Promise<IApiLoginResult> {
    return this.customerRepository.loginCustomer(userData);
  }

  public async logoutCustomer(): Promise<void> {
    return this.customerRepository.logoutCustomer();
  }

  public async getCustomer(): Promise<ClientResponse<Customer>> {
    return this.customerRepository.getCustomer();
  }

  public async updateCustomer(
    data: MyCustomerUpdate
  ): Promise<ClientResponse<Customer>> {
    return this.customerRepository.updateCustomer(data);
  }

  public async changeCustomerPassword(
    data: MyCustomerChangePassword
  ): Promise<ClientResponse<Customer>> {
    return this.customerRepository.changeCustomerPassword(data);
  }

  public async createAnonymousCustomer(): Promise<TokenStore> {
    return this.customerRepository.createAnonymousCustomer();
  }

  public async checkToken(): Promise<void> {
    return this.customerRepository.checkToken();
  }
}

export default CustomerController;
