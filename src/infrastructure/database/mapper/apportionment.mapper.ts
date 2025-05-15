import { Apportionment } from 'src/domain/entities/apportionment.entities';
import { ApportionmentOrmEntity } from '../entities/apportionment.orm-entity';
import { CustomerOrmEntity } from '../entities/customer.orm-entity';
import { PlantOrmEntity } from '../entities/plant.orm-entity';

export class ApportionmentMapper {
  static toDomain(entity: ApportionmentOrmEntity): Apportionment {
    return new Apportionment(
      entity.id,
      entity.customer.id,
      entity.usina.id,
      Number(entity.percentual),
    );
  }

  static toOrm(domain: Apportionment): ApportionmentOrmEntity {
    const orm = new ApportionmentOrmEntity();
    orm.id = domain.id;
    orm.percentual = domain.percentual;

    const customer = new CustomerOrmEntity();
    customer.id = domain.customerId;
    orm.customer = customer;

    const usina = new PlantOrmEntity();
    usina.id = domain.plantId;
    orm.usina = usina;
    return orm;
  }
}
