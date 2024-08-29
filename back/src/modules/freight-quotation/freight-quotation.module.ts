import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { FreightQuotationSchema } from 'src/infra/persistence/schemas/freight-quotation.schema';
import { FreightQuotationService } from 'src/domain/services/freight-quotation.service';
import { FreightQuotationTypeOrmRepository } from 'src/infra/persistence/repositories/freight-quotation-typeorm.repository';
import { FreightQuotationController } from './freight-quotation.controller';
import { ShopkeeperModule } from '../shopkeeper/shopkeeper.module';
import { ShopkeeperService } from 'src/domain/services/shopkeeper.service';
import { FreightOperatorService } from 'src/domain/services/freight-operator.service';
import { FreightOperatorModule } from '../freight-operator/freight-operator.module';
import { GeocodingModule } from '../geocoding/geocoding.module';
import { GeocodingService } from 'src/domain/services/geocoding.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FreightQuotationSchema]),
    ShopkeeperModule,
    FreightOperatorModule,
    GeocodingModule,
  ],
  controllers: [FreightQuotationController],
  providers: [
    {
      provide: FreightQuotationTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new FreightQuotationTypeOrmRepository(
          dataSource.getRepository(FreightQuotationSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: FreightQuotationService,
      useFactory: (
        repo: FreightQuotationTypeOrmRepository,
        shopkeeperService: ShopkeeperService,
        freightOperatorService: FreightOperatorService,
        geoCodingService: GeocodingService,
      ) => {
        return new FreightQuotationService(
          repo,
          shopkeeperService,
          freightOperatorService,
          geoCodingService,
        );
      },
      inject: [
        FreightQuotationTypeOrmRepository,
        ShopkeeperService,
        FreightOperatorService,
        GeocodingService,
      ],
    },
  ],
})
export class FreightQuotationModule {}
