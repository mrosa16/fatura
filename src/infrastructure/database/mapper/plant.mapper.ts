import { PlantOrmEntity } from '../entities/plant.orm-entity';
import { Plant } from 'src/domain/entities/plant.entities';

export class PlantMapper {
  static toDomain(entity: PlantOrmEntity): Plant {
    return new Plant(
      entity.id,
      entity.nome,
      Number(entity.capacidadeKwp),
      entity.codigoANEEL,
    );
  }

  static toOrm(domain: Plant): PlantOrmEntity {
    const orm = new PlantOrmEntity();
    orm.id = domain.id;
    orm.nome = domain.name;
    orm.capacidadeKwp = domain.capacidadekwp;
    orm.codigoANEEL = domain.codigoANEEL;
    return orm;
  }
}
