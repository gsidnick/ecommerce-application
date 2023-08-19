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

  public async registerCustomer(userData: UserRegistrationData): Promise<void> {
    const data = await this.customerRepository.registerCustomer(userData);
    console.log('Registration Check', data);
  }

  public async loginCustomer(
    userData: UserCredentialData
  ): Promise<IApiLoginResult> {
    const data: IApiLoginResult = await this.customerRepository.loginCustomer(
      userData
    );
    console.log('Login Check', data);

    return data;
  }

  public logoutCustomer(): void {
    this.customerRepository.logoutCustomer();
  }
}

export default CustomerController;
