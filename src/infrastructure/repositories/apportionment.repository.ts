import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ApportionmentOrmEntity } from '../database/entities/apportionment.orm-entity';
import { ApportionmentMapper } from '../database/mapper/apportionment.mapper';
import { IApportionmentRepository } from 'src/domain/repositories/apportionment.repository';
import { Apportionment } from 'src/domain/entities/apportionment.entities';

@Injectable()
export class ApportionmentRepository implements IApportionmentRepository {
  constructor(
    @InjectRepository(ApportionmentOrmEntity)
    private readonly ormRepo: Repository<ApportionmentOrmEntity>,
  ) {}

  async findAll(): Promise<Apportionment[]> {
    const all = await this.ormRepo.find({ relations: ['customer', 'usina'] });
    return all.map((entity) => ApportionmentMapper.toDomain(entity));
  }

  async save(apportionment: Apportionment): Promise<void> {
    const orm = ApportionmentMapper.toOrm(apportionment);
    await this.ormRepo.save(orm);
  }
}
