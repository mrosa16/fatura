import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICustomerInterface } from 'src/domain/repositories/customer.repository';
import { CustomerOrmEntity } from '../database/entities/customer.orm-entity';
import { Repository } from 'typeorm';
import { Customer } from 'src/domain/entities/customer.entities';
import { CustomerMapper } from '../database/mapper/customer.mapper';

@Injectable()
export class CustomerRepository implements ICustomerInterface {
  constructor(
    @InjectRepository(CustomerOrmEntity)
    private readonly ormRepo: Repository<CustomerOrmEntity>,
  ) {}

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.ormRepo.findOne({ where: { id } });
    return customer ? CustomerMapper.toDomain(customer) : null;
  }

  async findAll(): Promise<Customer[]> {
    const all = await this.ormRepo.find();
    return all.map((entity) => CustomerMapper.toDomain(entity));
  }

  async save(customer: Customer): Promise<void> {
    const ormEntity = CustomerMapper.toOrm(customer);
    await this.ormRepo.save(ormEntity);
  }
}
