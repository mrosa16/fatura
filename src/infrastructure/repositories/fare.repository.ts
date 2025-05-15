import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IFareRepository } from 'src/domain/repositories/fare.repository';
import { Repository } from 'typeorm';
import { FareOrmEntity } from '../database/entities/fare.orm-entity';
import { Fare } from 'src/domain/entities/fare.entities';
import { FareMapper } from '../database/mapper/fare.mapper';

@Injectable()
export class FareReposiotory implements IFareRepository {
  constructor(
    @InjectRepository(FareOrmEntity)
    private readonly ormRepo: Repository<FareOrmEntity>,
  ) {}

  async findAll(): Promise<Fare[]> {
    const all = await this.ormRepo.find();
    return all.map((entity) => FareMapper.toDomain(entity));
  }

  async findByDistribuidora(distribuidora: string): Promise<Fare | null> {
    const result = await this.ormRepo.findOne({ where: { distribuidora } });
    return result ? FareMapper.toDomain(result) : null;
  }

  async save(tariff: Fare): Promise<void> {
    const orm = FareMapper.toOrm(tariff);
    await this.ormRepo.save(orm);
  }
}
