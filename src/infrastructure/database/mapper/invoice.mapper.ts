import { InvoiceOrmEntity } from '../entities/invoice.orm-entity';
import { CustomerOrmEntity } from '../entities/customer.orm-entity';
import { FareMapper } from './fare.mapper';
import { FareOrmEntity } from '../entities/fare.orm-entity';
import { Invoice } from 'src/domain/entities/invoice.entities';

export class InvoiceMapper {
  static toDomain(entity: InvoiceOrmEntity): Invoice {
    const fareDomain = FareMapper.toDomain(entity.fare);
    return new Invoice(
      entity.id,
      entity.customer.id,
      entity.mesReferencia,
      Number(entity.consumoKwh),
      Number(entity.energiaCompensadaKwh),
      fareDomain,
    );
  }

  static toOrm(domain: Invoice): InvoiceOrmEntity {
    const orm = new InvoiceOrmEntity();
    orm.id = domain.id;
    orm.mesReferencia = domain.mesReferencia;
    orm.consumoKwh = domain.consumoKwh;
    orm.energiaCompensadaKwh = domain.energiaCompensadaKwh;

    const customer = new CustomerOrmEntity();
    customer.id = domain.customerId;
    orm.customer = customer;

    const fare = new FareOrmEntity();
    fare.id = domain.tarifa.id;
    orm.fare = fare;

    orm.valorBruto = domain.calcularValorBruto();
    orm.valorImpostos = domain.calcularImpostos();
    orm.valorTotal = domain.calcularValorFinal();
    orm.status = 'pendente';

    return orm;
  }
}
