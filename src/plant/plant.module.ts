import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlantOrmEntity } from 'src/infrastructure/database/entities/plant.orm-entity';
import { PlantRepository } from 'src/infrastructure/repositories/plant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlantOrmEntity])],
  providers: [
    {
      provide: 'IPlantRepository',
      useClass: PlantRepository,
    },
  ],
  exports: ['IPlantRepository'],
})
export class PlantModule {}
