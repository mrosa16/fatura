import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerOrmEntity } from './customer.orm-entity';
import { FareOrmEntity } from './fare.orm-entity';

@Entity('invoices')
export class InvoiceOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CustomerOrmEntity)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerOrmEntity;

  @ManyToOne(() => FareOrmEntity)
  @JoinColumn({ name: 'fare_id' })
  fare: FareOrmEntity;

  @Column()
  mesReferencia: string;
  @Column('decimal')
  consumoKwh: number;

  @Column('decimal')
  energiaCompensadaKwh: number;

  @Column('decimal')
  valorBruto: number;

  @Column('decimal')
  valorImpostos: number;

  @Column('decimal')
  valorTotal: number;

  @Column({ default: 'pendente' })
  status: 'pendente' | 'pago' | 'vencido';
}
