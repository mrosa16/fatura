import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceOrmEntity } from '../infrastructure/database/entities/invoice.orm-entity';
import { InvoiceRepository } from 'src/infrastructure/repositories/invoice.repository';
import { GenerateInvoiceUseCase } from 'src/application/use-cases/invoice/generate-invoice.use-case';

import { StrapiModule } from 'src/infrastructure/integrations/strapi/strapi.module';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceOrmEntity]), StrapiModule],
  controllers: [InvoiceController],
  providers: [
    GenerateInvoiceUseCase,
    {
      provide: 'IInvoiceRepository',
      useClass: InvoiceRepository,
    },
  ],
  exports: ['IInvoiceRepository'],
})
export class InvoiceModule {}
