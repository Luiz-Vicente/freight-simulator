import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { AddressSchema } from 'src/infra/persistence/schemas/address.schema';
import { AddressTypeOrmRepository } from 'src/infra/persistence/repositories/address-typeorm.repository';
import { DataSource } from 'typeorm';
import { AddressService } from 'src/domain/services/address.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressSchema])],
  controllers: [AddressController],
  providers: [
    {
      provide: AddressTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new AddressTypeOrmRepository(
          dataSource.getRepository(AddressSchema),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: AddressService,
      useFactory: (repo: AddressTypeOrmRepository) => {
        return new AddressService(repo);
      },
      inject: [AddressTypeOrmRepository],
    },
  ],
})
export class AddressModule {}
