import { Invoice } from '../entities/invoice.entities';

export interface IInvoiceRepository {
  findAll(): Promise<Invoice[]>;
  save(invoice: Invoice): Promise<void>;
}
