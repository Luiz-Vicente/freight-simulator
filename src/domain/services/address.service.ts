import { CreateAddressDto } from 'src/domain/services/dtos/create-address.dto';
import { Address } from '../entities/address.entity';
import { AddressRepository } from '../repositories/address.repository';

export class AddressService {
  constructor(private addressRepo: AddressRepository) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const newAddress = new Address(createAddressDto);
    const resp = await this.addressRepo.create(newAddress);

    return resp;
  }
}
