import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { FreightOperatorTypeOrmRepository } from 'src/infra/repositories/freight-operator-typeorm.repository';
import { FreightOperatorSchema } from 'src/infra/schemas/freight-operator.schema';
import { FreightOperatorController } from './freight-operator.controller';
import { FreightOperatorService } from 'src/domain/services/freight-operator.service';

@Module({
  imports: [TypeOrmModule.forFeature([FreightOperatorSchema])],
  controllers: [FreightOperatorController],
  providers: [
    {
      provide: FreightOperatorTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new FreightOperatorTypeOrmRepository(
          dataSource.getRepository(FreightOperatorSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: FreightOperatorService,
      useFactory: (repo: FreightOperatorTypeOrmRepository) => {
        return new FreightOperatorService(repo);
      },
      inject: [FreightOperatorTypeOrmRepository],
    },
  ],
  exports: [FreightOperatorService],
})
export class FreightOperatorModule {}
