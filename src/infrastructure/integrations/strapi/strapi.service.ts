import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { FareResponse } from './types/fare-response';
import { CustomerResponse } from './types/customer-response';
import { ApportionmentResponse } from './types/apportionments-response';
import { PlantResponse } from './types/plant-response';

@Injectable()
export class StrapiService {
  private readonly http: AxiosInstance;
  private readonly logger = new Logger(StrapiService.name);

  constructor() {
    this.http = axios.create({
      baseURL: process.env.STRAPI_API_URL || 'http://localhost:1337/api',
    });
  }

  async getFares(): Promise<FareResponse[]> {
    try {
      const response = await this.http.get<{ data: FareResponse[] }>('/fare');
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'getFares');
    }
  }

  async getCustomers(): Promise<CustomerResponse[]> {
    try {
      const response = await this.http.get<{ data: CustomerResponse[] }>(
        '/customers',
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'getCustomers');
    }
  }

  async getCustomerById(id: string): Promise<CustomerResponse> {
    try {
      const response = await this.http.get<{ data: CustomerResponse }>(
        `/customers/${id}`,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'getCustomerById');
    }
  }
  async updateCustomer(
    id: string,
    data: Partial<CustomerResponse['attributes']>,
  ): Promise<CustomerResponse> {
    try {
      const response = await this.http.put<{ data: CustomerResponse }>(
        `/customers/${id}`,
        { data },
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'updateCustomer');
    }
  }

  async createCustomer(
    data: Partial<CustomerResponse['attributes']>,
  ): Promise<CustomerResponse> {
    try {
      const response = await this.http.post<{ data: CustomerResponse }>(
        '/customers',
        { data },
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'createCustomer');
    }
  }

  async getApportionments(): Promise<ApportionmentResponse[]> {
    try {
      const response = await this.http.get<{
        data: ApportionmentResponse[];
      }>('/apportionments?populate=customer,plant');
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'getApportionments');
    }
  }

  async getPlants(): Promise<PlantResponse[]> {
    try {
      const response = await this.http.get<{ data: PlantResponse[] }>(
        '/plants',
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error, 'getPlants');
    }
  }

  private handleError(error: unknown, context: string): never {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      this.logger.error(`[${context}] Erro ao acessar o Strapi`, {
        status: axiosError.response?.status,
        message: axiosError.message,
        data: axiosError.response?.data,
      });

      if (axiosError.response?.status === 404) {
        throw new NotFoundException(
          `Recurso não encontrado em Strapi: ${context}`,
        );
      }

      throw new InternalServerErrorException(
        `Erro de integração com o Strapi: ${context}`,
      );
    }

    this.logger.error(`[${context}] Erro desconhecido`, error);
    throw new InternalServerErrorException(
      `Erro inesperado ao acessar o Strapi (${context})`,
    );
  }
}
