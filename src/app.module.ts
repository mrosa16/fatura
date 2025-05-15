import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { PlantModule } from './plant/plant.module';
import { ApportionmentModule } from './apportionment/apportionment.module';
import { FareModule } from './fare/fare.module';
import { InvoiceModule } from './invoice/invoice.module';
import { StrapiModule } from './infrastructure/integrations/strapi/strapi.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    CustomerModule,
    PlantModule,
    ApportionmentModule,
    FareModule,
    InvoiceModule,
    StrapiModule,
  ],
})
export class AppModule {}
