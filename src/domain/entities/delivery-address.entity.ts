export interface DeliveryAddressInterface {
  id?: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export class DeliveryAddress {
  id: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;

  constructor({
    id,
    zipCode,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    country,
  }: DeliveryAddressInterface) {
    this.id = id;
    this.zipCode = zipCode;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
