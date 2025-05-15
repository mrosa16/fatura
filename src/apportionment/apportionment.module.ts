import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApportionmentOrmEntity } from 'src/infrastructure/database/entities/apportionment.orm-entity';
import { ApportionmentRepository } from 'src/infrastructure/repositories/apportionment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApportionmentOrmEntity])],
  providers: [
    {
      provide: 'IApportionmentRepository',
      useClass: ApportionmentRepository,
    },
  ],
  exports: ['IApportionmentRepository'],
})
export class ApportionmentModule {}
