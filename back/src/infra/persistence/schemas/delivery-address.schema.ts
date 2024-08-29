import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('delivery_addresses_quotation')
export class DeliveryAddressSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;
}
