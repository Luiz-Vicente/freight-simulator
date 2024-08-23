import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { FreightOperatorSchema } from './freight-operator.schema';

@Entity('delivery_settings')
export class DeliverSettingsSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  initialDistance: number;

  @Column()
  finalDistance: number;

  @Column()
  multipleofDistance: number;

  @Column()
  daysToDeliver: number;

  @ManyToOne(
    () => FreightOperatorSchema,
    (freightOperator) => freightOperator.deliverSettings,
  )
  freightOperator: FreightOperatorSchema;
}
