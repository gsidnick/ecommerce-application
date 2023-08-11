import CustomerRepository from '@/api/repositories/CustomerRepository';
import { getOptions } from '@/api/helpers/options';
import { UserCredentialData, UserRegistrationData } from '../types';

class CustomerController {
  public async registerCustomer(userData: UserRegistrationData): Promise<void> {
    const options = getOptions();
    const data = await new CustomerRepository(options).registerCustomer(
      userData
    );
  }

  public async loginCustomer(userData: UserCredentialData): Promise<void> {
    const options = getOptions(userData);
    const data = await new CustomerRepository(options).loginCustomer(userData);
  }
}

export default CustomerController;
