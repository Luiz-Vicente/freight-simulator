import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FreightOperatorSchema } from './freight-operator.schema';
import { DeliveryAddressSchema } from './delivery-address.schema';
import { CollectionAddressSchema } from './collection-address.schema';
import { ShopkeeperSchema } from './shopkeeper.schema';

@Entity('freight_quotes')
export class FreightQuoteSchema {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => FreightOperatorSchema)
  @JoinColumn({ name: 'moreFastOperatorId' })
  moreFastOperator: FreightOperatorSchema;

  @Column()
  moreFastDaysToDelivery: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  moreFastTotalCost: number;

  @ManyToOne(() => FreightOperatorSchema)
  @JoinColumn({ name: 'moreCheapOperatorId' })
  moreCheapOperator: FreightOperatorSchema;

  @Column()
  moreCheapDaysToDelivery: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  moreCheapTotalCost: number;

  @ManyToOne(() => ShopkeeperSchema)
  @JoinColumn({ name: 'shopkeeperId' })
  shopkeeper: ShopkeeperSchema;

  @ManyToOne(() => DeliveryAddressSchema, { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'deliveryAddressId' })
  deliveryAddress: DeliveryAddressSchema;

  @ManyToOne(() => CollectionAddressSchema, { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'collectionAddressId' })
  collectionAddress: CollectionAddressSchema;

  @Column('decimal')
  distanceKM: number;

  @Column('decimal')
  heightCM: number;

  @Column('decimal')
  widthCM: number;

  @Column('decimal')
  lengthCM: number;

  @Column('decimal')
  cubicWeight: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
