import { CollectionAddress } from './collection-address.entity';
import { DeliveryAddress } from './delivery-address.entity';
import { FreightOperator } from './freight-operator.entity';
import { Shopkeeper } from './shopkeeper.entity';

export interface FreightQuoteInterface {
  id?: string;
  heightCM: number;
  widthCM: number;
  lengthCM: number;
  cubicWeight: number;
  distanceKM: number;
  collectionAddress: CollectionAddress;
  deliveryAddress: DeliveryAddress;
  moreCheapOperator: FreightOperator;
  moreCheapTotalCost: number;
  moreCheapDaysToDelivery: number;
  moreFastOperator: FreightOperator;
  moreFastTotalCost: number;
  moreFastDaysToDelivery: number;
  shopkeeper: Shopkeeper;
}

export class FreightQuote {
  id?: string;
  heightCM: number;
  widthCM: number;
  lengthCM: number;
  cubicWeight: number;
  distanceKM: number;
  collectionAddress: CollectionAddress;
  deliveryAddress: DeliveryAddress;
  moreCheapOperator: FreightOperator;
  moreCheapTotalCost: number;
  moreCheapDaysToDelivery: number;
  moreFastOperator: FreightOperator;
  moreFastTotalCost: number;
  moreFastDaysToDelivery: number;
  shopkeeper: Shopkeeper;

  constructor({
    id,
    heightCM,
    widthCM,
    lengthCM,
    cubicWeight,
    distanceKM,
    collectionAddress,
    deliveryAddress,
    moreCheapOperator,
    moreCheapTotalCost,
    moreCheapDaysToDelivery,
    moreFastOperator,
    moreFastTotalCost,
    moreFastDaysToDelivery,
  }: FreightQuoteInterface) {
    this.id = id;
    this.heightCM = heightCM;
    this.widthCM = widthCM;
    this.lengthCM = lengthCM;
    this.cubicWeight = cubicWeight;
    this.distanceKM = distanceKM;
    this.collectionAddress = collectionAddress;
    this.deliveryAddress = deliveryAddress;
    this.moreCheapOperator = moreCheapOperator;
    this.moreCheapTotalCost = moreCheapTotalCost;
    this.moreCheapDaysToDelivery = moreCheapDaysToDelivery;
    this.moreFastOperator = moreFastOperator;
    this.moreFastTotalCost = moreFastTotalCost;
    this.moreFastDaysToDelivery = moreFastDaysToDelivery;
  }
}
