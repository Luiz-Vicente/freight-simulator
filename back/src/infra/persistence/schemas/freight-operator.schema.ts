import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AddressSchema } from './address.schema';
import { DeliverSettingsSchema } from './deliver-settings.schema';
import { FreightQuotationSchema } from './freight-quotation.schema';

@Entity('freight_operators')
export class FreightOperatorSchema {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  cubageFactor: number;

  @OneToMany(
    () => DeliverSettingsSchema,
    (deliverSettings) => deliverSettings.freightOperator,
    { cascade: true },
  )
  deliverSettings: DeliverSettingsSchema[];

  @OneToOne(() => AddressSchema, { onDelete: 'CASCADE', cascade: true })
  @JoinColumn({ name: 'addressId' })
  address: AddressSchema;

  @OneToMany(
    () => FreightQuotationSchema,
    (FreightQuotation) => FreightQuotation.fastestOperator,
  )
  fastFreightQuotations: FreightQuotationSchema[];

  @OneToMany(
    () => FreightQuotationSchema,
    (FreightQuotation) => FreightQuotation.cheapestOperator,
  )
  cheapFreightQuotations: FreightQuotationSchema[];
}
