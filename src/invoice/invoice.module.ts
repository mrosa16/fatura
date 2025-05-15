import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceOrmEntity } from '../infrastructure/database/entities/invoice.orm-entity';
import { InvoiceRepository } from 'src/infrastructure/repositories/invoice.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceOrmEntity])],
  providers: [
    {
      provide: 'IInvoiceRepository',
      useClass: InvoiceRepository,
    },
  ],
  exports: ['IInvoiceRepository'],
})
export class InvoiceModule {}
