import { Plant } from '../entities/plant.entities';

export interface IPlantRepository {
  findById(id: string): Promise<Plant | null>;
  findAll(): Promise<Plant[]>;
  save(Usina: Plant): Promise<void>;
}
