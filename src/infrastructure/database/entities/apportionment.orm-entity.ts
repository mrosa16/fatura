import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerOrmEntity } from './customer.orm-entity';
import { PlantOrmEntity } from './plant.orm-entity';

@Entity('apportionment')
export class ApportionmentOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CustomerOrmEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerOrmEntity;

  @ManyToOne(() => PlantOrmEntity)
  @JoinColumn({ name: 'usina_id' })
  usina: PlantOrmEntity;

  @Column('decimal')
  percentual: number;
}
