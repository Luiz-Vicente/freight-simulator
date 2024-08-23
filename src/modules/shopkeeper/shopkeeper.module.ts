import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ShopkeeperSchema } from 'src/infra/schemas/shopkeeper.schema';
import { ShopkeeperController } from './shopkeeper.controller';
import { ShopkeeperTypeOrmRepository } from 'src/infra/repositories/shopkeeper-typeorm.repository';
import { ShopkeeperService } from 'src/domain/services/shopkeeper.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShopkeeperSchema])],
  controllers: [ShopkeeperController],
  providers: [
    {
      provide: ShopkeeperTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new ShopkeeperTypeOrmRepository(
          dataSource.getRepository(ShopkeeperSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: ShopkeeperService,
      useFactory: (repo: ShopkeeperTypeOrmRepository) => {
        return new ShopkeeperService(repo);
      },
      inject: [ShopkeeperTypeOrmRepository],
    },
  ],
  exports: [ShopkeeperService],
})
export class ShopkeeperModule {}
