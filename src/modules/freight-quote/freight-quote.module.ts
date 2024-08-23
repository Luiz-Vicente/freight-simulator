import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { FreightQuoteSchema } from 'src/infra/schemas/freight-quote.schema';
import { FreightQuoteService } from 'src/domain/services/freight-quote.service';
import { FreightQuoteTypeOrmRepository } from 'src/infra/repositories/freight-quote-typeorm.repository';
import { FreightQuoteController } from './freight-quote.controller';
import { ShopkeeperModule } from '../shopkeeper/shopkeeper.module';
import { ShopkeeperService } from 'src/domain/services/shopkeeper.service';
import { FreightOperatorService } from 'src/domain/services/freight-operator.service';
import { FreightOperatorModule } from '../freight-operator/freight-operator.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FreightQuoteSchema]),
    ShopkeeperModule,
    FreightOperatorModule,
  ],
  controllers: [FreightQuoteController],
  providers: [
    {
      provide: FreightQuoteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new FreightQuoteTypeOrmRepository(
          dataSource.getRepository(FreightQuoteSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: FreightQuoteService,
      useFactory: (
        repo: FreightQuoteTypeOrmRepository,
        shopkeeperService: ShopkeeperService,
        freightOperatorService: FreightOperatorService,
      ) => {
        return new FreightQuoteService(
          repo,
          shopkeeperService,
          freightOperatorService,
        );
      },
      inject: [
        FreightQuoteTypeOrmRepository,
        ShopkeeperService,
        FreightOperatorService,
      ],
    },
  ],
})
export class FreightQuoteModule {}
