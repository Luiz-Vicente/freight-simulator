import { Address } from 'src/domain/entities/address.entity';
import { DeliverySettings } from 'src/domain/entities/delivery-settings.entity';

export class CreateFreightOperatorDto {
  name: string;
  phoneNumber: string;
  email: string;
  cubageFactor: number;
  deliverSettings: DeliverySettings[];
  address: Address;
}
