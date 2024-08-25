import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './modules/address/address.module';
import typeorm from './infra/database/typeorm';
import { FreightOperatorModule } from './modules/freight-operator/freight-operator.module';
import { FreightQuoteModule } from './modules/freight-quote/freight-quote.module';
import { ShopkeeperModule } from './modules/shopkeeper/shopkeeper.module';
import { GeocodingModule } from './modules/geocoding/geocoding.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    AddressModule,
    ShopkeeperModule,
    FreightOperatorModule,
    FreightQuoteModule,
    GeocodingModule,
  ],
})
export class AppModule {}
