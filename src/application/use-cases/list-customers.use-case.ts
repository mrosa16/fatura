import { Injectable } from '@nestjs/common';
import { StrapiService } from 'src/infrastructure/integrations/strapi/strapi.service';
import { CustomerResponse } from 'src/infrastructure/integrations/strapi/types/customer-response';

@Injectable()
export class ListCustomersUseCase {
  constructor(private readonly strapi: StrapiService) {}

  async execute(): Promise<CustomerResponse[]> {
    return this.strapi.getCustomers();
  }
}
