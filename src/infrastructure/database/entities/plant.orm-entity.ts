import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plant')
export class PlantOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column('decimal')
  capacidadeKwp: number;

  @Column()
  codigoANEEL: string;
}
