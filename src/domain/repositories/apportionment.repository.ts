import { Apportionment } from '../entities/apportionment.entities';

export interface IApportionmentRepository {
  findAll(): Promise<Apportionment[]>;
  save(apportionment: Apportionment): Promise<void>;
}
