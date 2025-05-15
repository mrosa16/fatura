import { Fare } from '../entities/fare.entities';

export interface IFareRepository {
  findAll(): Promise<Fare[]>;
  findByDistribuidora(distribuidora: string): Promise<Fare | null>;
  save(fare: Fare): Promise<void>;
}
