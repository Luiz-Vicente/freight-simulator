import { Repository } from 'typeorm';
import { AddressSchema } from '../schemas/address.schema';
import { AddressRepository } from 'src/domain/repositories/address.repository';
import { Address } from 'src/domain/entities/address.entity';

export class AddressTypeOrmRepository implements AddressRepository {
  constructor(private ormRepo: Repository<AddressSchema>) {}

  async create(address: AddressSchema): Promise<Address> {
    const model = this.ormRepo.create(address);
    await this.ormRepo.save(model);

    return model;
  }
}
