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

  public logoutCustomer(): void {
    this.customerRepository.logoutCustomer();
  }
}

export default CustomerController;
