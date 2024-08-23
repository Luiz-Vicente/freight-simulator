import { Address } from './address.entity';
import { DeliverySettings } from './delivery-settings.entity';

export interface FreightOperatorInterface {
  id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  cubageFactor: number;
  deliverSettings: DeliverySettings[];
  address: Address;
}

export class FreightOperator {
  id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  cubageFactor: number;
  deliverSettings: DeliverySettings[];
  address: Address;

  constructor({
    id,
    name,
    phoneNumber,
    email,
    cubageFactor,
    deliverSettings,
    address,
  }: FreightOperatorInterface) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.cubageFactor = cubageFactor;
    this.deliverSettings = deliverSettings;
    this.address = address;
  }
}
