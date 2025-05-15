import { Customer } from '../entities/customer.entities';

export interface ICustomerInterface {
  findById(id: string): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
  save(customer: Customer): Promise<void>;
}
