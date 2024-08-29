import { Address } from './address.entity';

export interface ShopkeeperInterface {
  id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: Address;
}

export class Shopkeeper {
  id?: string;
  name: string;
  phoneNumber: string;
  email: string;
  address: Address;

  constructor({ id, name, phoneNumber, email, address }: ShopkeeperInterface) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
}
