import { Customer } from 'src/domain/entities/customer.entities';
import { CustomerOrmEntity } from '../entities/customer.orm-entity';

export class CustomerMapper {
  static toDomain(entity: CustomerOrmEntity): Customer {
    return new Customer(
      entity.id,
      entity.name,
      entity.cpfCnpj,
      entity.email,
      entity.unidadeConsumidora,
      entity.distribuidora,
    );
  }

  static toOrm(domain: Customer): CustomerOrmEntity {
    const entity = new CustomerOrmEntity();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.cpfCnpj = domain.cpfCnpj;
    entity.email = domain.email;
    entity.unidadeConsumidora = domain.unidadeConsumidora;
    entity.distribuidora = domain.distribuidora;
    return entity;
  }
}
