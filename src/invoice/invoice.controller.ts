import { Body, Controller, Post } from '@nestjs/common';
import { GenerateInvoiceUseCase } from 'src/application/use-cases/invoice/generate-invoice.use-case';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly generateInvoice: GenerateInvoiceUseCase) {}

  @Post('generate')
  async generateForCustomer(@Body() body: { customerId: string }) {
    return this.generateInvoice.execute(body.customerId);
  }

  @Post('generate/all')
  async generateForAll() {
    return this.generateInvoice.execute();
  }
}
