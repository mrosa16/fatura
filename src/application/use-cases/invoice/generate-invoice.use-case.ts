import { Injectable } from '@nestjs/common';
import { StrapiService } from 'src/infrastructure/integrations/strapi/strapi.service';
import { Invoice } from 'src/domain/entities/invoice.entities';
import { Fare } from 'src/domain/entities/fare.entities';

@Injectable()
export class GenerateInvoiceUseCase {
  constructor(private readonly strapi: StrapiService) {}

  async execute(customerId?: string): Promise<Invoice[]> {
    const rateios = await this.strapi.getApportionments();
    const tarifas = await this.strapi.getFares();
    const tarifa = tarifas[0];
    const { attributes } = tarifa;
    const fare = new Fare(
      tarifa.id.toString(),
      attributes.te,
      attributes.tusd,
      attributes.icms,
      attributes.pis,
      attributes.cofins,
      attributes.distribuidora || '',
      new Date(attributes.vigencia),
    );

    const energiaGerada = 10000;
    const invoices: Invoice[] = [];

    const rateiosFiltrados = customerId
      ? rateios.filter((r) => r.attributes.customer.data.id === +customerId)
      : rateios;

    for (const rateio of rateiosFiltrados) {
      const consumo = energiaGerada * rateio.attributes.percentual + 200;
      const invoice = new Invoice(
        '',
        rateio.attributes.customer.data.id.toString(),
        '2025-05',
        consumo,
        energiaGerada * rateio.attributes.percentual,
        fare,
      );
      invoices.push(invoice);
    }

    return invoices;
  }
}
