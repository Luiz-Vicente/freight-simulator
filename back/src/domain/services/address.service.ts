import { CreateAddressDto } from 'src/domain/services/dtos/address.dto';
import { Address } from '../entities/address.entity';
import { AddressRepository } from '../repositories/address.repository';

export class AddressService {
  constructor(private addressRepo: AddressRepository) {}

  async create(methodDto: CreateAddressDto): Promise<Address> {
    const newAddress = new Address(methodDto);
    return await this.addressRepo.create(newAddress);
  }
}
