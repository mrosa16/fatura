import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('fare')
export class FareOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  distribuidora: string;

  @Column({ type: 'date' })
  vigencia: Date;

  @Column('decimal')
  te: number;

  @Column('decimal')
  tusd: number;

  @Column('decimal')
  icms: number;

  @Column('decimal')
  pis: number;

  @Column('decimal')
  cofins: number;
}
