import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';

import { CustomerResponse } from 'src/infrastructure/integrations/strapi/types/customer-response';
import { StrapiService } from 'src/infrastructure/integrations/strapi/strapi.service';
import { ListCustomersUseCase } from 'src/application/use-cases/list-customers.use-case';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly listCustomers: ListCustomersUseCase,
    private readonly strapi: StrapiService,
  ) {}

  @Get()
  async findAll(): Promise<CustomerResponse[]> {
    return await this.listCustomers.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CustomerResponse> {
    return await this.strapi.getCustomerById(id);
  }

  @Post()
  async create(
    @Body()
    body: {
      nome: string;
      email: string;
      cpf_cnpj: string;
      unidadeConsumidora: string;
    },
  ): Promise<CustomerResponse> {
    return this.strapi.createCustomer(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    body: {
      nome?: string;
      email?: string;
      unidadeConsumidora?: string;
    },
  ): Promise<CustomerResponse> {
    return await this.strapi.updateCustomer(id, body);
  }
}
