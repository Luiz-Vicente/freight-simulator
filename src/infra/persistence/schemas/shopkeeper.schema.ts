import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AddressSchema } from './address.schema';
import { FreightQuoteSchema } from './freight-quote.schema';

@Entity('shopkeepers')
export class ShopkeeperSchema {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @OneToOne(() => AddressSchema, { onDelete: 'CASCADE', cascade: true })
  @JoinColumn({ name: 'addressId' })
  address: AddressSchema;

  @OneToMany(
    () => FreightQuoteSchema,
    (freightQuote) => freightQuote.shopkeeper,
  )
  freightQuotes: FreightQuoteSchema[];
}
