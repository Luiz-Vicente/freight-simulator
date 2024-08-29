import { Address } from 'src/domain/entities/address.entity';

export class CreateShopkeeperDto {
  name: string;
  phoneNumber: string;
  email: string;
  address: Address;
}

export class FindShopeekerByIdDto {
  id: string;
}
