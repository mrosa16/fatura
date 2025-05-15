import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantOrmEntity } from '../database/entities/plant.orm-entity';
import { Plant } from 'src/domain/entities/plant.entities';
import { IPlantRepository } from 'src/domain/repositories/plant.repository';
import { PlantMapper } from '../database/mapper/plant.mapper';

@Injectable()
export class PlantRepository implements IPlantRepository {
  constructor(
    @InjectRepository(PlantOrmEntity)
    private readonly ormRepo: Repository<PlantOrmEntity>,
  ) {}

  async findById(id: string): Promise<Plant | null> {
    const usina = await this.ormRepo.findOne({ where: { id } });
    return usina ? PlantMapper.toDomain(usina) : null;
  }

  async findAll(): Promise<Plant[]> {
    const usinas = await this.ormRepo.find();
    return usinas.map((entity) => PlantMapper.toDomain(entity));
  }

  async save(usina: Plant): Promise<void> {
    const orm = PlantMapper.toOrm(usina);
    await this.ormRepo.save(orm);
  }
}
