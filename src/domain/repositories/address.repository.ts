import { Address, AddressInterface } from '../entities/address.entity';

export interface AddressRepository {
  create(address: AddressInterface): Promise<Address>;
}
