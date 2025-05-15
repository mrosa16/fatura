import { Fare } from 'src/domain/entities/fare.entities';
import { FareOrmEntity } from '../entities/fare.orm-entity';

export class FareMapper {
  static toDomain(entity: FareOrmEntity): Fare {
    return new Fare(
      entity.id,
      Number(entity.te),
      Number(entity.tusd),
      Number(entity.icms),
      Number(entity.pis),
      Number(entity.cofins),
      entity.distribuidora,
      entity.vigencia,
    );
  }

  static toOrm(domain: Fare): FareOrmEntity {
    const orm = new FareOrmEntity();
    orm.id = domain.id;
    orm.distribuidora = domain.distribuidora;
    orm.vigencia = domain.vigencia;
    orm.te = domain.te;
    orm.tusd = domain.tusd;
    orm.icms = domain.icms;
    orm.pis = domain.pis;
    orm.cofins = domain.cofins;
    return orm;
  }
}
