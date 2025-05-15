import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FareOrmEntity } from '../infrastructure/database/entities/fare.orm-entity';
import { FareReposiotory } from 'src/infrastructure/repositories/fare.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FareOrmEntity])],
  providers: [
    {
      provide: 'IFareRepository',
      useClass: FareReposiotory,
    },
  ],
  exports: ['IFareRepository'],
})
export class FareModule {}
