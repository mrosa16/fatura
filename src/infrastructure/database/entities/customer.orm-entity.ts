import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomerOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpfCnpj: string;

  @Column()
  email: string;

  @Column()
  unidadeConsumidora: string;

  @Column()
  distribuidora: string;
}
