import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IInvoiceRepository } from 'src/domain/repositories/invoice.repository';
import { Repository } from 'typeorm';
import { InvoiceOrmEntity } from '../database/entities/invoice.orm-entity';
import { Invoice } from 'src/domain/entities/invoice.entities';
import { InvoiceMapper } from '../database/mapper/invoice.mapper';

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {
  constructor(
    @InjectRepository(InvoiceOrmEntity)
    private readonly ormRepo: Repository<InvoiceOrmEntity>,
  ) {}

  async findAll(): Promise<Invoice[]> {
    const all = await this.ormRepo.find({ relations: ['customer', 'fare'] });
    return all.map((e) => InvoiceMapper.toDomain(e));
  }

  async save(invoice: Invoice): Promise<void> {
    const orm = InvoiceMapper.toOrm(invoice);
    await this.ormRepo.save(orm);
  }
}
