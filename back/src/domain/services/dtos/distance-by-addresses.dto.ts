import { Address } from 'src/domain/entities/address.entity';

export interface GetDistanceByAddressesDto {
  from: Address;
  to: Address;
}
