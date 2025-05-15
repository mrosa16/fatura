import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerOrmEntity } from '../infrastructure/database/entities/customer.orm-entity';
import { CustomerRepository } from 'src/infrastructure/repositories/customer.repository';
import { StrapiModule } from 'src/infrastructure/integrations/strapi/strapi.module';
import { ListCustomersUseCase } from 'src/application/use-cases/list-customers.use-case';
import { CustomerController } from 'src/presentation/controllers/customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerOrmEntity]), StrapiModule],
  controllers: [CustomerController],

  providers: [
    {
      provide: 'ICustomerRepository',
      useClass: CustomerRepository,
    },
    ListCustomersUseCase,
  ],
  exports: ['ICustomerRepository'],
})
export class CustomerModule {}
